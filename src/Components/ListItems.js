import React from "react";
import List from "../Containers/List/List";
import classes from "./ListItems.module.css";

const ListItems = (props) => {
    const data = [
        { id: 1, name: "Mobile Phone" },
        { id: 2, name: "Laptop" },
        { id: 3, name: "Tablet" },
    ];

    return (
        <ul className={classes.listContainer}>
            {data.map((item, i) => (
                <li className={classes.list}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <button onClick={props.addCartItem}>+</button>
                </li>
            ))}
        </ul>
    );
};

export default ListItems;
