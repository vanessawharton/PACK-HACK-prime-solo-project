// Used to store trips returned from the server
const packingListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PACKING_LISTS':
            return action.payload;
        case 'ADD_PACKING_LIST':
            return [...state, action.payload];
        case 'DELETE_PACKING_LIST':
            state = state.filter((trip) => {return packingList.id != action.payload})
            return state;
        default:
            return state;
    }
};

export default packingListReducer;