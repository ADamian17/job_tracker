import React, { Component } from 'react';


// NOTE components
import LoginRegisterContainer from '../../components/LoginRegisterContainer/LoginRegisterContainer';
import Message from '../../components/Message/Message';
import ErrorBanner from '../../components/ErrorBanner/ErrotBanner';

// NOTE Internal Module
import Auth from '../../models/auth';

class Register extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
        profession: '',
        error: null
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleRegister = async ( event ) => {
        event.preventDefault();
        const userData = this.state;

        try {

            await Auth.register( userData );
            
            this.setState({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password2: '',
                profession: ''
            });
            
            this.props.history.push('/login');
            
        } catch (err) {

            this.setState({
                error : err.response.data
            });

        }
    };
    
    render() {
        const errMessage = this.state.error;

        return (
            <LoginRegisterContainer colZise={6} >
               
                    
                { errMessage ?  
                    <ErrorBanner message={ errMessage.message } />
                    : '' 
                }

                <div className="row">

                    <div className="form-group col p-2">

                        <header className="text-center">
                            create a new account
                        </header>
                            
                    </div>

                </div>
                    
                <form>

                    {/* row 1 */}
                    <div className="form-row">

                        <div className="form-group col">
                            <input
                                className="form-control"
                                placeholder="First Name"
                                name="first_name"
                                onChange={this.handleChange}
                                required />
                        </div>

                        <div className="form-group col">
                            <input
                                className="form-control"
                                placeholder="Last Name"
                                type="text"
                                name="last_name"
                                onChange={this.handleChange}
                                required/>
                        </div>

                        <div className="form-group col">
                            <input
                                className="form-control"
                                placeholder="Profession"
                                type="text"
                                name="profession"
                                onChange={this.handleChange}
                                required/>
                        </div> 

                    </div>

                    {/* row 2 */}
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="E-mail address"
                            name="email"
                            onChange={this.handleChange}
                            required />
                            
                    </div>

                    {/* row 3  */}
                    <div className="form-row">
                            
                        <div className="form-group col">
                            <input
                                className="form-control"
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={this.handleChange}
                                required />

                        </div>

                        <div className="form-group col">
                            <input
                                className="form-control"
                                placeholder="Confirm Password"
                                type="password"
                                name="password2"
                                onChange={this.handleChange}
                                required/>
                        </div>

                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={this.handleRegister}>
                        Register
                    </button>
    
                </form>

                <Message message="Already have an Account?" url="/login" title="Login" />
            

            </LoginRegisterContainer>
        );
    }
}

export default Register;
