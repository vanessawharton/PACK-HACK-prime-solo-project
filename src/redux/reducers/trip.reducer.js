// Used to store trips returned from the server
const tripReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRIPS':
            return action.payload;
        default:
            return state;
    }
};

export default tripReducer;