const { buildErrorMessageWithStatusCode } = require("../errors/error-message");
const db = require("../services/DAO/users-data");
const bcrypt = require("bcrypt");
const patterns = {
  name: /^[a-zA-Z]{2,10}$/,
  username: /^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]+)(\.[[a-zA-Z]+)?$/,
  password: /^[\w@-]{8,20}$/,
  price: /^([\d]+)$/,
};
class Validate {
  static async validateRegistration(user) {
    await this.validateUser(user);
    const result = await db.getUserByUserName(user.userName);
    if (result.length > 0)
      await buildErrorMessageWithStatusCode("UserNameExistInDB");
  }

  static async vacationInput(is_admin, vacationDetails) {
    await this.isAdmin(is_admin);
    if (vacationDetails.description === "")
      await buildErrorMessageWithStatusCode("emptyDescription");
    if (vacationDetails.destination === "")
      await buildErrorMessageWithStatusCode("emptyDestination");
    if (vacationDetails.picture === "")
      await buildErrorMessageWithStatusCode("emptyPicture");
    if (vacationDetails.travelDate === "")
      await buildErrorMessageWithStatusCode("emptyTravelDate");
    if (vacationDetails.returnDate === "")
      await buildErrorMessageWithStatusCode("emptyReturnDate");
    if (vacationDetails.price === "")
      await buildErrorMessageWithStatusCode("emptyPrice");
    const dateNow = new Date().getTime();
    const travelDate = new Date(vacationDetails.travelDate).getTime();
    const returnDate = new Date(vacationDetails.returnDate).getTime();
    if (travelDate < dateNow) {
      await buildErrorMessageWithStatusCode("notDateInThePast");
    }
    if (returnDate < dateNow) {
      await buildErrorMessageWithStatusCode("notDateInThePast");
    }
    if (travelDate > returnDate) {
      await buildErrorMessageWithStatusCode("travelDateBeforeReturn");
    }
    if (!patterns.price.test(vacationDetails.price)) {
      await buildErrorMessageWithStatusCode("invalidPrice");
    }
  }

  static async validateLogin(user) {
    const result = await db.getUserByUserName(user.userName);
    if (result.length === 0) {
      await buildErrorMessageWithStatusCode("userNameNotExist");
    }
    const [userResult] = result;
    const passwordCompare = bcrypt.compareSync(
      user.password,
      userResult.password
    );
    if (!passwordCompare)
      await buildErrorMessageWithStatusCode("passwordNotCorrect");
  }

  static async validateUser(user) {
    if (!patterns.name.test(user.firstName))
      await buildErrorMessageWithStatusCode("invalidFirstName");
    if (!patterns.name.test(user.lastName))
      await buildErrorMessageWithStatusCode("invalidLastName");
    if (!patterns.password.test(user.password))
      await buildErrorMessageWithStatusCode("invalidpassword");
    if (!patterns.username.test(user.userName))
      await buildErrorMessageWithStatusCode("invalidUsername");
  }
  static async isNotAdmin(isAdmin) {
    if (isAdmin)
      await buildErrorMessageWithStatusCode("ActionNotAllowForAdmin");
  }
  static async isAdmin(isAdmin) {
    if (isAdmin === 0)
      await buildErrorMessageWithStatusCode("ActionNotAllowForUser");
  }
}

module.exports = Validate;
