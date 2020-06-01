const passport = require("passport"); // importing passport
module.exports = (app) => {
  // export routes as a function with app as an argument
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      // passport method to handle auth with google
      scope: ["profile", "email"], // what pieces of info we need to get from google identity provider
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google")); // handle callback uri with passport

  app.get("/api/current_user", (req, res) => {
    // test auth flow
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    // log out user
    req.logOut();
    res.send(req.user);
  });
};
