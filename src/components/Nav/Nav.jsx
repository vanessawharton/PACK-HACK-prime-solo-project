import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

// material-UI components
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';

// const useStyles = makeStyles((theme) => ({
//   root: {
//       flexGrow: 1,
//   },
//   menuButton: {
//       marginRight: theme.spacing(2),
//   },
//   title: {
//       flexGrow: 1,
//   },
// }));

function Nav() {
  const user = useSelector((store) => store.user);
  // const classes = useStyles();
  const history = useHistory();

  const navHome = () => {
    history.push('/')
}

  return (
    // <div className={classes.root}>
    <div className="nav">
      {/* <AppBar position="static">
        <Toolbar>
          <button onClick={navHome}>Home</button>
        </Toolbar>
      </AppBar> */}
        <img style={{ width: 200, height: 150 }} src="/images/PACKHACKInvertedColor2000x1500.png" />
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
