import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteVacation() {
  const { vacationId } = useParams();
  const history = useNavigate();
  useEffect(() => {
    console.log("a");
    const token = sessionStorage.getItem("tokenUser");
    axios
      .get(`http://localhost:4100/vacations/removeVacation/${vacationId}`, {
        headers: { Authorization: token },
      })
      .then((data) => {
        console.log(data.data);
        setTimeout(() => {
          history(-1);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );
}

export default DeleteVacation;
