module.exports = function() {
  var conf = {
    'plugins': {
      'plugins': {
        'drivex': {
          'module': 'nemo-drivex',
          'register': true
        },
        'locatex': {
          'module': 'nemo-locatex',
          'register': true
        },
        'view': {
          'module': 'nemo-view'
        }
      }
    },
    'setup': {
      "view": [{
        "name": "login",
        "locator": "module:nemo-shared-objects/login"
      }]
    }
  };
  return conf;
};
