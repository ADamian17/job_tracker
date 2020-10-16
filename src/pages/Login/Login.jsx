import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { setCurrentUser, setTokenExp } from '../../redux/user/user.actions';

// NOTE components

// NOTE helpers
import Auth from '../../models/auth';

// F focus
// i independent
// reusable
// small
// testable

import './Login.scss';

class Login extends Component {

    state = {
        email: '',
        password: '',
        error: null
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleLogin = async (event) => {
        event.preventDefault();

        const { setCurrentUser } = this.props;
        const userData = this.state;

        try {
            const user = await Auth.login( userData );
            const token = await user.data.signedJwt;

            if (token) {
                setCurrentUser(token);
                
                this.setState({
                    email: '',
                    password: ''
                });
                this.props.history.push('/dashboard/jobs');
            }

        } catch (error) {
            this.setState({
                error: error.response.data.message
            });
        }
    };

    render() {

        const invalidUser = this.state.error;
        
        return (
         
            <div className=" container-fluid">
                <div className="row justify-content-center full-screen ">

                    <div className="col-4 align-self-center">
                       
                        <div className="card p-3 shadow">
                            { invalidUser ?  <div className="error"> Email or Password are wrong. Please try agian! </div> : '' }
                            <header className="text-center">
                                Log-in to your account
                            </header>

                            <form className="">

                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="E-mail address"
                                        name="email"
                                        onChange={this.handleChange}
                                        required />
                                </div>

                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        onChange={this.handleChange}
                                        required/>
                                </div>

                                <button type="submit"  className="btn btn-primary btn-block" onClick={this.handleLogin} >
                                    Login
                                </button>

                            </form>

                            <div>
                                New to us? <Link to="/register">Sign Up</Link>
                            </div>
                        </div>
                    </div>

                </div>

                      
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (token) => dispatch(setCurrentUser(token)),
    setTokenExp: (token) => dispatch(setTokenExp(token))
});

export default connect( null, mapDispatchToProps )(Login);
