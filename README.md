ES6 Transpiling Example                                                            
=======================                                                            
This repo contains an example setup for doing ES6 transpiling using [Gulp][]       
and [Browserify][] with the [es6ify][] transform.

es6ify uses Google's [traceur][] compiler to do the actual transformation,
so check [their list of supported language features][features] to get going on ES6.


Installation
------------

 1. Install gulp globally using [npm][]: `npm install -g gulp`
 2. Install the build dependencies specific to this project: `npm install .`
 3. To do an initial transpile, and start a dev web server with livereload: `gulp` 



[Gulp]: http://gulpjs.com/
[Browserify]: http://browserify.org/
[es6ify]: https://github.com/thlorenz/es6ify
[npm]: https://www.npmjs.org/
[traceur]: https://github.com/google/traceur-compiler
[features]: https://github.com/google/traceur-compiler/wiki/LanguageFeatures
