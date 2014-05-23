module.exports = function (nemo) {
  return {
    "login": function (user, valid) {
      return nemo.view.login.emailVisible().then(function(isVisible) {
        if (!isVisible) {
          return nemo.view.login.showLoginButton().click();
        }
        return true;
      }).then(function() {
        nemo.view.login.email().clear();
        nemo.view.login.email().sendKeys(user.emailAddress);
        nemo.view.login.password().sendKeys(user.password);
        nemo.view.login.button().click();
        if (valid) {
          nemo.view.login.logoutWait(10000, "couldn't find logout link");
        } else {
          nemo.view.login.loginErrorBoxWait(10000, "couldn't find loginErrorBox");
        }
      });

    },
    "logout": function() {
      return nemo.view.login.logout().click();
    }
  };
};
