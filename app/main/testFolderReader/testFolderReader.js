import {ipcMain} from 'electron'
const fs = require('fs');

export default function folderReader(win, path){
	let folder_files = fs.readdir(path, (err, files) => {
		let modified_files = []
		files.forEach(file => {
			if(/.py$/.test(file) && /^test_/.test(file)){
				modified_files.push(file.slice(5, -3))
			}
		})
		win.webContents.send('test-files', modified_files)
	})
}