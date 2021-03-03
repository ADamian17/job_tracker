import axios from 'axios';
class Auth {

    static register ( userData ) {
        return axios.post( `${process.env.REACT_APP_API_URL}/auth/register`, userData, {
            withCredentials: true
        });
    }

    static login ( userData ) {
        return axios.post( `${process.env.REACT_APP_API_URL}/auth/login`, userData );
    }
}

export default Auth;
