import React from 'react';
import classes from './Articles.css';

const articles = (props) => (
    <div className={classes.Articles}>
        <img src={props.img} alt='article img' />
        <div className={classes.Overlay}>
            <a href={props.site}>{props.title}</a>
            <p>{props.source}</p>
        </div>
    </div>
);

export default articles;