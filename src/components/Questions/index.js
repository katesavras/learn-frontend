import React, {useEffect, useState} from 'react';
import './style.scss';
import {NavLink} from "react-router-dom";
import {Accordion} from "../Accordion";


export const Questions = ({title, content}) => {
    // const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://frontend-questions-default-rtdb.firebaseio.com/rus/${content}.json`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

  return (

    <div className="questions">
            <NavLink className="questions__back" to="/home">Back to Menu</NavLink>
            <h2 className="questions__title">Interview questions <br/> <span>{title}</span></h2>
            {data.map((i, index) => <Accordion key={index} i={i} index={index + 1}/>)}
    </div>
  );
};
