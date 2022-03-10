import { useDispatch, useSelector } from "react-redux";
import React from "react";
import "./App.css";
import { linkAdminPage } from "./redux/reducerRouter";
import RouterApp from "./component/RouteApp";
import AppBarNav from "./component/AppBarNav";
function App() {
  return (
    <div>
      <AppBarNav />
      <RouterApp />
    </div>
  );
}

export default App;
