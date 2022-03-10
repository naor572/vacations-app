import * as React from "react";
import Alert from "@mui/material/Alert";
import { Fragment } from "react";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import "./WrongUrl.css";

function WrongUrl() {
  return (
    <Fragment>
      <style>{"body {background-color:red;}"}</style>
      <Stack className="alert" sx={{ width: "20%" }} spacing={2}>
        <Alert severity="error">page not found — please check your url!</Alert>
      </Stack>
      <img
        className="photo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9A00NhzCsVj1ij9MtqdWNPegT_kXXR35LKQ&usqp=CAU"
      ></img>
    </Fragment>
  );
}

export default WrongUrl;
