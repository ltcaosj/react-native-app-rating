package lightkits.apprating;

import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class LKAppRatingModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public LKAppRatingModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "LKAppRating";
    }

    @ReactMethod
    public void rate(String applicationId) {
        this.reactContext.getCurrentActivity().startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=" + applicationId)));
    }

    @ReactMethod
    public void openAppStore(String applicationId) {
        this.reactContext.getCurrentActivity().startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=" + applicationId)));
    }

    @ReactMethod
    public void writeReview(String applicationId) {
        this.reactContext.getCurrentActivity().startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=" + applicationId)));
    }
}
