import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';

// NOTE components
import Container from '../../components/CenteredContainer/CenteredContainer';
import Message from '../../components/Message/Message';
import Input from '../../components/Input/Input';

// NOTE helpers
import Auth from '../../models/auth';

import './Login.scss';

const Login = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      setLoading(false)
    }
  }, []);

  // call to my api
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await Auth.login({ email, password });
      const token = await user.data.signedJwt;

      if (!token) setLoading(!loading);

      dispatch(setCurrentUser(token));
      history.push('/dashboard');

    } catch (error) {
      setMessage(error.response);

    }
  };

  const errMessage = message;

  return (

    <Container>
      {errMessage ?
        <div className=" alert alert-danger text-center" role="alert" >
          {errMessage}
        </div>
        : ''
      }

      <div className="primary__heading">
        <p>Login to your account</p>
      </div>


      <form>
        <Input
          name="email"
          type="text"
          label="E-mail address"
          placeholder="E-mail address"
          handleChange={(e) => setEmail(e.target.value)}
          required />

        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"

          handleChange={(e) => setPassword(e.target.value)}
          required />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={handleLogin} >
          {
            loading ? '...loading' : 'Login'
          }
        </button>

      </form>
      <Message message="Back to" url="/" title="Home" />

      <div style={{
        textAlign: 'center',
        fontSize: '1.7rem',
        color: '#000'
      }}>
        or
      </div>
      <Message message="New to Us ?" url="/register" title="Sign Up" />

    </Container>
  );
};

export default Login;
