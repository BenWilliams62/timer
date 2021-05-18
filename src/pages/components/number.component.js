import React from "react";

export default function Number(props)
{
    return (
        <div className={`number col-${props.column} full bg-grey`}>
            {props.number}
        </div>
    )
};