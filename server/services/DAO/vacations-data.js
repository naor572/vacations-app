const dataBaseExecute = require("./connection-database");
const {
  buildErrorMessageWithStatusCode,
} = require("../../errors/error-message");

const getAllVacation = async (user) => {
  const sql = `SELECT V.ID AS vacationId,description,destination,picture,travel_date,return_date,price,followed_vacations.user_id,
  (select count(*) from followed_vacations where vacationId=vacation_id)as numOfFollowers 
  from vacation V 
  left join followed_vacations
  on user_id=?&& V.id=followed_vacations.vacation_id`;
  const parameters = [user.id];
  try {
    return await dataBaseExecute.exceuteWithParameters(sql, parameters);
  } catch {
    await buildErrorMessageWithStatusCode("ErrorWithDataBase");
  }
};

const getVacation = async (vacationId) => {
  const sql = `select id,description,destination,picture,travel_date,return_date,price from vacation where id = ? `;
  const parameters = [vacationId];
  try {
    return await dataBaseExecute.exceuteWithParameters(sql, parameters);
  } catch {
    await buildErrorMessageWithStatusCode("ErrorWithDataBase");
  }
};
const addFollow = async (userData, vacationId) => {
  const sql = `INSERT into followed_vacations(user_id,vacation_id) values(?,?);`;
  const parameters = [userData.id, vacationId];
  try {
    return await dataBaseExecute.exceuteWithParameters(sql, parameters);
  } catch {
    await buildErrorMessageWithStatusCode("ErrorWithDataBase");
  }
};

const addVacation = async (vacationDetails) => {
  const sql = `INSERT into vacation(description,destination,picture,travel_date,return_date,price) 
  values(?,?,?,?,?,?)`;
  const parameters = [
    vacationDetails.description,
    vacationDetails.destination,
    vacationDetails.picture,
    vacationDetails.travelDate,
    vacationDetails.returnDate,
    vacationDetails.price,
  ];
  try {
    return await dataBaseExecute.exceuteWithParameters(sql, parameters);
  } catch {
    await buildErrorMessageWithStatusCode("ErrorWithDataBase");
  }
};

const editVacation = async (vacationDetails) => {
  const sql = `update vacation set description=?,destination=?,picture=?,travel_date=?,return_date=?,price=? where id = ?`;
  const parameters = [
    vacationDetails.description,
    vacationDetails.destination,
    vacationDetails.picture,
    vacationDetails.travelDate,
    vacationDetails.returnDate,
    vacationDetails.price,
    vacationDetails.id,
  ];
  try {
    return await dataBaseExecute.exceuteWithParameters(sql, parameters);
  } catch {
    await buildErrorMessageWithStatusCode("ErrorWithDataBase");
  }
};

const Unfollow = async (userData, vacationId) => {
  const sql = `delete from followed_vacations where user_id = ? and vacation_id = ?`;
  const parameters = [userData.id, vacationId];
  try {
    return await dataBaseExecute.exceuteWithParameters(sql, parameters);
  } catch {
    await buildErrorMessageWithStatusCode("ErrorWithDataBase");
  }
};

const removeVacation = async (vacationId) => {
  const sql = `delete from vacation where id=?`;
  const parameters = [vacationId];
  try {
    return await dataBaseExecute.exceuteWithParameters(sql, parameters);
  } catch {
    await buildErrorMessageWithStatusCode("ErrorWithDataBase");
  }
};

module.exports = {
  getAllVacation,
  addFollow,
  Unfollow,
  removeVacation,
  addVacation,
  editVacation,
  getVacation,
};
