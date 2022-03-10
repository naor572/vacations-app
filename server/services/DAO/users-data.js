const dataBaseExecute = require("./connection-database");
const {
  buildErrorMessageWithStatusCode,
} = require("../../errors/error-message");
const crypt = require("bcrypt");
const saltRounds = 10;

const insertUserDB = async (user) => {
  const sql =
    "insert into user (first_name,last_name,user_name,password,is_admin) values (?,?,?,?,?)";
  const parameters = [
    user.firstName,
    user.lastName,
    user.userName,
    crypt.hashSync(user.password, saltRounds),
    user.is_Admin,
  ];
  try {
    return await dataBaseExecute.exceuteWithParameters(sql, parameters);
  } catch {
    await buildErrorMessageWithStatusCode("ErrorWithDataBase");
  }
};

const getUserByUserName = async (userName) => {
  const sql = "select * from user where user_name= ?";
  const parameters = [userName];
  try {
    return await dataBaseExecute.exceuteWithParameters(sql, parameters);
  } catch {
    await buildErrorMessageWithStatusCode("ErrorWithDataBase");
  }
};
module.exports = {
  insertUserDB,
  getUserByUserName,
};
