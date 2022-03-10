import React from "react";
import { useState, useEffect } from "react";
import { linkAdminPage } from "../redux/reducerRouter";
import { useDispatch } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

import axios from "axios";

function Graph() {
  const [destination, setDestination] = useState("");
  const [numOfFollowers, setNumOfFollowers] = useState("");
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
        const a = data.map((des) => des.destination);
        setDestination(a);
        setNumOfFollowers(data.map((des) => des.numOfFollowers));
      });
  };
  const state = {
    labels: destination,
    datasets: [
      {
        label: "followers",
        data: numOfFollowers,
        backgroundColor: "#FFB6C1",
        orderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
      },
    ],
  };
  return <Bar data={state} />;
}

export default Graph;
