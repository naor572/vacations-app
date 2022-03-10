const connection = require("mysql2");
const { dbConfig } = require("../../config");
const db = connection.createConnection(dbConfig);

function execute(sql) {
  return new Promise((resolve, reject) => {
    db.execute(sql, (err, result) => {
      if (err) reject(err.message);
      else resolve(result);
    });
  });
}

function exceuteWithParameters(sql, parameters) {
  return new Promise((resolve, reject) => {
    db.execute(sql, parameters, (err, result) => {
      if (err) reject(err.message);
      else resolve(result);
    });
  });
}

module.exports = { execute, exceuteWithParameters };
