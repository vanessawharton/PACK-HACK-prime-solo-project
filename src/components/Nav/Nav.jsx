import * as React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

// material-UI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Nav() {

  const user = useSelector((store) => store.user);
  const history = useHistory();

  return (
    <div className="nav">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
            <MenuIcon />
            {/* <Menu
              id="basic-menu"
              open={open}
            > */}

            {/* If no user is logged in, show these links */}
            {!user.id && (
              // If there's no user, show login/registration links
              <>
              <MenuItem>
                <button
                  type="button"
                  className="btn btn_asLink"
                  onClick={() => {
                    history.push('/login');
                  }}
                >
                  Login / Register
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  type="button"
                  className="btn btn_asLink"
                  onClick={() => {
                    history.push('/about');
                  }}
                >
                  About
                </button>
              </MenuItem>
              </>
            )}

            {/* If a user is logged in, show these links */}
            {user.id && (
              <>
                <MenuItem>
                  <button
                  type="button"
                  className="btn btn_asLink"
                  onClick={() => {
                    history.push('/trips');
                  }}
                >
                  My Trips
                </button>
                </MenuItem>
                <MenuItem>
                  <button
                  type="button"
                  className="btn btn_asLink"
                  onClick={() => {
                    history.push('/about');
                  }}
                >
                  About
                </button>
                </MenuItem>
                <MenuItem>
                  <LogOutButton className="navLink" />
                </MenuItem>
              </>
            )}

            {/* </Menu> */}
          {/* </IconButton> */}
          <img style={{ width: 200, height: 150 }} src="/images/PACKHACKInvertedColor2000x1500.png" />
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}