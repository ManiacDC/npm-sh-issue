const childProcess = require('child_process')
const spawned = childProcess.spawn('npm', ['run', 'tsc'], { stdio: 'pipe', shell: true, windowsHide: false })
process.on('exit', () => { spawned.kill() })