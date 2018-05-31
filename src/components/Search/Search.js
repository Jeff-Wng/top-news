import React from 'react';
import classes from './Search.css';
import NavItems from '../Nav/SideNav/NavItems/NavItems';

const search = (props) => (
    <div className={classes.Search}>
        <div className={classes.Desktop}>
            <NavItems 
                update={props.updateState}
                headlinesClicked={props.headlinesClicked}
                abcClicked={props.abcClicked}
                bbcClicked={props.bbcClicked}
                cnnClicked={props.cnnClicked}
                espnClicked={props.espnClicked}
                nbcClicked={props.nbcClicked}
                nytClicked={props.nytClicked}
                clicked={props.closed} />
        </div>
        <div className={classes.searchBox}>
            <input type='text' placeholder='Search here' onChange={props.value}/>
            <button onClick={props.enter}>Search</button>
        </div>
    </div>
);

export default search;