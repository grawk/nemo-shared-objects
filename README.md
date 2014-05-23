# nemo-shared-objects

locators and actions for Nemo functional test framework

## Usage

Add this to your package.json

```javascript
"nemo-shared-objects": "~0.0.1"
```

Add any additional nemo-* plugins as directed by npm errors (if encountered)

Here is an example spec

```javascript
/*global describe:true, it:true, before:true, after:true */
'use strict';

var nemoFactory = require('nemo-mocha-factory'),
  shared = require('nemo-shared-objects');
describe('Nemo @paypalSuite@', function() {
  nemoFactory({
    'plugins': shared.config.plugins,
    'setup': shared.config.setup
  });
  it('will @tryLoginWithInvalidCredentials@', function(done) {
    nemo.driver.get('https://www.paypal.com');
    shared.loginFlow(nemo).login(shared.userData.invalid, false).then(function() {
      console.log('failed login as expected');
      done();
    }, function(err) {
      done(err);
    });
  });
});

```
