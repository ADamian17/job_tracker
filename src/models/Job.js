import axios from 'axios';
import { API_ROUTE_URL } from '../utils/consts';

class Job {

    static getJobData ( currentUser ) {
        return axios.get(`${API_ROUTE_URL}/jobs`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static addJob ( currentUser, state ) {
        return axios.post(`${API_ROUTE_URL}/jobs/newjob`, state, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static editJob ( currentUser, state, id ) {
        return axios.put(`${API_ROUTE_URL}/jobs/update/${ id }`, state, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static deleteJob ( currentUser, id ) {
        return axios.delete(`${API_ROUTE_URL}/jobs/delete/${id}`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }


}

export default Job;
