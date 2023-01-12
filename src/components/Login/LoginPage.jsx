import React from 'react';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
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
    </div>
  );
}

export default LoginPage;
