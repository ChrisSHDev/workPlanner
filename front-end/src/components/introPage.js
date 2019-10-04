import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    hero: {
        display: 'flex'
    },
    leftText: {
        width: '50%',
        '& h1': {
            fontSize: 48,
            color: 'white',
            margin: 0,
            lineHeight: '55px'
        }
    },
    rightImage: {
        width: '50%',
        '& img': {
            maxWidth: '100%'
        }
    },
    heroDesc: {
        fontSize: '1.5625rem',
        color: 'white'
    },
    imgWrapper: {
        '& img': {
            maxWidth: '100%'
        }
    },
    wrapper: {
        width: '1024px',
        margin: '0 auto'
    },
    contentsHero: {
        backgroundColor: 'rgb(132, 178, 76)',
        paddingTop: 100
    },
    contentsExplanation: {
        paddingTop: 50,
        '& h2': {
            textAlign: 'center',
            fontSize: '2.1875rem',
            color: '#172B4D'
        }
    },
    Matrix: {
        display: 'flex',
        '& .imgWrapper': {
            width: '50%'
        }
    },
    contentsMatrix: {
        paddingTop: 50,
        '& h3': {
            fontSize: '2rem',
            color: '#172B4D',
            margin: 0
        },
        paddingBottom: 80
    },
    columnRight: {
        width: '75%',
        paddingLeft: '55px'
    }
}

const introPage = ({ classes }) => {

    return (
        <div>
            <div className={classes.contentsHero}>
                <div className={classes.wrapper}>
                    <div className={classes.hero}>
                        <div className={classes.leftText}>
                            <h1>
                                WorkPlanner lets you work more efficiently and get more done.
                    </h1>
                            <p className={classes.heroDesc}>
                                WorkPlanner's matrix enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.
                    </p>
                        </div>
                        <div className={classes.rightImage}>
                            <img src="images/scheduller.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.contentsExplanation}>
                <div className={classes.wrapper}>
                    <div className={classes.explanation}>
                        <div className={classes.column}>
                            <h2>
                                What is important is seldom urgent and what is urgent is seldom important.
                        </h2>
                        </div>
                        <div className={classes.imgWrapper}>
                            <img src="images/mainHero.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.contentsMatrix}>
                <div className={classes.wrapper}>
                    <div className={classes.Matrix}>
                        <div className={classes.imgWrapper}>
                            <img src="images/tasks-priority.png" />
                        </div>
                        <div className={classes.columnRight}>
                            <h3>
                                Set your priorities straight. Don’t let your Important to-dos for later. Plan them instead.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(introPage);
