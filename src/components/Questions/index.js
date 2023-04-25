import React from 'react';
import './style.scss';
import {NavLink} from "react-router-dom";


export const Questions = ({title, content}) => {
  return (
    <div className="questions">
            <NavLink className="questions__back" to="/home">Back to Menu</NavLink>
            <h2 className="questions__title">Interview questions <br/> <span className="questions__title_violet">{title}</span></h2>
            <div className="questions__content">
                <p>{content}</p>
            </div>
    </div>
  );
};
