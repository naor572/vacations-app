import Login from "../pages/Login";
import Register from "../pages/Register";
import VacationUsers from "../pages/VacationUsers";
import VacationAdmin from "../pages/VacationAdmin";
import AddVacationAdmin from "../pages/AddVacationAdmin";
import EditVacation from "../pages/EditVacation";
import DeleteVacation from "../pages/DeleteVacation";
import Graph from "../pages/Graph";

export const initialLinksData = [
  {
    path: "/login",
    component: Login,
    exact: true,
    name: "login",
    headers: [
      { name: "Login", path: "/login" },
      { name: "Register", path: "/register" },
    ],
    isVisibale: true,
  },
  {
    path: "/register",
    component: Register,
    exact: true,
    name: "register",
    headers: [
      { name: "Login", path: "/login" },
      { name: "Register", path: "/register" },
    ],
    isVisibale: false,
  },
  {
    path: "/vacation/users",
    component: VacationUsers,
    exact: true,
    name: "user-Home",
    headers: [
      { name: "Logout", path: "/login" },
      { name: "Home", path: "/vacation/users" },
    ],
    isVisibale: false,
  },
  {
    path: "/vacation/admin",
    component: VacationAdmin,
    exact: true,
    name: "admin-Home",
    headers: [
      { name: "Logout", path: "/login" },
      { name: "Home", path: "/vacation/admin" },
      { name: "Add Vacation", path: "/vacation/admin/add" },
      { name: "Graph Vacations", path: "/vacation/admin/Graph" },
    ],
    isVisibale: false,
  },
  {
    path: "/vacation/admin/add",
    component: AddVacationAdmin,
    exact: true,
    name: "add Vacation",
    headers: [
      { name: "Logout", path: "/login" },
      { name: "Home", path: "/vacation/admin" },
      { name: "Add Vacation", path: "/vacation/admin/add" },
      { name: "Graph Vacations", path: "/vacation/admin/Graph" },
    ],
    isVisibale: false,
  },

  {
    path: "/vacation/admin/edit/:vacationId",
    component: EditVacation,
    exact: true,
    name: "edit Vacation",
    headers: [
      { name: "Logout", path: "/login" },
      { name: "Home", path: "/vacation/admin" },
      { name: "Add Vacation", path: "/vacation/admin/add" },
      { name: "Graph Vacations", path: "/vacation/admin/Graph" },
    ],
    isVisibale: false,
  },
  {
    path: "/vacation/admin/delete/:vacationId",
    component: DeleteVacation,
    exact: true,
    name: "delete Vacation",
    headers: [
      { name: "Logout", path: "/login" },
      { name: "Home", path: "/vacation/admin" },
      { name: "Add Vacation", path: "/vacation/admin/add" },
      { name: "Graph Vacations", path: "/vacation/admin/Graph" },
    ],
    isVisibale: false,
  },
  {
    path: "/vacation/admin/Graph",
    component: Graph,
    exact: true,
    headers: [
      { name: "Logout", path: "/login" },
      { name: "Home", path: "/vacation/admin" },
      { name: "Add Vacation", path: "/vacation/admin/add" },
      { name: "Graph Vacations", path: "/vacation/admin/Graph" },
    ],
    isVisibale: false,
  },
];
