const ErrorMessage = {
  ErrorWithDataBase: {
    statusCode: 600,
    message: "error connection with database",
  },
  invalidFirstName: {
    statusCode: 400,
    message: "first name must be only Alphabet and be between 2-10 characters ",
  },
  invalidLastName: {
    statusCode: 400,
    message: "last name must be only Alphabet and be between 2-10 characters",
  },
  invalidpassword: {
    statusCode: 400,
    message:
      "password must be alphnumeric (@,_,- are also allowed) and be between 8-20 characters",
  },
  invalidUsername: {
    statusCode: 400,
    message: "username must be a valid address (e.g: username@mydomain.com)",
  },
  invalidPrice: {
    statusCode: 400,
    message: "price need to be only digits",
  },
  UserNameExistInDB: {
    statusCode: 601,
    message: "the user name already exist ",
  },
  userNameNotExist: {
    statusCode: 400,
    message: "the user name not exist",
  },
  passwordNotCorrect: {
    statusCode: 400,
    message: "the password not match please try again",
  },
  ActionNotAllowForAdmin: {
    statusCode: 400,
    message: "you are not allow to do this, only user can do this action!!!",
  },
  ActionNotAllowForUser: {
    statusCode: 400,
    message: "you are not allow to do this, only Admin can do this action!!!",
  },
  notDateInThePast: {
    statusCode: 400,
    message: "you must enter future travel date only",
  },
  travelDateBeforeReturn: {
    statusCode: 400,
    message: "your travel date need to be before return date",
  },
  emptyDescription: {
    statusCode: 400,
    message: "your input description is empty",
  },
  emptyDestination: {
    statusCode: 400,
    message: "your input destination is empty",
  },
  emptyPicture: {
    statusCode: 400,
    message: "your input picture is empty",
  },
  emptyTravelDate: {
    statusCode: 400,
    message: "your input travel date is empty",
  },
  emptyReturnDate: {
    statusCode: 400,
    message: "your input return date is empty",
  },
  emptyPrice: {
    statusCode: 400,
    message: "your input price is empty",
  },
  notATravelDate: {
    statusCode: 400,
    message: "your input travel date is not a date",
  },
};

const buildErrorMessageWithStatusCode = async (typeOfError) => {
  console.log(typeOfError, "typpe");
  let error = new Error(ErrorMessage[typeOfError].message);
  error.statusCode = ErrorMessage[typeOfError].statusCode;
  throw error;
};

module.exports = { buildErrorMessageWithStatusCode };
