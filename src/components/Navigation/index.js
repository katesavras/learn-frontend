import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.scss';

export const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink className="nav__link" to="/html">HTML</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/css">CSS</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/js">JS</NavLink>
                </li>
            </ul>
        </nav>
    );
};
