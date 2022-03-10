import React, { useState } from "react";
import { useEffect } from "react";
import { linkAdminPage } from "../redux/reducerRouter";
import CardVacation from "../component/CardVacation";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import axios from "axios";
import EditAndDelete from "../component/EditAndDelete";

function VacationAdmin() {
  const [vacations, setVacations] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(linkAdminPage());
    getAllVacationUser();
  }, []);

  const getAllVacationUser = () => {
    const token = sessionStorage.getItem("tokenUser");
    axios
      .get("http://localhost:4100/vacations", {
        headers: { Authorization: token },
      })
      .then(({ data }) => {
        setVacations(data);
      });
  };
  return (
    <div>
      <Grid container spacing={4} style={{ paddingTop: "40px" }}>
        {vacations.map((element, id) => {
          return (
            <CardVacation {...element} key={id}>
              <EditAndDelete
                vacationId={element.vacationId}
                numOfFollowers={element.numOfFollowers}
              ></EditAndDelete>
            </CardVacation>
          );
        })}
      </Grid>
    </div>
  );
}

export default VacationAdmin;
