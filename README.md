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

## Bower

Bower is used to manage frontend asset dependencies - such as the Bootstrap UI library and the jQuery JavaScript library.

Bower dependencies are automatically installed as part of the grunt build process and references to the dependencies are injected into the appropriate places in the source HTML.

## Deploying the Site

We're using GitHub pages to host this site, so to publish a new build of the site, you just have to push it to GitHub:

1. On the `master` branch, run `grunt build`
2. Copy the resulting `dist` folder somewhere
3. Back in the repository, switch to the `gh-pages` branch
4. Delete the contents of the repo's folder and replace them with those in `dist`
5. Commit the changes and push them to `origin`

### Updating API Documentation

The API documentation for the harvester and server is stored in this site so it's browsable over the web. To update the API documentation, follow these steps:

1. Checkout the latest released tag for the harvester
2. Run `npm run build-docs` in the harvester project
3. Copy the output files from `docs/cognicity-reports-powertrack/VERSION/` into the cognicity project's folder `api-docs/cognicity-reports-powertrack`
4. Follow the normal deployment process for `cognicity`