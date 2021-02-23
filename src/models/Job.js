import axios from 'axios';
// import { API_ROUTE_URL } from '../utils/consts';

// const currentUser = localStorage.getItem('uid');
class Job {

    static getAllJobs ( currentUser, query = null ) {
        console.log(`${process.env.REACT_APP_API_URL}/jobs?job_status=${query}`);
        if ( query ) {
            return axios.get(`${process.env.REACT_APP_API_URL}/jobs?job_status=${query}`, {
                headers: { authorization: `Bearer ${currentUser}` }
            });
        }

        return axios.get(`${process.env.REACT_APP_API_URL}/jobs`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }


    static getJobDetails ( currentUser, id ) {
        return axios.get(`${process.env.REACT_APP_API_URL}/jobs/${id}`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static addJob ( currentUser, state ) {
        return axios.post(`${process.env.REACT_APP_API_URL}/jobs/newjob`, state, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static editJob ( currentUser, state, id ) {
        return axios.put(`${process.env.REACT_APP_API_URL}/jobs/update/${ id }`, state, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static deleteJob ( currentUser, id ) {
        return axios.delete(`${process.env.REACT_APP_API_URL}/jobs/delete/${id}`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

}

export default Job;
