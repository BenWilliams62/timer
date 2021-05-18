import React from "react";

export default function Number(props)
{
    return (
        <input type="number" className="number box" id={props.box}>
            <h1 className="fs-large">
                {props.num}
            </h1>
        </input>
    )
};