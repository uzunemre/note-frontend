import * as apiCalls from '../../api/apiCalls';

const authAction = {
    LOGIN: 'LOGIN',
    SIGNUP: 'SIGNUP',
    LOGOUT: 'LOGOUT',

    login: (credentials) => {
        return function (dispatch) {
            return apiCalls.login(credentials).then((response) => {
                dispatch({
                    type: authAction.LOGIN,
                    ...response.data
                });
                return response;
            });
        };
    },

    signUp: (user) => {
        return function (dispatch) {
            return apiCalls.signup(user).then((response) => {
                dispatch({
                    type: authAction.SIGNUP,
                    ...response.data
                });
                return response;
            });
        };
    }
};

export default authAction;
