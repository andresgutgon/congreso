congreso
========

App Backbone para leer datos del Projecto Colibri (http://proyectocolibri.es)

TODO
====
Find a better way to work in local
For now I need to open Chrome from terminal this way to fetch data from a remote API with JSONP
`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome - --disable-web-security`
This is not needed. This issue is because i wasn´t making JSONP request. Now works as expected.


And to run a simple local server with Python:
`python -m SimpleHTTPServer`.

DEVELOPMENT
===========
* `git clone git@github.com:andresgutgon/congreso.git`
* Install node 
* Install grunt-cli `npm install -g grunt-cli`
* cd congreso
* `npm install`. This install all node dependencies used in the project.

NOTE
====
If `grunt` command is not recognise. Add to your .bashrc or bashprofile or .profile file this way:
`export PATH=/usr/local/share/npm/bin:$PATH`

