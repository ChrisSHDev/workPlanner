import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { getUserProfile } from '../../actions/profileActions';
import { deletePost, getPosts } from '../../actions/postActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddIcon from '@material-ui/icons/Add';
import AddPost from '../Posts/AddPost';

const styles = {
    paper: {
        padding: 10,
        display: 'flex',
        margin: '1.5%',
        width: '42.5%',
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
        width: '100%'
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


class Post extends Component {


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
        const { classes, post, user } = this.props
        let deleteBtn;

        if (post.user.login === user.login) {
            deleteBtn = (
                <IconButton className={classes.button} aria-label="delete" onClick={this.handleRemove} >
                    <DeleteIcon />
                </IconButton>
            );
        } else {
            deleteBtn = (<div></div>);
        }

        return (
            <Paper className={classes.paper}>
                <div className={classes.contentsBlock}>
                    <div className={classes.postHeader}>
                        <span className={classes.time}>{(new Date(post.createdAt)).toDateString()}</span>{deleteBtn}
                    </div>
                    {post.title}
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
    })(withRouter(withStyles(styles)(Post)));