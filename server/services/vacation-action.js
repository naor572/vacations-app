const Validate = require("../validate/validate");
const vacations = require("./DAO/vacations-data");
const cache = require("./cache-module");

const getAllVacation = async (userData) =>
  await vacations.getAllVacation(userData);

const getVacation = async (vacationId) =>
  await vacations.getVacation(vacationId);

const addFollow = async (userData, vacationId) => {
  await Validate.isNotAdmin(userData.is_admin);
  return await vacations.addFollow(userData, vacationId);
};

const Unfollow = async (userData, vacationId) => {
  await Validate.isNotAdmin(userData.is_admin);
  return await vacations.Unfollow(userData, vacationId);
};

const removeVacation = async (userData, vacationId) => {
  await Validate.isAdmin(userData.is_admin);
  return await vacations.removeVacation(vacationId);
};

const addVacation = async (is_admin, vacationDetails) => {
  await Validate.vacationInput(is_admin, vacationDetails);
  await vacations.addVacation(vacationDetails);
};

const editVacation = async (is_admin, vacationDetails) => {
  await Validate.vacationInput(is_admin, vacationDetails);
  await vacations.editVacation(vacationDetails);
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
