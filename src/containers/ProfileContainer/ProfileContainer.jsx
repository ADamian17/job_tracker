import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import { connect } from 'react-redux';
import { setUserDetails } from '../../redux/user/user.actions';

import User from '../../models/User';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import ProfileImg from '../../components/ProfileImg/ProfileImg';

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

const LineChart = (props) => (
    <>
        <Line data={props.data} options={options} />
    </>
);

const ProfileContainer = (props) => {

    const history = useHistory();
    const [userJobs, setUserJobs] = useState({});
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        const { currentUser, setUserDetails } = props;

        try {

            const user = await User.getUser(currentUser);
            setUserDetails(user.data.data);

            const obj = {};

            user.data.data.jobs.forEach((item) => {
                const key = item.job_status;

                if (!obj[key]) {
                    obj[key] = 0;
                }

                obj[key]++;

            });

            setUserJobs(obj);

        } catch (error) {
            console.log(error);
        }
    };

    // eslint-disable-next-line no-unused-vars
    const { createdAt, email, first_name, last_name, profession, profile_image } = props.userDetails;

    const count = Object.keys(userJobs).map(label => userJobs[label]);

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

    const handleDelete = async () => {
        try {
            const { currentUser } = props;

            const deletedUSer = await User.deleteUser(currentUser);

            if (deletedUSer.data.status === 200) {
                localStorage.removeItem('uid');
                history.push('/login');
            }

        } catch (error) {
            setError(error);
        }
    };

    console.log(error);

    return (
        <section className="user__profile dark-bg">

            <article className="card-profile">

                <section className="card-profile__aside">

                    <ProfileImg imgSrc={profile_image} />

                    <div className="card-profile__aside__text">
                        <h3>Member since: {formatDate(createdAt)}</h3>
                    </div>
                </section>

                <section className="card-profile__info">
                    {
                        !show ?
                            <>
                                <p>first name: {first_name}</p>
                                <p>last name: {last_name}</p>
                                <p>email: {email}</p>
                                <p>profession: {profession}</p>

                                <div className="btn-group btn-group--small btn-group--start">
                                    <button className="btn btn-danger" onClick={handleDelete}>delete</button>
                                    <button className="btn btn-success" onClick={() => setShow(!show)}>edit profile</button>
                                </div>
                            </>
                            :
                            <ProfileEdit
                                show={show}
                                setShow={setShow} />
                    }
                </section>
            </article>

            <section className="chart">
                <LineChart data={data} />
            </section>

        </section>
    );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    userDetails: state.user.userDetails
});

const mapDispatchToProps = dispatch => ({
    setUserDetails: (user) => dispatch(setUserDetails(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
