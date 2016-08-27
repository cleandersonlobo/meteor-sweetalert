Package.describe({
  name: 'lyquocnam:sweetalert',
  version: '4.2.0',
  // Brief, one-line summary of the package.
  summary: 'Wrapper of SweetAlert 2 for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lyquocnam/meteor-sweetalert',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');
  api.mainModule('./node_modules/sweetalert2/dist/sweetalert2.js', 'client');
  api.addFiles('./node_modules/sweetalert2/dist/sweetalert2.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lyquocnam:sweetalert');
});
