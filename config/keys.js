// check which credentials and keys to return based on env [prod,dev]
// if (process.env.NODE_ENV === "production") {
//   module.exports = require("./prod");
// } else {
//   module.exports = require("./dev");
// }

module.exports = require("./prod");