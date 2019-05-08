import {ipcMain} from 'electron'
const fs = require('fs');

export default function folderReader(win, path){
	let folder_files = fs.readdir(path, (err, files) => {
		win.webContents.send('test-files', files)
	})
}