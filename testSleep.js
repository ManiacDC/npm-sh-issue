const childProcess = require('child_process')
const spawned = childProcess.spawn('sh ./loop.sh', [], { stdio: 'pipe', shell: true, windowsHide: false })
process.on('exit', () => { spawned.kill() })