module.exports = function (nemo) {
	return {
		"login": function (user) {
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
        return nemo.view.login.logoutWait(10000);
      });

		},
		"logout": function() {
		  return nemo.view.login.logout().click();
		}
	};
};
