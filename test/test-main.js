'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/\.spec\.js$/.test(file));
});

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/bower_components',

  paths: {
    'config': '../js/config',
    'component': '../js/component',
    'page': '../js/page',
    'flight': '../bower_components/flight',
    'with-request': '../bower_components/flight-request/lib/with_request',
    'clipboard' : '../js/page/clipboard'
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
