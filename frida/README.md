# Frida Debugging for Eufy Home


## Step by Step

1. Download and install the GenyMotion
2. Setup frida server
```bash
# Connect to GenyMotion via adb
adb connect 127.0.0.1:62001

# Download frida server for the GenyMotion architecture
curl -L https://github.com/frida/frida/releases/download/14.2.12/frida-server-14.2.12-android-x86.xz -o frida-server.xz

# Copy the downloaded frida server to the GenyMotion
adb root
adb push frida-server /data/local/tmp/frida-server

# Assure the frida server is executable
adb shell chmod 777 /data/local/tmp/frida-server

# Start the frida server on the GenyMotion
adb shell /data/local/tmp/frida-server &
```

3. Install the _Eufy Home App_ on the NOX-Player
```bash
# Find and download the latest apk and install it via adb 
# https://www.dropbox.com/s/bcwy6iqchydgexc/EufyHome_2.4.0_vevs.apk.zip?dl=0
adb install eufy-home.apk
```

4. Execute the frida script
```bash
# Install frida
pip install frida-tools frida
pip install 

# Start debugging
frida -U --no-pause -l debug.js -f com.eufylife.smarthome
```

5. Open a extra terminal tab
```bash
# Use fridump to dump all frida memory
cd fridump

rm -rf dump

python fridump.py -U -s EufyHome

cd dump

strings * | grep localKey 

```
