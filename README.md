Pre-requisites:

```
npm install
```

Open a Git Bash window

note that tsc in the script is launched via "sh -c"

Run the following script:

```
./launch.sh
```
```

OR run:

```
sh -c 'node ./test.js'
```

(Both should result in the same issue occurring)

Verify in Process Explorer or Task Manager that node.exe is running

Then send Ctrl+C to the Git Bash Window and the process will terminate

Verify in Process Exporer or Task Manager that node.exe remains running and must be killed manually.


if

```
node test.js
```

is run directly (which launches node using winpty.exe rather than sh.exe), the issue does not occur.

Alternate reproduction method using sleep, launched from a .sh script:
Run the following script:

```
./launchSleep.sh
```

OR run:

```
sh -c 'node ./testSleep.js'
```

Notice that the sleep process is not killed


The results vary based on the shell being used to launch tsc and the shell used to launch the node script. See the table below for reference

|                      | sh   | bash | powershell | <blank= default to cmd> |
|----------------------|------|------|------------|-------------------------|
| ./launch.sh          | fail | fail | pass       | pass                    |
| node test.js         | pass | pass | pass       | pass                    |
| sh -c 'node test.js' | fail | fail | pass       | pass                    |