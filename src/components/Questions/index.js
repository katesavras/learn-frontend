import React, {useEffect, useState} from 'react';
import './style.scss';
import {NavLink} from "react-router-dom";
import {Accordion} from "../Accordion";


export const Questions = ({title, content}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://frontend-questions-default-rtdb.firebaseio.com/rus/${content}.json`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

  return (

    <div className="questions">
            <NavLink className="questions__back btn-link" to="/home">Back to Menu</NavLink>
            <h3 className="headline-3 questions__title headline">Interview questions <br/> <span>{title}</span></h3>
            {data.map((i, index) => <Accordion key={index} i={i} index={index + 1}/>)}
    </div>
  );
};
