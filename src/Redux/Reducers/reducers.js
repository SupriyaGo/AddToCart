const initialState = {
    cart: 0,
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "CART":
            return {
                ...state,
                cart: action.payload,
            };

        default:
            return state;
    }
};

export default reducers;
