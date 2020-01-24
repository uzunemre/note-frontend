import actions from "../auth/actions";

const initialState = {
    id: 0,
    username: '',
    name: '',
    surname: '',
    token: '',
    isLoggedIn: false
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                isLoggedIn: true
            };
        case actions.SIGNUP:
            return {
                ...state,
                isLoggedIn: true
            };

        case actions.LOGOUT:
            return {
                ...initialState
            };

        default:
            return state;
    }
}
