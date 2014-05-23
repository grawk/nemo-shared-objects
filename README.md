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
  conf = require('nemo-shared-objects/config'),
  loginFlow = require('nemo-shared-objects/flow/login'),
  user = {
    'emailAddress': 'me@mine.com',
    'password': '1234abcd'
  };

describe('Nemo @paypalSuite@', function() {

  nemoFactory({
    'plugins': conf.plugins,
    'setup': conf.setup
  });

  it('will @tellMyLifeStory@', function(done) {
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
