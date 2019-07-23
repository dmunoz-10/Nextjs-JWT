import Router from 'next/router';
import { AUTHENTICATE, DEAUTHENTICATE } from '../types';
import { API } from '../../config';
import { setCookie, removeCookie } from '../../utils/cookie';

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
        fetch(`${API}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
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
        })
        .then(() => {
            Router.push('/signin');
        })
        .catch((err) => {
            throw new Error(err);
        });
    };
};

// Gets token from the API and stores it in the redux store and in cookie
const authenticate = ({ email, password }, type) => {
    if (type !== 'signin') {
        throw new Error('Wrong API call!');
    }

    return (dispatch) => {
        fetch(`${API}/users/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then((response) => response.json()) 
        .then ((data) => {
            setCookie('token', data.auth_token);
            Router.push('/');
            dispatch({type: AUTHENTICATE, payload: data.auth_token});
        })
        .catch((err) => {
            throw new Error(err);
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
