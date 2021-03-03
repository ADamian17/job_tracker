import React, { useState } from 'react';

// NOTE components
import Container from '../../components/CenteredContainer/CenteredContainer';
import Message from '../../components/Message/Message';
import ErrorBanner from '../../components/ErrorBanner/ErrotBanner';

import Input from '../../components/Input/Input';

// NOTE Internal Module
import Auth from '../../models/auth';

const Register = ( props ) => {

    const [ first_name, setFirstName ] = useState('');
    const [ last_name, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ password2, setPassword2 ] = useState('');
    const [ profession, setProfession] = useState('');
    const [ error, setError ] = useState(null);

    const handleRegister = async ( event ) => {
        event.preventDefault();

        try {

            await Auth.register({
                first_name, 
                last_name, 
                email,
                password,
                password2,
                profession 
            });
            
            props.history.push('/login');
            
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <Container>
                   
            { error ?  
                <ErrorBanner message={ error.message } />
                : '' 
            }

            <div className="primary__heading">

                <p>Create a New Account</p>

            </div>
                    
            <form>

                {/* row 1 */}
                <Input
                    type="text"  
                    name="first_name"
                    label="First Name"
                    placeholder="First Name"
                    handleChange={( e ) => setFirstName( e.target.value )} 
                    required />

                <Input
                    type="text" 
                    name="last_name"
                    label="Last Name"
                    placeholder="Last Name"
                    handleChange={( e ) => setLastName( e.target.value )} 
                    required />

                <Input
                    type="text"  
                    name="profession"
                    label="Profession"
                    placeholder="Profession"
                    handleChange={( e ) => setProfession( e.target.value )} 
                    required />

                <Input
                    type="email"  
                    name="email"
                    label="Email"
                    placeholder="Email"
                    handleChange={( e ) => setEmail( e.target.value )} 
                    required />

                <Input
                    type="password"  
                    name="password"
                    label="Password"
                    placeholder="Password"
                    handleChange={( e ) => setPassword( e.target.value )} 
                    required />

                <Input
                    type="password"  
                    name="password2"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    handleChange={( e ) => setPassword2( e.target.value )} 
                    required />

                <button type="submit" className="btn btn-primary btn-block" onClick={handleRegister}>
                    Register
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
                            
            <Message message="Already have an Account?" url="/login" title="Login" />
            

        </Container>
    );
};

export default Register;
