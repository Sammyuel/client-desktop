import {ipcMain} from 'electron';


export default async function get_caps_info(){
	var exec = require('child_process').exec;
	async function callback(error, stdout, stderr) {
		console.log(stdout.split('\n')[0])
		let devices = stdout.split('\n').splice(1).filter(device => /[\w]*(?=\t)/.test(device)).map(device => /[\w]*(?=\t)/.exec(device)[0]);
		let device_caps = devices.map(function(udid){
			return {
				desiredCapabilities: {
					udid,
					deviceName: udid,
					platformName: 'Android',
					applicationName: udid,
					appPackage: "com.quickplay.android.bellmediaplayer.canary",
					appActivity: "ca.bell.fiberemote.boot.BootstrapActivity"

				},
				host: 'localhost',
				port: 4723,
				path: '/wd/hub'
			}
		})
		ipcMain.send('default-caps', device_caps)

	}
	exec("adb devices", callback);
}



