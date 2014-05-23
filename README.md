# nemo-shared-objects

locators and actions for Nemo functional test framework

## Usage

Add this to your package.json

```javascript

```

Add any additional nemo-* plugins as directed by npm errors (if encountered)

Here is an example spec

```javascript
/*global describe:true, it:true, before:true, after:true */
'use strict';

var conf = require('nemo-shared-objects/config'),
  nemoFactory = require('nemo-mocha-factory'),
  setup = conf.setup,
  plugins = conf.plugins,
  loginFlow = require('nemo-shared-objects/flow/login'),
  user = {
    'emailAddress': 'me@mine.com',
    'password': '1234abcd'
  }
nemo = {};

describe('Nemo @paypalSuite@', function() {

  nemoFactory({
    'plugins': plugins,
    'setup': setup,
    'context': nemo
  });

  it('will @tryLoginAndFail@', function(done) {
    nemo.driver.get('https://www.paypal.com');
    loginFlow(nemo).login(user, false).then(function() {
      console.log('failed login as expected');
      done();
    }, function(err) {
      done(err);
    });
  });
});

```
