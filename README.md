# Cognicity Project Page

This repository contains the project page for CogniCity, an open framework for urban data.

[![Build Status](https://travis-ci.org/smart-facility/cognicity.svg)](https://travis-ci.org/smart-facility/cognicity)

## Building the Site

This site is built using the Grunt task runner, which runs on the Node.js runtime. You'll need to set up a few dependencies to build the site locally, as well as perform other tasks like running tests.

### First Steps

1. Install and configure Node.js v0.10.29 and npm
2. Install Grunt with `npm install grunt-cli -g`
3. Clone the project
4. Run `npm install` to install build dependencies

### Available Grunt Tasks

- `grunt build` - build the site, placing the output in the `dist/` directory
- `grunt serve` - Start a server and open the site in your default browser. Note the server uses LiveReload to refresh the page as you make changes.
- `grunt clean` - Clean files and folders

## Dependencies

### NPM Development Modules
* [grunt](https://github.com/gruntjs/grunt) version 0.4.1 or compatible
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) version 0.5.0 or compatible
* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) version 0.3.0 or compatible
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) version 0.4.0 or compatible
* [grunt-sass](https://github.com/sindresorhus/grunt-sass) version 0.11.0 or compatible
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) version 0.9.2 or compatible
* [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) version 0.9.0 or compatible
* [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) version 0.7.1 or compatible
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) version 0.5.0 or compatible
* [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) version 0.2.0 or compatible
* [grunt-bower-install](https://github.com/stephenplusplus/grunt-wiredep) version 1.4.0 or compatible
* [grunt-bower-install-simple](https://github.com/rse/grunt-bower-install-simple) version 1.1.0 or compatible
* [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) version 0.6.0 or compatible
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) version 0.6.1 or compatible
* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) version 0.7.2 or compatible
* [grunt-usemin](https://github.com/yeoman/grunt-usemin) version 2.1.0 or compatible
* [grunt-mocha](https://github.com/kmiyashiro/grunt-mocha) version 0.4.10 or compatible
* [grunt-newer](https://github.com/tschaub/grunt-newer) version 0.7.0 or compatible
* [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin) version 2.0.0 or compatible
* [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent) version 0.5.0 or compatible
* [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) version 0.4.0 or compatible
* [time-grunt](https://github.com/sindresorhus/time-grunt) version 0.3.1 or compatible
* [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) version 0.1.5 or compatible

### Bower

Bower is used to manage frontend asset dependencies - such as the Bootstrap UI library and the jQuery JavaScript library.

Bower dependencies are automatically installed as part of the grunt build process and references to the dependencies are injected into the appropriate places in the source HTML.

#### Bower Dependencies
* [bootstrap-sass-official](https://github.com/twbs/bootstrap-sass) version 3.1.x
* [jquery](https://github.com/jquery/jquery) version 1.11.0 or compatible

#### Bower Test Dependencies
* [mocha](https://github.com/mochajs/mocha) version 1.14.0 or compatible 
* [chai](https://github.com/chaijs/chai) version 1.8.0 or compatible

## Development

### Git Hooks

There is a git pre-commit hook which will run the 'npm test' command before your commit and will fail the commit if testing fails.

To use this hook, copy the file from 'git-hooks/pre-commit' to '.git/hooks/pre-commit' in your project folder.

```shell
cp git-hooks/pre-commit .git/hooks/
```

### Deploying the Site

We're using GitHub pages to host this site, so to publish a new build of the site, you just have to push it to GitHub:

1. On the `master` branch, run `grunt build`
2. Copy the resulting `dist` folder somewhere
3. Back in the repository, switch to the `gh-pages` branch
4. Delete the contents of the repo's folder and replace them with those in `dist`
5. Commit the changes and push them to `origin`

#### Updating API Documentation

The rendered API documentation for the harvester and server is stored within this site. To update the API documentation, follow these steps:

1. Checkout the latest released tag for the harvester
2. Run `npm run build-docs` in the harvester project
3. Copy the output files from `docs/cognicity-reports-powertrack/VERSION/` into the cognicity project's folder `api-docs/cognicity-reports-powertrack`

Now follow the normal deployment process for `cognicity` to deploy the updated API documentation.