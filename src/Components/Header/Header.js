import React from "react";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
    const cartCount = useSelector((state) => state.cart.cart);

    return (
        <div className={classes.header}>
            <p>Company name</p>
            <div className={classes.cartContainer}>
                <p>Cart</p>
                <p className={classes.cartNo}>{cartCount}</p>
            </div>
        </div>
    );
};

export default Header;
