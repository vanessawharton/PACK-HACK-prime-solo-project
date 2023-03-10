import * as React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

// material-UI components
import AppBar from '@mui/material/AppBar';
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
      <Toolbar>
        <IconButton
          edge="start"
          size="large"
          color= "primary"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <MenuIcon sx={{color: "red" }}/>
        </IconButton>
        <img id="logo" style={{ height: 100 }} src="/images/Logo.png" />
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
            <MenuItem onClick={() => {history.push('/login'); setAnchorEl(null);}}>LOGIN / REGISTER</MenuItem>
            <MenuItem onClick={() => {history.push('/about'); setAnchorEl(null);}}>ABOUT</MenuItem>
          </div>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <div>
            <MenuItem onClick={() => {history.push('/trips'); setAnchorEl(null);}}>MY TRIPS</MenuItem>
            <MenuItem onClick={() => {history.push('/packinglists'); setAnchorEl(null);}}>MY PACKING LISTS</MenuItem>
            <MenuItem onClick={() => {history.push('/about'); setAnchorEl(null);}}>ABOUT</MenuItem>
            <MenuItem>
              <LogOutButton className="navLink" />
            </MenuItem>
          </div>
        )}

        </Menu>
      </Toolbar>
    </div>
  );
}