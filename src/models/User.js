import axios from 'axios';
// import { API_ROUTE_URL } from '../utils/consts';

const api_url = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/v1';
class User {
    static getUser(currentUser) {
        return axios.get(`${api_url}/users/profile`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static editUser(currentUser, state) {
        return axios.put(`${api_url}/users/update`, state, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static addProfileImg( currentUser, state ) {
        return axios.put(
            `${api_url}/users/addprofileimg`,
            state,
            {
                headers: { authorization: `Bearer ${currentUser}` }
            }
        );
    }

    static deleteUser(currentUser) {
        return axios.delete(`${api_url}/users/delete`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }
}

export default User;
