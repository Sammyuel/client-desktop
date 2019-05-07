const { spawn } = require('child_process');


export default class Spawn{
	constructor(){
		this.scripts = [...arguments]
	}
	initiate_scripts(){
		var processes = []
		var script_handler = new ScriptHandler(this.scripts)
		for(let script of script_handler){
			processes.push(script)
		}
		return processes
	}

	get get_scripts(){
		return this.initiate_scripts()
	}
}


class ScriptHandler{
	constructor(scripts_list){
		this.scripts = scripts_list;

	}
	*[Symbol.iterator](){
		for (let i of this.scripts){
			const process = spawn('python', [i.path, i.args])
			yield new Promise((resolve, reject) => {
				process.stdout.on('data', data=>{
					resolve(data.toString());
				})
				process.stdout.on('data', data=>{
					resolve(data.toString());
				})
			})
		}

	}
}


