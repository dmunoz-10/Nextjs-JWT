import Router from 'next/router';
import { AUTHENTICATE, DEAUTHENTICATE } from '../types';
import { API } from '../../config';
import { setCookie, removeCookie } from '../../utils/cookie';
import axios from 'axios';

// Register a User
const register = ({ first_name,
                    last_name,
                    username,
                    gender,
                    email,
                    password,
                    password_confirmation,
                    birth_date,
                    phone_number }, type) => {
    if (type !== 'signup') {
        throw new Error('Wrong API call!');
    }

    return () => {
        axios.post(`${API}/users`, {
            first_name,
            last_name,
            username,
            gender,
            email,
            password,
            password_confirmation,
            birth_date,
            phone_number
        })
        .then(() => {
            Router.push('/signin');
        })
        .catch((error) => {
            console.log(error.response);
            switch (error.response.status) {
                case 422:
                    let message = '';
                    for (const [key, value] of Object.entries(error.response.data)) {
                        message += `${key.toUpperCase()}: ${value.join(', ')}\n`
                    }
                    alert(message);
                    break;
                case 401:
                    alert(error.response.data);
                    break;
                case 500:
                    alert('Interval server error! Reload the page and try again!');
                    break;
                default:
                    alert(error.response.data);
                    break;
            }
        });
    };
};

// Gets token from the API and stores it in the redux store and in cookie
const authenticate = ({ email, password }, type) => {
    if (type !== 'signin') {
        throw new Error('Wrong API call!');
    }

    return (dispatch) => {
        axios.post(`${API}/users/authenticate`, {
            email,
            password
        })
        .then ((response) => {
            setCookie('token', response.data.auth_token);
            Router.push('/me');
            dispatch({type: AUTHENTICATE, payload: response.data.auth_token});
        })
        .catch((error) => {
            switch (error.response.status) {
                case 422:
                    let message = '';
                    for (const [key, value] of Object.entries(error.response.data)) {
                        message += `${key.toUpperCase()}: ${value.join(', ')}\n`
                    }
                    alert(message);
                    break;
                case 401:
                    alert(error.response.data.error.user_authentication);
                    break;
                case 500:
                    alert('Interval server error! Reload the page and try again!');
                    break;
                default:
                    alert(error.response.data);
                    break;
            }
        });
    };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (token) => {
    return (dispatch) => {
        dispatch({ type: AUTHENTICATE, payload: token });
    };
};

// removing the token
const deauthenticate = () => {
    return (dispatch) => {
        removeCookie('token');
        Router.push('/');
        dispatch({ type: DEAUTHENTICATE });
    };
};

export default {
    register,
    authenticate,
    reauthenticate,
    deauthenticate,
};
