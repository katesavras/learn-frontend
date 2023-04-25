import React from 'react';
import './style.scss';
import {NavLink} from "react-router-dom";


export const Questions = ({title, content}) => {
    const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  return (

    <div className="questions">
            <NavLink className="questions__back" to="/home">Back to Menu</NavLink>
            <h2 className="questions__title">Interview questions <br/> <span className="questions__title_violet">{title}</span></h2>
            {questions.map(i => <div className="questions__content"><p>{i}</p></div>)}
    </div>
  );
};
