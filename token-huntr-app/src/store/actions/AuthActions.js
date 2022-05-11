import { AUTHENTICATED, NOT_AUTHENTICATED } from "../types";

const setToken = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('lastLoginTime', new Date(Date.now()).getTime())
};

export const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const timeAllowed = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem('lastLoginTime');
    if (timeSinceLastLogin < timeAllowed) {
        return localStorage.getItem('token');
    }
};

const deleteToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('lastLoginTime');
}

export const registerUser = (credentials) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: credentials })
        }).then((res) => {
            if (res.ok) {
                setToken(res.headers.get('Authorization'));
                return res
                    .json()
                    .then((userJson) =>
                        dispatch({ type: AUTHENTICATED, payload: userJson })
                    );
            } else {
                return res.json().then((errors) => {
                    dispatch({ type: NOT_AUTHENTICATED });
                    return Promise.reject(errors);
                });
            }
        });
    };
};

export const loginUser = (credentials) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: credentials }),
        }).then((res) => {
            if (res.ok) {
                setToken(res.headers.get('Authorization'));
                return res
                    .json()
                    .then((userJson) =>
                        dispatch({ type: AUTHENTICATED, payload: userJson })
                    );
            } else {
                return res.json().then((errors) => {
                    dispatch({ type: NOT_AUTHENTICATED });
                    return Promise.reject(errors);
                });
            }
        });
    };
};