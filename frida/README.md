# Frida Debugging

## Getting started
I've used _Frida_ to _disable ssl pinning_ and log some requests in the console. To checkout _Frida_ visit [https://github.com/frida/frida](https://github.com/frida/frida). And here the tutorial I've used to get familiar with it: [https://book.hacktricks.xyz/mobile-apps-pentesting/android-app-pentesting/frida-tutorial](https://book.hacktricks.xyz/mobile-apps-pentesting/android-app-pentesting/frida-tutorial)


## Step by Step

1. Download and install the NOX-Player as an Android simulator. Download: [https://www.bignox.com/](https://www.bignox.com/)
2. Setup frida server
```bash
# Connect to NOX Player via adb
adb connect 127.0.0.1:62001

# Download frida server for the NOX Player architecture
curl -L https://github.com/frida/frida/releases/download/14.2.12/frida-server-14.2.12-android-x86.xz -o frida-server.xz

# Copy the downloaded frida server to the NOX Player
adb root
adb push frida-server /data/local/tmp/frida-server

# Assure the frida server is executable
adb shell chmod 777 /data/local/tmp/frida-server

# Start the frida server on the NOX Player
adb shell /data/local/tmp/frida-server &
```

3. Install the _Eufy Security App_ on the NOX-Player
```bash
# Find and download the latest apk and install it via adb
adb install eufy-security.apk
```

4. Execute the frida script
```bash
# Install frida
pip install frida-tools frida
pip install 

# Start debugging
frida -U --no-pause -l debug.js -f com.eufylife.smarthome
```


python fridump.py  -U -s com.eufylife.smarthome

cd dump

strings * | grep bf38a6b834151731579id9 
(find in API)
