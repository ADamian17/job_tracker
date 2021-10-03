import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/v1';
class Auth {
    static register ( userData ) {
        return axios.post( `${api_url}/auth/register`, userData, {
            withCredentials: true
        });
    }

    static login ( userData ) {
        return axios.post( `${api_url}/auth/login`, userData );
    }
}

export default Auth;
