yzyMacBook-Pro:~ yzy$ npm install express-generator -g
npm ERR! Darwin 16.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "express-generator" "-g"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10
npm ERR! path ../lib/node_modules/express-generator/bin/express-cli.js
npm ERR! code EACCES
npm ERR! errno -13
npm ERR! syscall symlink

npm ERR! Error: EACCES: permission denied, symlink '../lib/node_modules/express-generator/bin/express-cli.js' -> '/usr/local/bin/express'
npm ERR!     at Error (native)
npm ERR!  { Error: EACCES: permission denied, symlink '../lib/node_modules/express-generator/bin/express-cli.js' -> '/usr/local/bin/express'
npm ERR!     at Error (native)
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'symlink',
npm ERR!   path: '../lib/node_modules/express-generator/bin/express-cli.js',
npm ERR!   dest: '/usr/local/bin/express' }
npm ERR! 
npm ERR! Please try running this command again as root/Administrator.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/yzy/npm-debug.log
yzyMacBook-Pro:~ yzy$ 
---------------------
sudo npm install -g express
sudo chown -R yzy:staff /usr/local/lib/node_modules/express-generator/bin/express-cli.js
sudo npm install express-generator -g
---------------------
npm ERR! Darwin 16.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10
npm ERR! code ELIFECYCLE
npm ERR! nodebaidu@0.0.0 start: `node ./bin/www`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the nodebaidu@0.0.0 start script 'node ./bin/www'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the nodebaidu package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     node ./bin/www
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs nodebaidu
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls nodebaidu
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/yzy/极客学院大前端作业/任务九/nodebaidu/npm-debug.log
'------------------
vim ~/.bash_profile
export PATH="/usr/local/mysql/bin:$PATH"
/Users/yzy/极客学院大前端作业/任务九
