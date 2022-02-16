function dumpJavaBytes(v) {
    var buffer = Java.array('byte', v);
    var result = "";
    if (buffer === null) {
      return "(null)";
    }
    
    for(var i = 0; i < buffer.length; ++i){
      result+= (String.fromCharCode(buffer[i]));
    }
    return result;
  }
  
  send("[*] Starting TUYA script");
  Java.perform(function() {
    send("[*] Hijacking JNICLibrary")
    var jniClass = Java.use("com.tuya.smart.security.jni.JNICLibrary");
    jniClass.doCommandNative.implementation = function(ctx, cmd, v2, v3, v4, v5) {
      var ret = this.doCommandNative(ctx, cmd, v2, v3, v4, v5);
      send("doCommandNative: cmd=" + cmd + ", v2=" + dumpJavaBytes(v2) + ", v3=" + dumpJavaBytes(v3) + ", v4=" + v4 + ", v5=" + v5 + ", ret=" + ret);
      return ret;
    };
  });
  