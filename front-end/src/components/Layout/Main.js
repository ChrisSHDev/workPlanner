import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Footer from './Footer';


import { connect } from 'react-redux';
import { getbackgroundImage } from '../../actions/apiActions';
import { withStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';


const styles = {
    mains: {
        backgroundSize: '100%',
        backgroundPosition: 'center center',
        minHeight: '100vh'
    },
    container: {

    }
}

class Main extends Component {

    componentDidMount() {
        this.props.getbackgroundImage();
        console.log(this.props.bgsource);
    }


    render() {
        const { isAuthenticated } = this.props;
        console.log(isAuthenticated);
        const { classes } = this.props;
        let divStyle;

        divStyle = {
            backgroundImage: `url(${isAuthenticated ? this.props.bgsource : 'none'})`
        };
        if(isAuthenticated){
        return (
            
            <div style={divStyle} className={classes.mains}> 
                <Header />
                <Grid className={classes.container} container justify="center">
                    <Grid item xs={12} sm={6} style={{ marginTop: 30 }}>
                        {this.props.children}
                    </Grid>
                </Grid>
                <Footer />
            </div>
        )
        }else {
            return(
                <div style={divStyle} className={classes.mains}> 
                <Header />
                <Grid>
                        {this.props.children}
                </Grid>
                <Footer />
                </div>
                
            )
        }
    }
}

const mapStateToProps = (state) => (
    {
        bgsource: state.apibg.bgsource,
        isAuthenticated: !!state.auth.isAuthenticated
    }
)

export default connect(mapStateToProps, { getbackgroundImage })(withStyles(styles)(Main));