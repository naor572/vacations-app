const express = require("express");
const app = express();
const userController = require("./controller/users-controllers");
const vacationController = require("./controller/vacation-controllers");
const loginFilter = require("./services/login-filter");
const cors = require("cors");
const errorsHandeler = require("./errors/error-handler");

app.use(express.json());
app.use(cors());
app.use(loginFilter());
app.use("/users", userController);
app.use("/vacations", vacationController);
app.use(errorsHandeler);

app.listen(4100, () => console.log("http://localhost:4100/users"));
