import axios from 'axios';
// import { API_ROUTE_URL } from '../utils/consts';

class User {
    static getUser ( currentUser ) {
        return axios.get(`${process.env.REACT_APP_API_URL}/users/profile`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static editUser ( currentUser, state ) {
        return axios.put(`${process.env.REACT_APP_API_URL}/users/update`, state, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static deleteUser ( currentUser ) {
        return axios.delete(`${process.env.REACT_APP_API_URL}/users/delete`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

}

export default User;
