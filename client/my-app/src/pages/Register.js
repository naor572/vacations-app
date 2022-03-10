import React from "react";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import "./lobbyCard.css";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setChecked] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = () => {
    setChecked(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    data.is_Admin = 0;
    console.log(data);
    axios
      .post("http://localhost:4100/users/signup", data)
      .then(({ data }) => {
        navigate("/login");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        console.log(error.response.data.error);
      });
  };

  return (
    <Grid>
      <Paper elevation={10} className="paperStyleLobby">
        <Grid align="center">
          <Avatar>
            <LockOutLinedIcon />
          </Avatar>
          <h2>Register</h2>
        </Grid>
        <form onSubmit={handleSubmit(submit)}>
          <TextField
            label="First Name"
            placeholder="Enter first name"
            {...register("firstName", { required: true })}
          />
          <TextField
            label="Last Name"
            placeholder="Enter last name"
            {...register("lastName", { required: true })}
          />
          <TextField
            label="UserName"
            placeholder="Enter UserName"
            {...register("userName", { required: true })}
          />
          <TextField
            type={showPassword ? "password" : "text"}
            label="password"
            autoComplete="off"
            placeholder="Enter Pasword"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
          />
          <FormControlLabel
            control={<Checkbox />}
            onChange={handleChange}
            label="Show password"
          />
          <Button
            variant="contained"
            type="submit"
            className="buttonStyleLobby"
          >
            Register
          </Button>
          <div style={{ color: "red" }}>{errorMessage}</div>
          {errors.firstName && (
            <div style={{ color: "red" }}>
              you forgot insert your first name!
            </div>
          )}
          {errors.lastName && (
            <div style={{ color: "red" }}>
              you forgot insert your Last name!
            </div>
          )}
          {errors.userName && (
            <div style={{ color: "red" }}>you forgot insert your Username!</div>
          )}
          {errors.password?.type === "required" && (
            <div style={{ color: "red" }}>you forgot insert your password!</div>
          )}
          {errors.password?.type === "minLength" && (
            <p style={{ color: "red" }}>
              your password is too short(must be at less 8 characters)
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              your password is too long(must be at max 20 characters)
            </p>
          )}
        </form>
      </Paper>
    </Grid>
  );
}

export default Register;
