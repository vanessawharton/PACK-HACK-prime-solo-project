import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../Login/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import TripsPage from '../Trips/TripsPage';
import TripForm from '../Trips/TripForm';
import TripDetails from '../Trips/TripDetails';
import EditTrip from '../Trips/EditTrip';
import PackingListsPage from '../PackingLists/PackingListsPage';
import PackingListForm from '../PackingLists/PackingListForm';
import PackingListDetails from '../PackingLists/PackingListDetails';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import '@fontsource/audiowide';

function App() {
  const theme= createTheme({
    palette: {
      primary: {
        main: '#BBABDC',
        dark: '#4415AA',
      },
      secondary: {
        main: '#E16DF5',
      },
      accent: {
        blue: '#5DB7DC',
        background: '#F5F5F5',
      },
      error: {
        main: '#EC6F6F',
      },
      warning: {
        main: '#ecad6f',
      },
      success: {
        main: '#6fec6f',
        light: '#E9FFDF'
      },
    contrastThreshold: 4.5,
    }
  })


  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows TripsPage else shows LoginPage
            exact
            path="/trips"
          >
            <TripsPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows TripForm
            exact
            path="/addtrip"
          >
            <TripForm />
          </ProtectedRoute>

          <ProtectedRoute path='/trips/:id' children={<TripDetails />}>
          </ProtectedRoute>

          <ProtectedRoute path='/edit/:id' children={<EditTrip />}>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/packinglists"
          >
            <PackingListsPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/addpacklist"
          >
            <PackingListForm /> 
          </ProtectedRoute>

          <ProtectedRoute path='/packinglists/:id' children={<PackingListDetails />}>
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /trips page
              <Redirect to="/trips" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /trips page
              <Redirect to="/trips" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /trips page
              <Redirect to="/trips" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
