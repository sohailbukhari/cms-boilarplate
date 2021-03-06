import React from 'react';
import { NavLink } from 'react-router-dom';

import 'assets/scss/style.scss';
import Aux from 'hoc/_Aux';
import { useCore } from 'hooks/useCore';

const SignIn = (props) => {
  const core = useCore();

  const handleLogin = () => {
    core.login();
    props.history.push('/');
  };

  return (
    <Aux>
      <div className='auth-wrapper'>
        <div className='auth-content'>
          <div className='auth-bg'>
            <span className='r' />
            <span className='r s' />
            <span className='r s' />
            <span className='r' />
          </div>
          <div className='card'>
            <div className='card-body text-center'>
              <div className='mb-4'>
                <i className='feather icon-unlock auth-icon' />
              </div>
              <h3 className='mb-4'>Login</h3>
              <div className='input-group mb-3'>
                <input type='email' className='form-control' placeholder='Email' value='admin@sohailbukhari.com' />
              </div>
              <div className='input-group mb-4'>
                <input type='password' className='form-control' placeholder='password' value='admin' />
              </div>
              <div className='form-group text-left'>
                <div className='checkbox checkbox-fill d-inline'>
                  <input type='checkbox' checked={true} name='checkbox-fill-1' id='checkbox-fill-a1' />
                  <label htmlFor='checkbox-fill-a1' className='cr'>
                    {' '}
                    Save credentials
                  </label>
                </div>
              </div>
              <button className='btn btn-primary shadow-2 mb-4' onClick={handleLogin}>
                Login
              </button>
              <p className='mb-2 text-muted'>
                Forgot password? <NavLink to='/reset-password'>Reset</NavLink>
              </p>
              <p className='mb-0 text-muted'>
                Don’t have an account? <NavLink to='/register'>Signup</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default SignIn;
