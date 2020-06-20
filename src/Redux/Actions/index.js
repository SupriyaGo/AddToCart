export const addToCart = (val) => {
    return {
        type: "CART",
        payload: val,
    };
};
