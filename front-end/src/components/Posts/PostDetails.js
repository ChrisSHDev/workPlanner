import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { getUserProfile } from '../../actions/profileActions';
import { deletePost, getPosts } from '../../actions/postActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const styles = {
    paper: {
        padding: 10,
        display: 'flex',
        width: 500,
        minHeight: 20
    },
    avatar: {
        minWidth: 10,
        margin: '4px 10px 4px 4px'

    },
    login: {
        marginBottom: 5,
        marginTop: 5
    },
    time: {
        color: '#bbb',
        fontSize: 14
    },
    btnDelete: {

    },
    contentsBlock: {
        width: '100%',
        position: 'relative'
    },
    btnBlock: {
        display: 'flex',
        alignItems: 'center'
    },
    postHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& button': {
            padding: 0
        }
    }
}


class PostDetails extends Component {


    handleRemove = () => {
        const { history } = this.props;
        console.log(this.props.post._id);
        this.props.deletePost(this.props.post._id);
        this.props.getPosts();
        if (this.props.getPosts() === undefined) {
            this.props.getPosts();
            history.push('/');
        } else {
            history.push('/');
        }
    }


    render() {
        const { classes, post, user } = this.props;

        return (
            <Paper className={classes.paper}>
                <div className={classes.contentsBlock}>
                    <div className={classes.postHeader}>
                        <span className={classes.time}>{(new Date(post.createdAt)).toDateString()}</span>
                    </div>
                    <div>
                        <h2>{post.title}</h2>
                        <h3>Description</h3>
                        {post.text}
                    </div>
                </div>
            </Paper>

        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    list: state.post.list
})


export default connect(mapStateToProps,
    {
        getUserProfile,
        deletePost,
        getPosts
    })(withRouter(withStyles(styles)(PostDetails)));