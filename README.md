# ionic-native-sftp-leapfroggr
cordova plugin for sftp 
works on both:
* IOS
* Android

### Installation
* `npm install ionic-native-sftp-leapfroggr --save`
* `cordova plugin add cordova-plugin-sftp-leapfroggr`
* required dependencies
    * https://github.com/kainonly/cordova-support-kotlin
    * https://github.com/akofman/cordova-plugin-add-swift-support

- #### IOS
    - uses NMSSH library for sftp operations
    - https://github.com/NMSSH/NMSSH
    - `pod 'NMSSH'`

- #### Android
    - uses JSch library
    - http://www.jcraft.com/jsch/
    - coded in kotlin
    - add library dependencies to app gradle
    ```
    compile group: 'com.jcraft', name: 'jsch', version: '0.1.54'
    compile "org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.2.31"
    ```

### USAGE
* configure sftp
```
this.sftp_provider.configureSFTP({
        host: <host>, 
      username: <username>, 
      password: <password>, 
      destination_folder: <destination folder> 
    }).then(() => {
      console.log("configured")
    })
```
* upload
```
this.sftp_provider.upload({filename, filepath}).then(() => {
        observer.next("complete")
        observer.complete()
      }).catch(error => {
        observer.error(error)
      })
```

### Future Feature
* [ ] directory operation
* [ ] list
* [ ] delete files
* [ ] download files
