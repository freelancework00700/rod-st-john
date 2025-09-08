import { CapacitorUpdater } from '@capgo/capacitor-updater'

// configuration
const CURRENT_VERSION = 'v1.0.0';
const GITHUB_REPO = 'rod-st-john';
const GITHUB_OWNER = 'freelancework00700';

// global variables for update management
let isDownloading = false;
let currentUpdateInfo = null;

async function getLatestRelease() {
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`)
    console.log('response', response);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }
    const release = await response.json()
    console.log('release', release);
    return release
  } catch (error) {
    console.error('Failed to fetch latest release:', error)
    return null
  }
}

// create update popup ui
function createUpdatePopup(releaseInfo) {
  // remove existing popup if any
  const existingPopup = document.getElementById('update-popup');
  if (existingPopup) {
    existingPopup.remove();
  }

  const popup = document.createElement('div');
  popup.id = 'update-popup';
  popup.innerHTML = `
    <div class="update-overlay">
      <div class="update-popup">
        <div class="update-header">
          <div class="update-title">
            <img src="icons/refresh.svg" alt="Update" class="update-icon" />
            <h3>Update Available</h3>
          </div>
        </div>
        <div class="update-content">
          <div class="update-info">
            <p class="version-info"><strong>Version:</strong> ${releaseInfo.tag_name}</p>
            <p class="size-info"><strong>Size:</strong> ${formatFileSize(releaseInfo.assets[0]?.size || 0)}</p>
          </div>
          <p class="update-description">A new version of the app is available. Would you like to download and install it?</p>
          <div class="update-actions">
            <button id="download-btn" class="btn btn-primary">Download</button>
            <button id="cancel-btn" class="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // add styles
  const style = document.createElement('style');
  style.textContent = `
    .update-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    }
    .update-popup {
      background: white;
      border-radius: 12px;
      padding: 24px;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      margin: 0px 20px;
    }
    .update-title {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-bottom: 24px;
    }
    .update-icon {
      width: 24px;
      height: 24px;
      color: #da1a33;
    }
    .update-header h3 {
      margin: 0;
      color: #333;
      font-size: 18px;
      font-weight: 600;
    }
    .update-info {
      margin-bottom: 20px;
    }
    .version-info, .size-info {
      margin: 8px 0;
      color: #666;
      font-size: 14px;
    }
    .update-description {
      margin: 0 0 24px 0;
      color: #666;
      line-height: 1.5;
      text-align: center;
    }
    .update-actions {
      display: flex;
      gap: 16px;
      margin-top: 0;
    }
    .btn {
      flex: 1;
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-primary {
      background: #da1a33;
      color: white;
    }
    .btn-primary:hover {
      background: #b8152a;
    }
    .btn-primary:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    .btn-secondary {
      background: #6c757d;
      color: white;
    }
    .btn-secondary:hover {
      background: #545b62;
    }
    .progress-container {
      margin-top: 16px;
      display: none;
    }
    .progress-bar {
      width: 100%;
      height: 8px;
      background: #e9ecef;
      border-radius: 4px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: #da1a33;
      width: 0%;
      transition: width 0.3s ease;
    }
    .progress-text {
      text-align: center;
      margin-top: 8px;
      font-size: 14px;
      color: #666;
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(popup);

  // add event listeners
  document.getElementById('download-btn').addEventListener('click', () => {
    startDownload(releaseInfo);
  });

  document.getElementById('cancel-btn').addEventListener('click', () => {
    closeUpdatePopup();
  });
}

// create progress ui
function createProgressUI() {
  const popup = document.getElementById('update-popup');
  const content = popup.querySelector('.update-content');
  
  const progressHTML = `
    <div class="progress-container" id="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" id="progress-fill"></div>
      </div>
      <div class="progress-text" id="progress-text">Preparing download...</div>
    </div>
  `;
  
  content.insertAdjacentHTML('beforeend', progressHTML);
  
  // hide buttons and show progress
  const actions = popup.querySelector('.update-actions');
  actions.style.display = 'none';
  document.getElementById('progress-container').style.display = 'block';
}

// update progress
function updateProgress(percent, status = '') {
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  
  if (progressFill) {
    progressFill.style.width = `${percent}%`;
  }
  
  if (progressText) {
    if (status) {
      progressText.textContent = status;
    } else {
      progressText.textContent = `Downloading... ${Math.round(percent)}%`;
    }
  }
}

// close popup
function closeUpdatePopup() {
  const popup = document.getElementById('update-popup');
  if (popup) {
    popup.remove();
  }
}

// format file size
function formatFileSize(bytes) {
  if (bytes === 0) return 'Unknown size';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}


// start download process
async function startDownload(releaseInfo) {
  if (isDownloading) return;
  
  isDownloading = true;
  currentUpdateInfo = releaseInfo;
  
  try {
    // create progress ui
    createProgressUI();
    
    // find the build.zip asset
    const buildAsset = releaseInfo.assets.find(asset => asset.name === 'build.zip');
    if (!buildAsset) {
      throw new Error('No build.zip found in latest release');
    }

    console.log(`Starting download: ${releaseInfo.tag_name}`);
    console.log(`Download URL: ${buildAsset.browser_download_url}`);
    console.log(`File size: ${formatFileSize(buildAsset.size)}`);

    // download the update
    const version = await CapacitorUpdater.download({
      url: buildAsset.browser_download_url,
      version: releaseInfo.tag_name
    });

    console.log('Download completed, version:', version);
    
    if (version) {
      updateProgress(100, 'Download complete! Applying update...');
      
      // apply the update
      await CapacitorUpdater.set(version);
      console.log('Update applied successfully');
      
      // update version display to show new version
      updateVersionDisplay(version);
      
      updateProgress(100, 'Update applied! Reloading app...');
      
      // close popup and reload after a short delay
      setTimeout(() => {
        closeUpdatePopup();
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    console.error('Download failed:', error);
    updateProgress(0, `Download failed: ${error.message}`);
    
    // show retry option
    setTimeout(() => {
      const progressContainer = document.getElementById('progress-container');
      if (progressContainer) {
        progressContainer.innerHTML = `
          <div style="text-align: center; color: #dc3545;">
            <p>Download failed. Please check your internet connection and try again.</p>
            <button id="retry-btn" class="btn btn-primary" style="margin-top: 12px;">Retry Download</button>
            <button id="close-btn" class="btn btn-secondary" style="margin-top: 12px; margin-left: 8px;">Close</button>
          </div>
        `;
        
        document.getElementById('retry-btn').addEventListener('click', () => {
          startDownload(releaseInfo);
        });
        
        document.getElementById('close-btn').addEventListener('click', () => {
          closeUpdatePopup();
        });
      }
    }, 2000);
  } finally {
    isDownloading = false;
  }
}

async function checkForUpdates() {
  try {
    const release = await getLatestRelease();
    if (!release) {
      console.log('No release found or failed to fetch release info');
      showNoUpdateMessage('No release found or failed to fetch release info');
      return;
    }

    // find the build.zip asset
    const buildAsset = release.assets.find(asset => asset.name === 'build.zip');
    if (!buildAsset) {
      console.log('No build.zip found in latest release');
      showNoUpdateMessage('No build.zip found in latest release');
      return;
    }

    console.log(`Found release: ${release.tag_name}`);
    
    // show update popup to user if new update is available
    if (release.tag_name !== CURRENT_VERSION) {
      createUpdatePopup(release);
    }
    
  } catch (error) {
    console.error('Update check failed:', error);
    showNoUpdateMessage(`Update check failed: ${error.message}`);
  }
}

// show "no updates available" message
function showNoUpdateMessage(message) {
  // remove existing popup if any
  const existingPopup = document.getElementById('no-update-popup');
  if (existingPopup) {
    existingPopup.remove();
  }

  const popup = document.createElement('div');
  popup.id = 'no-update-popup';
  popup.innerHTML = `
    <div class="update-overlay">
      <div class="update-popup">
        <div class="update-header">
          <div class="update-title">
            <img src="icons/refresh.svg" alt="Check" class="update-icon" />
            <h3>No Updates Available</h3>
          </div>
        </div>
        <div class="update-content">
          <p class="update-description">You are already using the latest version of the app.</p>
          <div class="update-actions">
            <button id="close-no-update-btn" class="btn btn-primary">OK</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(popup);

  // add event listener
  document.getElementById('close-no-update-btn').addEventListener('click', () => {
    popup.remove();
  });

  // auto-close after 3 seconds
  setTimeout(() => {
    if (popup && popup.parentNode) {
      popup.remove();
    }
  }, 3000);
}

