#!/usr/bin/env node
'use strict';


/**
 * This scripts starts grunt, and a transparent proxy to switch requests
 * between the rails app and the frontend app
 *
 * Any command line arguments will be passed to the grunt process
 */

var proxy_port = 4000
  , grunt_port = 9000
  , colibri_local = 8000
  , httpProxy = require('http-proxy')
  , spawn = require('child_process').spawn
  , grunt  = spawn('grunt', process.argv.slice(2)) // spawn grunt

// pied piper
grunt.stdout.pipe(process.stdout);
grunt.stderr.pipe(process.stderr);

// catch grunt's exit
grunt.on('close', function (code, signal) {
  console.log('Behold! The grunt has commited suicide!');
  process.exit();
});

// catch CTR-C
process.on('SIGINT', function () {
  console.log('\n\nBye Bye. The grunt process has been stopped.');
  grunt.kill();
  process.exit();
});

/**
 * Redirects the client to the app path
 * @param  {HTTPResponse} res
 */
function redirectRoot(res) {
  res.writeHead(302, {
    'Location': '/build/'
  });
  res.end();
}

// start the proxy server
httpProxy.createServer(function (req, res, proxy) {
  var port
    , host = 'localhost'
    , reg = new RegExp('^\/build');

  if (req.url === '/') {
    return redirectRoot(res);
  } else if (reg.exec(req.url)) {
    port = grunt_port;    
  } else {
    port = colibri_local;
  }
  proxy.proxyRequest(req, res, {
    host: host,
    port: port
  });
}).listen(proxy_port);

console.log('Trasparent proxy running on port', proxy_port);
console.log('=====================================\n\n');