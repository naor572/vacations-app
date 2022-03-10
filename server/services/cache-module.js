const userMap = new Map(); // map(key:{tokenId},value:{user:{id,firstName,lastName,userName,password,is_Admin}})

const get = (key) => userMap.get(key);
const set = (key, value) => userMap.set(key, value);

const extractUserDataFromCache = (req) => {
  let token = req.headers["authorization"];
  token = token.substring("bearer ".length);
  let userDetails = userMap.get(token);
  return userDetails;
};

const deleteFromCache = (req) => {
  let token = req.headers["authorization"];
  token = token.substring("bearer ".length);
  return userMap.delete(token);
};

module.exports = {
  set,
  get,
  deleteFromCache,
  extractUserDataFromCache,
};
