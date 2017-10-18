# react-basic-setup
react js basic setup with mocha testing framework for beginners

## Introduction

This is basic js development environment setup with react js, testing framework mocha and module bundler webpack. This can be used for the basic development, POC's, DEMO for learning of react js with module bundler and testing framework. This structure can be customized based upon the requirement. index.js file is the entry point of the application.

Babel 6 is already included along with the complimentary build configuration. You should not need to make any changes to this.

* Install project dependencies: `npm i`
* To start the application: `npm start`
* To run the tests: `npm test`

Running `npm start` will start a local webserver and you can access the page from [http://localhost:8080](http://localhost:8080)

Addition of any any new JavaScript frameworks or libraries must be included in the package.json file

### List of Dependencies:
* isomorphic-fetch - Implimentation of fetch for both node.js and browser, built on top of fetch polyfill.
* react
* react-dom
* styled-components

### List of Dev Dependencies:
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* code - BDD assertion library.
* enzyme - JavaScript Testing utilities for React
* mocha
* sinon
* webpack - Module Bundler
* webpack-dev-server

### List of Directories
* mock - used for mock data
* test - used for test cases
* src  - used for development of react application