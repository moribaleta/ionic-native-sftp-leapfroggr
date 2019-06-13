/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Cordova Plugin Sftp Leapfroggr
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { SftpLeapfroggr } from '@ionic-native/ionic-native-sftp-leapfroggr';
 *
 *
 * constructor(private cordovaPluginSftpLeapfroggr: CordovaPluginSftpLeapfroggr) { }
 */
@Plugin({
  pluginName: 'CordovaPluginSftpLeapfroggr',
  plugin: 'cordova-plugin-sftp-leapfroggr', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.CordovaPluginSftpLeapfroggr', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/moribaleta/cordova-plugin-sftp-leapfroggr', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android','iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class SftpLeapfroggr extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  configureSFTP(options: {}): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  upload(options: {}):Promise<any>{
    return
  }
  

}
