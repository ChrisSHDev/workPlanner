import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    cardWapper: {
        padding: 5,
        width: '100%'
    },
    cards: {
        height: 'calc((100vh - 200px)/2)',
        width: '100%'
    }
}

class CardsPost extends Component {
    render() {
        console.log(this.props.bgColor);
    const { classes } = this.props;
        return (
            <div className = { classes.cardWapper }>
                <Paper className = { classes.cards } style={{ backgroundColor: this.props.bgColor }}>

                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(CardsPost);