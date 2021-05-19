import React, { useEffect, useState } from "react";
import Number from "./components/number.component";
import {useParams, useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Timer()
{
    const {work, rest, brief, reps} = useParams();
    
    // states
    const [repetitions, setRepetitions] = useState(reps);

    const [tensMins, setTensMins] = useState(Math.floor(work/10))
    const [mins, setMins] = useState(work - (Math.floor(work/10)*10));
    const [tensSecs, setTensSecs] = useState(0);
    const [secs, setSecs] = useState(0);
    
    const [working, setWorking] = useState("work");

    let history = useHistory();

    // change time to mins and secs
    const changeTime = () => {
        if (secs > 0)
        {
            setSecs(secs - 1);
        }
        else
        {
            setSecs(9);
            if (tensSecs > 0)
            {
                setTensSecs(tensSecs-1);
            }
            else
            {
                setTensSecs(5);
                if (mins > 0)
                {
                    setMins(mins - 1);
                }
                else
                {
                    setMins(9);
                    if (tensMins > 0)
                    {
                        setTensMins(tensMins - 1);
                    }
                    else
                    {
                        if (working === "work")
                        {
                            setWorking("brief");
                            setTensMins(Math.floor(brief/10));
                            setMins(brief - Math.floor((brief/10))*10);
                        }
                        else if (working === "brief")
                        {
                            if (repetitions > 1)
                            {
                                setRepetitions(repetitions - 1);
                                setWorking("rest");
                                setTensMins(Math.floor(rest/10));
                                setMins(rest - Math.floor((rest/10))*10);
                            }
                            else
                            {
                                setWorking("done");
                                history.push("/");
                            };
                        }
                        else if (working === "rest")
                        {
                            setWorking("work")
                            setTensMins(Math.floor(work/10));
                            setMins(work - Math.floor((work/10))*10);
                        };
                        setTensSecs(0);
                        setSecs(0);
                    };
                };
            };
        };
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            changeTime();
        }, 1000);
        return () => clearTimeout(timer);
    });


    return (
        <div className="full-page" id={working}>
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