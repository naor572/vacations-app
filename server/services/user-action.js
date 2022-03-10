const Validate = require("../validate/validate");
const { passwordHash } = require("../config");
const users = require("./DAO/users-data");
const jwt = require("jsonwebtoken");
const cache = require("./cache-module");

const leftSalt = "sdfsdsdfsdf6";
const rightSalt = "dsdfsfdssd234";

const insertUser = async (user) => {
  await Validate.validateRegistration(user);
  await users.insertUserDB(user);
};

const login = async (user) => {
  await Validate.validateLogin(user);
  const [userInfo] = await users.getUserByUserName(user.userName);
  const jwtToken = jwt.sign(
    {
      sub: leftSalt + `${user.userName}` + rightSalt,
    },
    passwordHash
  );
  cache.set(jwtToken, userInfo);
  let successfullLoginResponse = {
    token: jwtToken,
    isAdmin: userInfo["is_admin"],
    userId: userInfo["id"],
  };
  return successfullLoginResponse;
};

module.exports = { insertUser, login };
