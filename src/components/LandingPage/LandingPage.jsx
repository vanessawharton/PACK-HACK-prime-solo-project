import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const history = useHistory();

  return (
    <div>
      <Box
        sx={{
            margin: 'auto',
            padding: 1,
            width: 1000,
            elevation: 8,
            backgroundColor: '#faf3e8',
            boxShadow: 12,
            clipPath:
            'polygon(0% 0px, 100px 0%, calc(100% - 100px) 0%, 100% 100px, 100% calc(100% - 0px), calc(100% - 100px) 100%, 100px 100%, 0 calc(100% - 100px))'
        }}>
        <RegisterForm />
        <center>
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
      </Box>
    </div>
  );
}

export default LandingPage;
