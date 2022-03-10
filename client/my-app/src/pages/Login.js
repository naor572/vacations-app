import React from "react";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { linkLoginPage } from "../redux/reducerRouter";
import "./lobbyCard.css";

import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setChecked] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");

  useEffect(() => {
    dispatch(linkLoginPage());
  }, []);

  const handleChange = () => {
    setChecked(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    const oldToken = sessionStorage.getItem("tokenUser");
    axios
      .post("http://localhost:4100/users/login", data, {
        headers: { Authorization: oldToken },
      })
      .then(({ data }) => {
        const token = "Bearer " + data.token;
        sessionStorage.setItem("tokenUser", token);
        if (data.isAdmin === 0) navigate("/vacation/users");
        else navigate("/vacation/admin");
      })
      .catch((error) => {
        setErrorMessage(error.response?.data.error);
        console.log(error.response?.data.error);
      });
  };

  return (
    <Grid>
      <Paper elevation={10} className="paperStyleLobby">
        <Grid align="center">
          <Avatar>
            <LockOutLinedIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <form onSubmit={handleSubmit(submit)}>
          <TextField
            label="Username"
            placeholder="Enter Username"
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
            Login
          </Button>

          <div style={{ color: "red" }}>{errorMessage}</div>
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
