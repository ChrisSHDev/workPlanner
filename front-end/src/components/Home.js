import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListPost from './Posts/ListPost';
import Login from './Auth/Login';
import IntroPage from './introPage';


class Home extends Component{

    render() {
        const { isAuthenticated } = this.props;
        console.log(isAuthenticated);

        return(
            <div>
             { isAuthenticated ? <ListPost /> : <IntroPage /> }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home);