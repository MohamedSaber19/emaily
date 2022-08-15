const passport = require("passport"); // importing passport
const GoogleStrategy = require("passport-google-oauth20").Strategy; // importing googleStrategy as we will auth with it
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users"); // model class

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
console.log("googleClientID: ", keys.googleClientID);
passport.use(
  new GoogleStrategy( // create a new googleStrategy instance and use it withing passport and passing some info like clientID, clientSecret & callbackURL to it as arguments as we get these info from google cloud
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      // check if the user already exist
      if (existingUser) {
        done(null, existingUser); // done is a verify callback function with 2 args first one is the error and the other is the piece of info we get
      } else {
        const user = await new User({ googleId: profile.id }).save();
        // create a new mongoose instance that represent a single record of our database collection and then save it to our database
        done(null, user);
      }
    }
  )
);
