const user = require("../models/user.js");
const { saveRedirectUrl } = require("../middleware.js");

//signup form
module.exports.newUser = (req, res) => {
  res.render("users/signup");
};

//signup
module.exports.createUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new user({ email, username });
    const registeredUser = await user.register(newUser, password);
    req.logIn(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      console.log(registeredUser);
      req.flash("success", "User Registration SuccessFul");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

//login form
module.exports.getLogin = (req, res) => {
  res.render("users/login");
};

//login
module.exports.login = (req, res) => {
  if (!res.locals.redirectUrl) {
    res.redirect("/listings");
  } else {
    res.redirect(res.locals.redirectUrl);
  }
};

//logout
module.exports.logout = (req, res) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out!");
    res.redirect("/listings");
  });
};
