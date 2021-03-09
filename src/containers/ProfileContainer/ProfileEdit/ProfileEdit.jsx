import React, { useState } from 'react';

import { connect } from 'react-redux';
import { setUserDetails } from '../../../redux/user/user.actions'; 

import Input from '../../../components/Input/Input';
import User from '../../../models/User';

const ProfileEdit = ({ details, show, setShow, currentUser, setUserDetails }) => {
    
    const [ first_name, setFirstName ] = useState( details.first_name );
    const [ last_name, setLastName ] = useState( details.last_name );
    const [ email, setEmail ] = useState( details.email );
    const [ profession, setProfession ] = useState( details.profession );

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updateUser = await User.editUser( currentUser, { first_name, last_name, email, profession } );
            setUserDetails( updateUser.data.data );
            setShow( !show ); 
            
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="col col--small">

                <p className="fields">
                    <span>First Name:</span> 
                </p>

                <Input 
                    type="text" 
                    placeholder={first_name}
                    label="First Name" 
                    value={first_name} 
                    onChange={ (e) => setFirstName(e.target.value) } />
            </div>

            <div className="col col--small">

                <p className="fields">
                    <span>Last Name:</span> 
                </p>

                <Input 
                    type="text" 
                    placeholder={last_name}
                    label="Last Name" 
                    value={last_name} 
                    onChange={ (e) => setLastName(e.target.value) } />
            </div>

            <div className="col col--small">

                <p className="fields">
                    <span>Email:</span> 
                </p>

                <Input 
                    type="text" 
                    placeholder={email}
                    label="Email" 
                    value={email} 
                    onChange={ (e) => setEmail(e.target.value) } />
            </div>

            <div className="col col--small">

                <p className="fields">
                    <span>Profession:</span> 
                </p>

                <Input 
                    type="text" 
                    placeholder={profession}
                    label="Profession" 
                    value={profession}
                    onChange={ (e) => setProfession(e.target.value) } />
            </div>

            <div className="btn-group">
                <button className="btn btn-primary mr" onClick={() => setShow( !show )}>cancel</button>
                <button className="btn btn-success">Edit</button>
            </div>      

        </form>
    );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    details: state.user.userDetails
});

const mapDispatchToProps = dispatch => ({
    setUserDetails: ( user ) => dispatch( setUserDetails( user ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( ProfileEdit );
