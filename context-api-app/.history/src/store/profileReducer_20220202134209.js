export const UPDATE_USERNAME_REQUEST = "UPDATE_USERNAME_REQUEST";
export const UPDATE_USERNAME_SUCCESS = "UPDATE_USERNAME_SUCCESS";

export const profileReducer = (state, action) => {
    console.log("reducer", action);
    if (action.type === UPDATE_USERNAME_REQUEST) {
        return {
            ...state,
            fetching: true,
        };
    } else if (action.type === UPDATE_USERNAME_SUCCESS) {
        return {
            ...state,
            username: action.payload,
            fetching: false,
            message: "Username updated."
        };
    }
};