async function runUpdater() {
  try {
    // notify that the app is ready
    await CapacitorUpdater.notifyAppReady();
    console.log('App ready, checking for updates...');

    // check for updates
    await checkForUpdates();

  } catch (err) {
    console.error('CapacitorUpdater init failed', err);
  }
}

// add download progress listener
CapacitorUpdater.addListener("download", (info) => {
  console.log("Download progress:", info.percent);
  updateProgress(info.percent);
});

// add download failed listener
CapacitorUpdater.addListener("downloadFailed", (error) => {
  console.error("Download failed:", error);
  updateProgress(0, `Download failed: ${error.message || 'Unknown error'}`);
});

// add update failed listener
CapacitorUpdater.addListener("updateFailed", (error) => {
  console.error("Update failed:", error);
  updateProgress(0, `Update failed: ${error.message || 'Unknown error'}`);
});

// get current version function
window.getCurrentVersion = function() {
  return CURRENT_VERSION;
};

// refresh version display function (can be called after app reload)
window.refreshVersionDisplay = async function() {
  try {
    const currentVersion = await getCurrentAppVersion();
    updateVersionDisplay(currentVersion);
    console.log('Version display refreshed:', currentVersion);
  } catch (error) {
    console.error('Failed to refresh version display:', error);
  }
};

