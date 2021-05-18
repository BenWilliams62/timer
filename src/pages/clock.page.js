import React, { useEffect, useState } from "react";
import Number from "./components/number.component";
import { Link } from 'react-router-dom';

export default function Clock()
{
    
    // states

    const [tensMins, setTensMins] = useState(0)
    const [mins, setMins] = useState(0);
    const [tensSecs, setTensSecs] = useState(0);
    const [secs, setSecs] = useState(0);


    // change time to mins and secs
    const changeTime = () => {
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        setTensMins(Math.floor(h/10));
        setMins(h - (10 * tensMins));
        setTensSecs(Math.floor(m/10));
        setSecs(m - (10 * tensSecs));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            changeTime();
        }, 5000);
        return () => clearTimeout(timer);
    });


    return (
        <div className="full-page">
            <div className="grid">
                <Number number={tensMins} column="1"/>
                <Number number={mins} column="2"/>
                <Number number={tensSecs} column="3"/>
                <Number number={secs} column="4"/>

                <Link to="/" className="number col-5 full show-hover">&gt;</Link>
            </div>
        </div>
    )
};