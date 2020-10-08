import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

// NOTE Internal Module
import Auth from '../../models/auth';

class Register extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
        profession: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleRegister = async ( event) => {
        event.preventDefault();
        const userData = this.state;

        try {
            const newUser = await Auth.register( userData );
            
            if (newUser) {
                this.setState({
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password2: '',
                    profession: ''
                });
            }
            
            this.props.history.push('/login');
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <div >
                <div style={{ width: 900 }}>
                    <header>
                        Log-in to your account
                    </header>
                    
                    <form >
                        <div >
                            <div >
                                <input
                                    icon="user"
    
                                    placeholder="First Name"
                                    name="first_name"
                                    onChange={this.handleChange}
                                    required />

                                <input
                                
                                    icon="user"
    
                                    placeholder="Last Name"
                                    type="text"
                                    name="last_name"
                                    onChange={this.handleChange}
                                    required/>
                                <input
                                
                                    icon="user"
    
                                    placeholder="Profession"
                                    type="text"
                                    name="profession"
                                    onChange={this.handleChange}
                                    required/>
                            </div>

                            <input
                                icon="envelope"

                                placeholder="E-mail address"
                                name="email"
                                onChange={this.handleChange}
                                required />

                            <div widths="equal">
                                <input
                                    icon="lock"
    
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}
                                    required />

                                <input
                                
                                    icon="lock"
    
                                    placeholder="Confirm Password"
                                    type="password"
                                    name="password2"
                                    onChange={this.handleChange}
                                    required/>
                            </div>

                            <button type="submit" onClick={this.handleRegister}>
                                Register
                            </button>
                        </div>
                    </form>
                    <div>
                        Already have an Account? <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter( Register );