// manual update check function (can be called from ui)
window.checkForUpdatesManually = async function() {
  console.log('Manual update check triggered');
  
  // update sync button state
  const syncBtn = document.getElementById('syncBtn');
  if (syncBtn) {
    syncBtn.disabled = true;
    syncBtn.innerHTML = `
      <img src="icons/loading.svg" alt="Loading" style="animation: spin 1s linear infinite;" />
    `;
  }
  
  try {
    await checkForUpdates();
  } finally {
    // reset sync button state after a delay
    setTimeout(() => {
      if (syncBtn) {
        syncBtn.disabled = false;
        syncBtn.innerHTML = `
          <img src="icons/refresh.svg" alt="Refresh" />
        `;
      }
    }, 2000);
  }
};

// update version display in header
function updateVersionDisplay(version = null) {
  console.log("=====> updateVersionDisplay", version);
  const versionElement = document.querySelector('.app-version');
  console.log("=====> versionElement", versionElement);
  if (versionElement) {
    versionElement.textContent = version || CURRENT_VERSION;
  }
  console.log("=====> versionElement.textContent", versionElement.textContent);
}

// get current app version from capacitor updater
async function getCurrentAppVersion() {
  try {
    const bundle = await CapacitorUpdater.current();
    console.log("=====> bundle", bundle);
    if (bundle && bundle.version) {
      console.log("=====> bundle.version", bundle.version);
      return bundle.version;
    }
  } catch (error) {
    console.log('Could not get current bundle version:', error);
  }
  console.log("=====> CURRENT_VERSION", CURRENT_VERSION);
  return CURRENT_VERSION; // fallback to hardcoded version
}

// initialize the updater
async function initializeApp() {
  try {
    // get the actual current version from capacitor updater
    const currentVersion = await getCurrentAppVersion();
    updateVersionDisplay(currentVersion);
    console.log('Current app version:', currentVersion);
  } catch (error) {
    console.error('Failed to get current version:', error);
    updateVersionDisplay(); // fallback to hardcoded version
  }
  
  // run the updater
  await runUpdater();
}

initializeApp();