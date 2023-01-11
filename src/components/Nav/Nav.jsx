import * as React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

// material-UI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '@fontsource/audiowide';

export default function Nav() {

  const user = useSelector((store) => store.user);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="nav">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
            >

            {/* If no user is logged in, show these links */}
            {!user.id && (
              <div>
              <MenuItem onClick={() => {history.push('/login'); setAnchorEl(null);}}>Login / Register</MenuItem>
              <MenuItem onClick={() => {history.push('/about'); setAnchorEl(null);}}>About</MenuItem>
              </div>
            )}

            {/* If a user is logged in, show these links */}
            {user.id && (
              <div>
                <MenuItem onClick={() => {history.push('/trips'); setAnchorEl(null);}}>My Trips</MenuItem>
                <MenuItem onClick={() => {history.push('/packinglists'); setAnchorEl(null);}}>My Packing Lists</MenuItem>
                <MenuItem onClick={() => {history.push('/about'); setAnchorEl(null);}}>About</MenuItem>
                <MenuItem>
                  <LogOutButton className="navLink" />
                </MenuItem>
              </div>
            )}

            </Menu>
          <img style={{ width: 200, height: 150 }} src="/images/PACKHACKInvertedColor2000x1500.png" />
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}