import React, { useState } from 'react';

import { connect } from 'react-redux';
import { setCurrentUser, setTokenExp } from '../../redux/user/user.actions';

// NOTE components
import Container from '../../components/Container/Container';
import Message from '../../components/Message/Message';

// NOTE helpers
import Auth from '../../models/auth';

import './Login.scss';

const Login = ( props ) => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ message, setMessage ] = useState('');

    const userData = { email, password };

    const handleLogin = async (event) => {
        event.preventDefault();

        const { setCurrentUser } = props;

        try {
            const user = await Auth.login( userData );
            const token = await user.data.signedJwt;
            
            setCurrentUser(token);
            setTokenExp( false );
            props.history.push('/dashboard/jobs');

        } catch (error) {
            setMessage(error.response.data.message);

        }
    };

    const errMessage = message;
        
    return (
         
        <Container >

            <>

                { errMessage ?  
                    <div className=" alert alert-danger text-center" role="alert" > 
                        { errMessage } 
                    </div> 
                    : '' 
                }

                <div className="row mb-2">

                    <div className="col">

                        <header className="text-center">

                            Log-in to your account

                        </header>

                    </div>

                </div>

                <div className="row">

                    <div className="col-6">
                        <form>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="E-mail address"
                                    name="email"
                                    onChange={ ( e ) => setEmail( e.target.value ) }
                                    required />
                    
                                {/* <div className="invalid-feedback">
                                    Please choose a username.
                                </div> */}
                            </div>

                            <div className="form-group">

                                <input
                                    className="form-control"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={ (e) => setPassword( e.target.value ) }
                                    required/>

                            </div>

                            <button type="submit"  className="btn btn-primary btn-block" onClick={handleLogin} >
                                Login
                            </button>

                        </form>

                    </div>

                    <div className="col-6" />
                </div>

                <Message message=" New to us?" url="/register" title="Sign Up" />
                            
            </>

        </Container>
    );

};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (token) => dispatch(setCurrentUser(token)),
    setTokenExp: ( boolean ) => dispatch(setTokenExp( boolean ) )
});

export default connect( null, mapDispatchToProps )(Login);
