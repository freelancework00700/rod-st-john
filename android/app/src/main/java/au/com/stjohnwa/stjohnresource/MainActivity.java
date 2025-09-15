package au.com.stjohnwa.stjohnresource;

import android.os.Bundle;
import android.view.View;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // disable fullscreen mode to allow space for the system navigation bar and status bar.
        getWindow().getDecorView().setOnApplyWindowInsetsListener((view, insets) -> {
            view.setPadding(0, insets.getSystemWindowInsetTop(), 0, insets.getSystemWindowInsetBottom());
            return insets.consumeSystemWindowInsets();
        });

        // disable the rubber-band overscroll effect in the WebView.
        // the stretching animation does not account for `position: fixed` elements,
        // which causes UI distortion during overscroll.
        // See: https://github.com/ionic-team/capacitor/issues/5384#issuecomment-1165811208
        bridge.getWebView().setOverScrollMode(View.OVER_SCROLL_NEVER);
    }
}