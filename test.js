const childProcess = require('child_process')
const spawned = childProcess.spawn('sh -c \'tsc -w\'', [], { stdio: 'pipe', shell: true, windowsHide: false })
process.on('exit', () => { spawned.kill() })