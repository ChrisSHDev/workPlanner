import React, { Component } from 'react';
import AddPost from './AddPost';
import Post from './Post';
import { connect } from 'react-redux';
import { getPosts, getPostsByFollowingUsers } from '../../actions/postActions';
import LoadingPosts from './LoadingPost';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import CardsPost from './CardsPost';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    cardsRow: {
        display: 'flex'
    }
}

class ListPost extends Component {
    state = {
        allPosts: false
    }
    componentDidMount() {
        this.props.getPosts()
    }

    handleChange = (event) => {
        this.setState({
            allPosts: event.target.checked
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.allPosts !== this.state.allPosts) {
            this.state.allPosts ? this.props.getPostsByFollowingUsers() : this.props.getPosts()
        }
    }

    render() {
        const { classes } = this.props;
        const { list, loading } = this.props;
        const { allPosts } = this.state;
        console.log(list);
        const items = list && list.map(el => <Post key={el._id} post={el} />)
        return (
            <div style={{ minHeight: 'calc(100vh - 200px)', marginTop: '94px', marginBottom: '30px' }}>
                <div className= { classes.cardsRow } >
                    <CardsPost bgColor= "#f4b9bc" cardType="do" />
                    <CardsPost bgColor= "#c8e6ca" cardType="decide"/>
                </div>
                <div className= { classes.cardsRow }>
                    <CardsPost bgColor= "#fee9b4" cardType="delegate"/>
                    <CardsPost bgColor= "#bbdef6" cardType="eliminate"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        list: state.post.list,
        loading: state.post.loading
    })

export default connect(mapStateToProps, { getPosts, getPostsByFollowingUsers })(withStyles(styles)(ListPost));