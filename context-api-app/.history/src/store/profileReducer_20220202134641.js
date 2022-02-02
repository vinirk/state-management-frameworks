export const UPDATE_USERNAME_REQUEST = "UPDATE_USERNAME_REQUEST";
export const UPDATE_USERNAME_SUCCESS = "UPDATE_USERNAME_SUCCESS";

export const profileReducer = (state, action) => {
    console.log("reducer", action);
    switch (action.type) {
        case UPDATE_USERNAME_REQUEST:
            return {
                ...state,
                fetching: true,
            };
            break;
        case UPDATE_USERNAME_SUCCESS:
            return {
                ...state,
                username: action.username,
                fetching: false,
                message: action.message,
            };
        default:
            break;
    }
};