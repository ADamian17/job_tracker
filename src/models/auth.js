import axios from 'axios';
import { API_ROUTE_URL } from '../utils/consts';

class Auth {

    static register ( userData ) {
        return axios.post( `${API_ROUTE_URL}/auth/register`, userData, {
            withCredentials: true
        });
    }

    static login ( userData ) {
        return axios.post( `${API_ROUTE_URL}/auth/login`, userData );
    }
}

export default Auth;