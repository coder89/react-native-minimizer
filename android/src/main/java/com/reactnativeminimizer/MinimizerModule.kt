package com.reactnativeminimizer

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import kotlin.system.exitProcess


class MinimizerModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val activity = this.reactContext.currentActivity

    override fun getName(): String {
        return "Minimizer"
    }
  
    @ReactMethod
    fun exit() {
      activity?.finishAffinity()
      exitProcess(0)
    }

    @ReactMethod
    fun goBack() {
      activity?.moveTaskToBack(true)
    }

    @ReactMethod
    fun minimize() {
      val startMain = Intent(Intent.ACTION_MAIN)
      startMain.addCategory(Intent.CATEGORY_HOME)
      startMain.flags = Intent.FLAG_ACTIVITY_NEW_TASK
      this.reactContext.startActivity(startMain)
    }
}
