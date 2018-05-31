import React from 'react';
import classes from './SideNav.css';
import NavItems from './NavItems/NavItems';
import Backdrop from '../../Backdrop/Backdrop';

const sideNav = (props) => {
    let attachedClasses = [classes.SideNav, classes.Close];

    if(props.open) {
        attachedClasses = [classes.SideNav, classes.Open];
    }

    return(
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <h1>News</h1>
                <hr />
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
        </React.Fragment>
    )
}

export default sideNav;