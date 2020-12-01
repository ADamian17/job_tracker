import axios from 'axios';
import { API_ROUTE_URL } from '../utils/consts';

class User {

    static getUser ( currentUser ) {
        return axios.get(`${API_ROUTE_URL}/users/profile`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static editUser ( currentUser, state ) {
        return axios.put(`${API_ROUTE_URL}/users/update`, state, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }

    static deleteUser ( currentUser ) {
        return axios.delete(`${API_ROUTE_URL}/users/delete`, {
            headers: { authorization: `Bearer ${currentUser}` }
        });
    }


}

export default User;
