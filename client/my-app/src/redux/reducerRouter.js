import { createSlice } from "@reduxjs/toolkit";
import { initialLinksData } from "./routerData";

export const linksSlice = createSlice({
  name: "links",
  initialState: {
    value: initialLinksData,
  },
  reducers: {
    linkLoginPage: (state, action) => {
      state.value.map((link) => {
        if (link.name === "login") link.isVisibale = true;
        else link.isVisibale = false;
      });
    },
    linkAdminPage: (state, action) => {
      state.value.map((link) => {
        if (link.name === "admin-Home") link.isVisibale = true;
        else link.isVisibale = false;
      });
    },
    linkUsersPage: (state, action) => {
      state.value.map((link) => {
        if (link.name === "user-Home") link.isVisibale = true;
        else link.isVisibale = false;
      });
    },
  },
});
export const { linkLoginPage, linkAdminPage, linkUsersPage } =
  linksSlice.actions;
export default linksSlice.reducer;
