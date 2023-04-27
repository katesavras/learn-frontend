import React, {useEffect, useState} from 'react';
import './style.scss';
import {NavLink} from "react-router-dom";
import {Accordion} from "../Accordion";
import {TbFaceIdError} from 'react-icons/tb'


export const Questions = ({title, content}) => {
    const [data, setData] = useState([]);
    const [isMistake, setIsMistake] = useState(false);

    useEffect(() => {
        fetch(`https://frontend-questions-default-rtdb.firebaseio.com/rus/${content}.json`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(() => setIsMistake(true));
    }, [content]);

    return (

        <div className="questions">
            <NavLink className="questions__back btn-link" to="/home">Back to Menu</NavLink>
            <h3 className="headline-3 questions__title headline">Interview questions <br/> <span>{title}</span></h3>
            { isMistake
                ? <h4 className="questions__error">Yooops, something went wrong <TbFaceIdError/></h4>
                : data.map((i, index) => <Accordion key={index} i={i} index={index + 1}/>)
            }
        </div>
    );
};
