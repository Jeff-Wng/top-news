import React from 'react';
import classes from './NavItems.css';

const navItems = (props) => (
    <React.Fragment>
        <ul className={classes.NavItems}>
            <li onClick={() => {props.headlinesClicked(); props.clicked()}}>Top Headlines</li>
            <hr />
            <li onClick={() => {props.abcClicked(); props.clicked()}}>ABC News</li>
            <hr />
            <li onClick={() => {props.bbcClicked(); props.clicked()}}>BBC</li>
            <hr />
            <li onClick={() => {props.cnnClicked(); props.clicked()}}>CNN</li>
            <hr />
            <li onClick={() => {props.espnClicked(); props.clicked()}}>ESPN</li>
            <hr />
            <li onClick={() => {props.nbcClicked(); props.clicked()}}>NBC News</li>
            <hr />
            <li onClick={() => {props.nytClicked(); props.clicked()}}>New York Times</li>
            <hr />
        </ul>
    </React.Fragment>
);

export default navItems;