import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { signout } from "../slices/authSlice";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
    // Handle menu item click
    console.log(`Clicked on ${option}`);
    handleClose();
  };

  const handleSignOut = async () => {
    const response = await dispatch(signout() as any);
    if (response) handleClose();
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EMedicine
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        {user?.type === "Admin" && (
          <>
            <Button color="inherit" component={Link} to="/UserList">
              Users
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Medicines
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Orders
            </Button>
          </>
        )}
        {user ? (
          <Avatar onClick={handleClick}>{user.firstName.charAt(0)}</Avatar>
        ) : (
          <Avatar onClick={handleClick} />
        )}
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {user ? (
            <>
              <MenuItem onClick={() => handleMenuItemClick("Profile")}>
                Profile
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("Settings")}>
                Settings
              </MenuItem>
              <MenuItem onClick={() => handleSignOut()}>Logout</MenuItem>
            </>
          ) : (
            <MenuItem>
              <Link to="/SignIn">Sign in</Link>
            </MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
