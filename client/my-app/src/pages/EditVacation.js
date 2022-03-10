import React from "react";
import { Grid, Paper, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { linkAdminPage } from "../redux/reducerRouter";
import { useNavigate, useParams } from "react-router-dom";
import "./vacationCard.css";

function AddVacationAdmin() {
  const history = useNavigate();
  const { vacationId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(linkAdminPage());
    getVacationDetails();
  }, []);

  const getVacationDetails = () => {
    const oldToken = sessionStorage.getItem("tokenUser");
    axios
      .get(`http://localhost:4100/vacations/${vacationId}`, {
        headers: { Authorization: oldToken },
      })
      .then(({ data }) => {
        const [vacation] = data;
        setValue("description", vacation.description);
        setValue("destination", vacation.destination);
        setValue("picture", vacation.picture);
        setValue("travelDate", vacation.travel_date);
        setValue("returnDate", vacation.return_date);
        setValue("price", vacation.price);
      })
      .catch((error) => {
        setErrorMessage(error.response?.data.error);
      });
  };

  const submit = (updatedVacation) => {
    updatedVacation.id = vacationId;
    const oldToken = sessionStorage.getItem("tokenUser");
    axios
      .post(`http://localhost:4100/vacations/updateVaction`, updatedVacation, {
        headers: { Authorization: oldToken },
      })
      .then(({ data }) => {
        history(-1);
      })
      .catch((error) => {
        setErrorMessage(error.response?.data.error);
      });
  };

  return (
    <Grid>
      <Paper elevation={10} className="paperStyle">
        <Grid align="center">
          <img
            src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/1500/posts/30812/preview_image/th.jpg"
            width="60px"
            height="60px"
          ></img>
          <h2>Edit Vacation</h2>
        </Grid>
        <form onSubmit={handleSubmit(submit)}>
          <TextField
            label="Description"
            placeholder="Enter description"
            {...register("description", { required: true })}
          />
          <TextField
            label="Destination"
            autoComplete="off"
            placeholder="Enter destination"
            {...register("destination", {
              required: true,
            })}
          />
          <TextField
            type="url"
            label="Picture"
            placeholder="Enter picture"
            {...register("picture", {
              required: true,
            })}
          />
          <TextField
            className="dateStyle"
            label="Travel date"
            type="date"
            {...register("travelDate", {
              required: true,
            })}
          />
          <TextField
            className="dateStyle"
            label="Return date"
            type="date"
            {...register("returnDate", {
              required: true,
            })}
          />
          <TextField
            label="Price"
            placeholder="Enter price"
            {...register("price", { required: true })}
          />

          <Button variant="contained" type="submit" className="buttonStyle">
            Edit
          </Button>
          <div style={{ color: "red" }}>{errorMessage}</div>
          {errors.description?.type === "required" && (
            <div style={{ color: "red" }}>
              you forgot insert your description!
            </div>
          )}
          {errors.destination?.type === "required" && (
            <div style={{ color: "red" }}>
              you forgot insert your destination!
            </div>
          )}
          {errors.picture?.type === "required" && (
            <div style={{ color: "red" }}>
              you forgot insert your url picture!
            </div>
          )}
          {errors.travelDate?.type === "required" && (
            <div style={{ color: "red" }}>
              you forgot insert your travel date!
            </div>
          )}
          {errors.returnDate?.type === "required" && (
            <div style={{ color: "red" }}>
              you forgot insert your return date!
            </div>
          )}
          {errors.price?.type === "required" && (
            <div style={{ color: "red" }}>you forgot insert price!</div>
          )}
        </form>
      </Paper>
    </Grid>
  );
}

export default AddVacationAdmin;
