import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { connect } from 'react-redux';
import { setUserDetails } from '../../redux/user/user.actions'; 

import User from '../../models/User';

// utils
import { formatDate } from '../../utils/functs';

import './ProfileContainer.scss';

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true
                }
            }
        ]
    }
};

const LineChart = ( props ) => (
    <>
        <Line data={props.data} options={options} />
    </>
);

const ProfileContainer = ( props ) => {

    const [ userJobs, setUserJobs ] = useState({});

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        const { currentUser, setUserDetails } = props;

        try {

            const user = await User.getUser( currentUser );
            setUserDetails( user.data.data );

            const obj = {};

            user.data.data.jobs.forEach( ( item ) => {
                const key = item.job_status;

                if ( !obj[key] ) {
                    obj[key] = 0;
                }

                obj[key]++;
            
            });

            setUserJobs( obj );

        } catch (error) {
            console.log(error);
        }
    };

    const { createdAt, email, first_name, last_name, profession, profile_image } = props.userDetails;

    const count = Object.keys(userJobs).map( label => userJobs[label] );

    const data = {
   
        labels: Object.keys(userJobs),
    
        datasets: [
            {
                label: 'application count by status',
                data: count,
                fill: false,
                backgroundColor: '#3310b0',
                borderColor: '#3310b0'
            }
        ]
    };

    return (
        <section className="user__profile dark-bg">

            <article className="card-profile">

                <section className="card-profile__aside">
                    <div className="image__container">
                        <img 
                            className="image" 
                            alt="avatar" 
                            src={profile_image} />

                        {/* <button className="btn btn-link image-holder_edit-link" type="button" data-toggle="modal" data-target="#update-photo" >
                            <p className="button-text">edit photo</p>
                        </button> */}
                    </div>

                    <div className="card-profile__aside__text">
                        <h3>Member since: {formatDate(createdAt)}</h3>
                    </div>
                </section>

                <section className="card-profile__info">
                    <p>full name: {first_name} {last_name}</p>
                    <p>email: { email }</p>
                    <p>profession: {profession}</p>

                    <div className="btn-group btn-group--small btn-group--start" >
                        <button className="btn btn-danger">delete</button>
                        <button className="btn btn-success">edit</button>
                    </div>
                </section>
               
            </article>


            <LineChart data={data} />
    
        </section>
    );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    userDetails: state.user.userDetails
});

const mapDispatchToProps = dispatch => ({
    setUserDetails: ( user ) => dispatch(setUserDetails( user ))
});

export default connect( mapStateToProps, mapDispatchToProps )(ProfileContainer);
