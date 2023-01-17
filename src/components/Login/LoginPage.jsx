import React from 'react';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';

function LoginPage() {
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
      <center>
        <LoginForm />
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Don't have a login? Register here!
        </button>
      </center>
      </Box>
    </div>
  );
}

export default LoginPage;
