// Used to store trips returned from the server
const tripReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRIPS':
            return action.payload;
        case 'ADD_TRIP':
            return [...state, action.payload];
        case 'DELETE_TRIP':
            state = state.filter((trip) => {return trip.id != action.payload})
            return state;
        default:
            return state;
    }
};

export default tripReducer;