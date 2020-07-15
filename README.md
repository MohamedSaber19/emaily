# Emaily

Emaily is a MERN stack application which creates surveys that collect feedback from users through Emails based on their credits (handling payments with STRIPE)

# Quick Start

1. Run the following command in **/server** & **/client** directories to install all dependencies : `npm i`

2. Create a **dev.js** file inside **config** folder in the **server** directory and add your keys as below:

```javascript
module.exports = {
  googleClientID: YOUR GOOGLE CLIENT_ID,
  googleClientSecret: YOUR GOOGLE CLIENT_SECRET,
  mongoURI:YOUR MONGO_DB CONNECTION STRING,
  cookieKey: YOUR CUSTOM COOKIE KEY,
  stripePublishableKey: YOUR STRIPE PUBLISHABLE KEY,
  stipeSecretKey: YOUR STRIPE SECRET KEY,
  sendGridKey:YOUR SENDGRID KEY,
  redirectDomain: "http://localhost:3000",
};

```

3. Run the following: `npm run dev`
