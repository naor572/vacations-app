import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
export default function MenuAppBar() {
  const linksList = useSelector((state) => state.links.value);
  let linksNav = linksList.find((link) => link.isVisibale);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const HandleMenuClick = (link) => {
    if (link.name === "Logout") {
      const oldToken = sessionStorage.getItem("tokenUser");
      axios
        .get("http://localhost:4100/users/logout", {
          headers: { Authorization: oldToken },
        })
        .then(({ data }) => {
          sessionStorage.removeItem("tokenUser");
        })
        .catch((error) => {});
    }
    navigate(link.path);
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="static" style={{ background: "#914400" }}>
        <Toolbar>
          <img
            src="https://publicdomainvectors.org/tn_img/palm-tree-seashore.webp"
            width="50px"
            height="50px"
          ></img>
          <Typography
            margin="20px"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Vacation App
          </Typography>
          <div>
            <IconButton
              onClick={handleMenu}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              {linksNav.headers.map((link, index) => {
                return (
                  <MenuItem key={index} onClick={() => HandleMenuClick(link)}>
                    {link.name}
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
