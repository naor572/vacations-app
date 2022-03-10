import React, { useState } from "react";
import { useEffect } from "react";
import { linkUsersPage } from "../redux/reducerRouter";
import CardVacation from "../component/CardVacation";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import FollowUser from "../component/FollowUser";
import axios from "axios";

function VacationUsers() {
  const [vacations, setVacations] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(linkUsersPage());
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
              <FollowUser
                numOfFollowers={element.numOfFollowers}
                user_id={element.user_id}
                getAllVacationUser={getAllVacationUser}
                vacationId={element.vacationId}
              ></FollowUser>
            </CardVacation>
          );
        })}
      </Grid>
    </div>
  );
}

export default VacationUsers;
