import axios from 'axios';
// import { API_ROUTE_URL } from '../utils/consts';

// const currentUser = localStorage.getItem('uid');

const api_url = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/v1';
class Job {

    static getAllJobs ( currentUser, query = null ) {
        if ( query ) {
            return axios.get(`${api_url}/jobs?job_status=${query}`, {
                headers: { authorization: `Bearer ${currentUser}` }
            });
        }

        return axios.get(`${api_url}/jobs`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }


    static getJobDetails ( currentUser, id ) {
        return axios.get(`${api_url}/jobs/${id}`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static addJob ( currentUser, state ) {
        return axios.post(`${api_url}/jobs/newjob`, state, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static editJob ( currentUser, state, id ) {
        return axios.put(`${api_url}/jobs/update/${ id }`, state, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static deleteJob ( currentUser, id ) {
        return axios.delete(`${api_url}/jobs/delete/${id}`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

}

export default Job;
