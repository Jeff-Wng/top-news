import React from 'react';
import classes from './Nav.css';

const nav = (props) => (
    <header>
        <React.Fragment>
            <div className={classes.Nav}>
                <div className={classes.SideNavToggle} onClick={props.clicked}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1>News</h1>
            </div>
        </React.Fragment>
    </header>
);

export default nav;