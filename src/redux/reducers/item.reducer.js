// Used to store items returned from the server
const itemReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload;
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'DELETE_ITEM':
            state = state.filter((item) => {return item.id != action.payload})
            return state;
        default:
            return state;
    }
};

export default itemReducer;