import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { withStyles } from '@material-ui/core/styles';
const styles = {
    footer: {
        backgroundColor: 'rgb(132, 178, 76)'
    }
}


const Footer = ({classes}) => {

    return (
        <div>
            <BottomNavigation className={classes.footer} style={{alignItems: 'center'}}>
                <div style={{color: 'white'}}>
                    <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2019 Chris Soohwan Lee
                </div>
            </BottomNavigation>
        </div>
    );
};

export default withStyles(styles)(Footer);