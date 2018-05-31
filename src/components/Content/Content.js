import React from 'react';
import classes from './Content.css';

const content = (props) => (
    <div className={classes.Content}>
        {props.children}
    </div>
)

export default content;