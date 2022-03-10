module.exports = {
  dbConfig: {
    host: "localhost",
    user: "root",
    database: "vacation",
  },
  passwordHash: "my_secret!#$$#&",
  patterns: {
    name: /^[a-zA-Z]$/,
    username: /^([a-zA-Z\d\.-]+)@([a-z\\d-]+)\.([a-z])(\.[[a-z])?$/,
    password: /^[\w@-]{8,20}$/,
  },
};
