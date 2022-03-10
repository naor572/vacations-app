const expressJwt = require("express-jwt");
const { passwordHash } = require("../config");
const secret = passwordHash;
console.log(passwordHash);

function authLogin() {
  /*will protect our app to access only for the users controller 
      if i want to go to the vactions controller i need to have the token  
    */
  return expressJwt({ secret, algorithms: ["HS256"] }).unless({
    path: [
      { url: "/users/login", method: "POST" },
      { url: "/users/signup", method: "POST" },
    ],
  });
}

module.exports = authLogin;
