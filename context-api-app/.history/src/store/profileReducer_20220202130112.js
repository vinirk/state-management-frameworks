export const UPDATE_USERNAME_REQUEST = "UPDATE_USERNAME_REQUEST";
export const UPDATE_USERNAME_SUCCESS = "UPDATE_USERNAME_SUCCESS";

export const initialState = {
    username: "",
    fetching: false,
    message: '',
};

export const updateUsername = (type = UPDATE_USERNAME_REQUEST, username) => ({
    type,
    username,
});

export const profileReducer = (state = initialState, action) => {
    console.log("Reducer", state, action)
    if (action.type === UPDATE_USERNAME_REQUEST) {
        return {
            ...state,
            fetching: true,
        };
    } else if (action.type === UPDATE_USERNAME_SUCCESS) {
        return {
            ...state,
            username: action.username,
            fetching: false,
        };
    }
};