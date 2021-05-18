import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Number from "./components/number.component";
import { Helmet } from 'react-helmet'

export default function Home()
{
    const [work, setWork] = useState(25);
    const [rest, setRest] = useState(5);
    const [reps, setReps] = useState(4);
    const [brief, setBrief] = useState(5);

    const handleWork = (direction) => {
        if (direction === "+" && work < 99)
        {
            setWork(work + 1);
        }
        else if ( direction === "-" && work > 1)
        {
            setWork(work - 1);
        };
    };

    const handleRest = (direction) => {
        if (direction === "+" && rest < 99)
        {
            setRest(rest + 1);
        }
        else if ( direction === "-" && rest > 1)
        {
            setRest(rest - 1);
        };
    };

    const handleReps = (direction) => {
        if (direction === "+" && reps < 10)
        {
            setReps(reps + 1);
        }
        else if ( direction === "-" && reps > 1)
        {
            setReps(reps - 1);
        };
    };

    const handleBrief = (direction) => {
        if (direction === "+" && brief < 9)
        {
            setBrief(brief + 1);
        }
        else if ( direction === "-" && brief > 1)
        {
            setBrief(brief - 1);
        };
    };

    return (
        <div className="full-page">
            <Helmet>
                <title>Work timer</title>
            </Helmet>
            <div className="grid">

                <div className="heading col-1 full">Work</div>
                <Number column="1" number={work}/>
                <div className="button col-1-1 full" onClick={() => handleWork("-")}>-</div>
                <div className="button col-1-2 full" onClick={() => handleWork("+")}>+</div>

                <div className="heading col-2 full">Rest</div>
                <Number column="2" number={rest}/>
                <div className="button col-2-1 full" onClick={() => handleRest("-")}>-</div>
                <div className="button col-2-2 full" onClick={() => handleRest("+")}>+</div>

                <div className="heading col-3 full">Reps</div>
                <Number column="3" number={reps}/>
                <div className="button col-3-1 full" onClick={() => handleReps("-")}>-</div>
                <div className="button col-3-2 full" onClick={() => handleReps("+")}>+</div>

                <div className="heading col-4 full">Debrief</div>
                <Number column="4" number={brief}/>
                <div className="button col-4-1 full" onClick={() => handleBrief("-")}>-</div>
                <div className="button col-4-2 full" onClick={() => handleBrief("+")}>+</div>


                <Link to={`/timer/${work}/${rest}/${brief}/${reps}`} className="number col-5 full show-hover">&gt;</Link>
                <Link to="/clock" className="number col-0 full show-hover">&lt;</Link>

            </div>
            
        </div>
    )
}