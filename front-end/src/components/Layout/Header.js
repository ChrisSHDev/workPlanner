
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVert from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/authActions';
import SearchForm from '../Search/SearchForm';

const styles = {
    root: {
        flexGrow: 1
    },
    logo: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 700
    },
    space: {
        justifyContent: 'space-between'
    },
    buttonSignin: {
        backgroundColor: 'white',
        margin: '0 10px',
        color:  '#84b24c',
        marginLeft: 20,
        '& a': {
            color: '#84b24c'
        }
    },
    loginAnchor: {
        color: 'white',
        fontWeight: 500
    }
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleMenu = (event) => { this.setState({ anchorEl: event.currentTarget }) };

    handleClose = () => { this.setState({ anchorEl: null }) }

    handleLogout() {
        this.setState({ anchorEl: null })
        this.props.logoutUser()
    }
    render() {
        const { classes, isAuthenticated, user } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        const guestLinks = (
            <div>
                <Link to="/login" className={classes.loginAnchor}>Log In</Link>
                <Button className= {classes.buttonSignin}>
                    <Link to="/register">Sign Up</Link>
                </Button>

            </div>
        )

        const authLinks = isAuthenticated && (
            <div>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    color="inherit"
                    onClick={this.handleMenu}
                >
                    <AccountCircleIcon />
                </IconButton>
                <Menu
                    id='menu-appbar'
                    open={open}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>
                        <Link to={`/profile/${user._id}`}>Profile</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to='/' onClick={this.handleLogout}>Logout</Link>
                    </MenuItem>
                </Menu>
            </div>
        )
        return (
            <div className={classes.root}>
                <AppBar style={{ backgroundColor: '#84b24c', boxShadow: 'unset' }}>
                    <Toolbar className={classes.space}>
                        <Link to="/" className={classes.logo}>WorkPlanner</Link>
                        {isAuthenticated ? authLinks : guestLinks}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, { logoutUser })(withStyles(styles)(Header));
