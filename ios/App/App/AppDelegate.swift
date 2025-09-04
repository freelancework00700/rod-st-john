import UIKit
import Capacitor
import GCDWebServer

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?
    let webServer = GCDWebServer()
    let localPort: UInt = 18181

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
        startLocalServer()

        // Override point for customization after application launch.
        return true
    }

    private func startLocalServer() {
        // Capacitor v5/6 puts built assets under "public" in the app bundle.
        // Older setups may still use "www". We check both.
        guard let bundleURL = Bundle.main.resourceURL else {
            print("[LocalServer] Bundle resourceURL not found")
            return
        }

        let distURL   = bundleURL.appendingPathComponent("dist", isDirectory: true)
        let publicURL = bundleURL.appendingPathComponent("public", isDirectory: true)
        let wwwURL    = bundleURL.appendingPathComponent("www", isDirectory: true)

        let directoryPath: String
        if FileManager.default.fileExists(atPath: distURL.path) {
            directoryPath = distURL.path
        } else if FileManager.default.fileExists(atPath: publicURL.path) {
            directoryPath = publicURL.path
        } else if FileManager.default.fileExists(atPath: wwwURL.path) {
            directoryPath = wwwURL.path
        } else {
            print("[LocalServer] Neither /dist, /public nor /www found in app bundle")
            return
        }

        // Serve files with range requests enabled (good for large assets/video)
        webServer.addGETHandler(
            forBasePath: "/",
            directoryPath: directoryPath,
            indexFilename: "index.html",
            cacheAge: 0,
            allowRangeRequests: true
        )

        do {
            try webServer.start(options: [
                GCDWebServerOption_Port: localPort,
                GCDWebServerOption_BindToLocalhost: true, // offline only
                GCDWebServerOption_AutomaticallySuspendInBackground: false
            ])
            print("[LocalServer] Running at http://127.0.0.1:\(localPort)")
        } catch {
            print("[LocalServer] Failed to start: \(error)")
        }
    }

    func applicationWillResignActive(_ application: UIApplication) {
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
    }

    func applicationWillTerminate(_ application: UIApplication) {
    }

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
    }

    func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
        return ApplicationDelegateProxy.shared.application(application, continue: userActivity, restorationHandler: restorationHandler)
    }

}
