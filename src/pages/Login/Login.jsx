import React, { useState } from 'react';

import { connect } from 'react-redux';
import { setCurrentUser, setTokenExp } from '../../redux/user/user.actions';

// NOTE components
import Container from '../../components/CenteredContainer/CenteredContainer';
import Message from '../../components/Message/Message';
import Input from '../../components/Input/Input';

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
         
        <Container>

            <>

                { errMessage ?  
                    <div className=" alert alert-danger text-center" role="alert" > 
                        { errMessage } 
                    </div> 
                    : '' 
                }

                <div className="primary__heading">

                    <p>Login to your account</p>

                </div>

                <div className="row">

                    <div className="col-6">
                        <form>
                            <Input 
                                name="email"
                                label="E-mail address"
                                placeholder="E-mail address"
                                handleChange={( e ) => setEmail( e.target.value ) } 
                                required />

                            <Input 
                                type="password"
                                name="password"
                                label="Password"
                                placeholder="Password"
                                
                                handleChange={(e) => setPassword( e.target.value ) } 
                                required />

                            <button 
                                type="submit"  
                                className="btn btn-primary btn-block" 
                                onClick={handleLogin} >
                                Login
                            </button>

                        </form>

                    </div>

                </div>

                <Message message="New to Us ?" url="/register" title="Sign Up" />

                <div style={{ 
                    textAlign: 'center', 
                    fontSize: '1.7rem',
                    color: '#000'
                }}>
                    or
                </div>
                            
                <Message message="Back to Home" url="/" title="Home" />
            </>

        </Container>
    );

};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (token) => dispatch(setCurrentUser(token)),
    setTokenExp: ( boolean ) => dispatch(setTokenExp( boolean ) )
});

export default connect( null, mapDispatchToProps )(Login);
