# Cognicity Project Page

This repository contains the project page for CogniCity, an open framework for urban data.

## Building the Site

This site is built using the Grunt task runner, which runs on the Node.js runtime. You'll need to set up a few dependencies to build the site locally, as well as perform other tasks like running tests.

### First Steps

1. Install and configure Node.js v0.10.29 and npm
2. Install Grunt with `npm install grunt-cli -g`
3. Bower requires git, if git is not already installed install it from http://git-scm.com/
4. Install Bower with `npm install -g bower`
5. Clone the project
6. Run `npm install` to install build dependencies
7. Run `bower install` to install site dependencies

### Available Grunt Tasks

- `grunt build` - build the site, placing the output in the `dist/` directory
- `grunt serve` - Start a server and open the site in your default browser. Note the server uses LiveReload to refresh the page as you make changes.
- `grunt clean` - Clean files and folders

## Deploying the Site

We're using GitHub pages to host this site, so to publish a new build of the site, you just have to push it to GitHub:

1. On the `master` branch, run `grunt build`
2. Copy the resulting `dist` folder somewhere
3. Back in the repository, switch to the `gh-pages` branch
4. Delete the contents of the repos folder and replace them with those in `dist`
5. Commit the changes and push them to `origin`
