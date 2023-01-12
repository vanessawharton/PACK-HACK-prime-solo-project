import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Link from '@mui/material/Link';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  
  const history = useHistory();

  return (
    <div>
      <center>
        <RegisterForm />
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Already a Member? Click here to Login!
        </button>
      </center>
    </div>
  );
}

export default LandingPage;
