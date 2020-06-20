import React, { useEffect } from "react";
import classes from "./List.module.css";
import ListItems from "./../../Components/ListItems";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./../../Redux/Actions";

const List = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector((state) => state.cart.cart);

    useEffect(() => {
        let count = localStorage.getItem("count");
        count = JSON.parse(count);
        console.log(count);

        if (count != 0) {
            dispatch(addToCart(count));
        }
    }, []);

    const addCart = () => {
        dispatch(addToCart(cartCount + 1));
        localStorage.setItem("count", JSON.stringify(cartCount + 1));
    };

    return (
        <div>
            <p>List Items</p>
            <ListItems addCartItem={addCart} />
        </div>
    );
};

export default List;
