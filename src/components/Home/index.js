import React from 'react';
import './style.scss';
import {Navigation} from "../Navigation";


export const Home = () => {
    return (
        <div className="home">
            <h1 className="home__title"> Frontend <br/>Interview Preparation</h1>
            <Navigation/>
        </div>
    );
};
