import React, { useState } from 'react';

import { connect } from 'react-redux';
import { setCurrentUser, setTokenExp } from '../../redux/user/user.actions';

// NOTE components
import LoginRegisterContainer from '../../components/LoginRegisterContainer/LoginRegisterContainer';
import Message from '../../components/Message/Message';

// NOTE helpers
import Auth from '../../models/auth';

import './Login.scss';

const Login = ( props ) => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        const { setCurrentUser } = props;
        const userData = { email, password };

        try {
            const user = await Auth.login( userData );
            const token = await user.data.signedJwt;
            
            setCurrentUser(token);
            props.history.push('/dashboard/jobs');

        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    const errMessage = message;
        
    return (
         
        <LoginRegisterContainer colZise={4} >

            <div className="card p-3 shadow">

                { errMessage ?  
                    <div className=" alert alert-danger text-center" role="alert" > 
                        { errMessage } 
                    </div> 
                    : '' 
                }

                <div className="row">

                    <div className="col p-2">

                        <header className="text-center">

                            Log-in to your account

                        </header>

                    </div>

                </div>

                <form>

                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="E-mail address"
                            name="email"
                            onChange={ (e) => setEmail(e.target.value) }
                            required />
                                        
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>

                    <div className="form-group">

                        <input
                            className="form-control"
                            placeholder="Password"
                            type="password"
                            name="password"
                            onChange={ (e) => setPassword(e.target.value) }
                            required/>

                    </div>

                    <button type="submit"  className="btn btn-primary btn-block" onClick={handleLogin} >
                        Login
                    </button>

                </form>

                <Message message=" New to us?" url="/register" title="Sign Up" />
                            
            </div>

        </LoginRegisterContainer>
    );

};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (token) => dispatch(setCurrentUser(token)),
    setTokenExp: (token) => dispatch(setTokenExp(token))
});

export default connect( null, mapDispatchToProps )(Login);
