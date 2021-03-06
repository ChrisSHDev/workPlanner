import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions'

const styles = {
    paper: {
        padding: 20
    },
    textField: {
        width: '100%'
    },
    button: {
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#3f51b5',
        color: 'white',
        '&:hover' : {
            color: '#000000'
        }
    }
}


class AddPost extends Component {
    state = {
        text: ''
    }

    handleChangeText = (e) => {
        this.setState({ 
            text : e.target.value
        });
    }

    handleChangeTitle = (e) => {
        this.setState({ 
            title : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const postData = {
            text: this.state.text,
            cardType: this.props.cardType,
            title: this.state.title
        }

        this.props.addPost(postData);
        this.setState({ text: ''});
        console.log(postData);
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={ classes.paper }>
                <TextField 
                    required
                    multiline
                    rowMax="4"
                    label="Please enter your title."
                    className={ classes.textField }
                    onChange={ this.handleChangeTitle }
                    value={ this.state.title }
                    helperText={errors.required ? errors.password : ''}
                    error={errors.required ? true : false}
                />
                <TextField 
                    multiline
                    rowMax="4"
                    label="Please enter your message."
                    className={ classes.textField }
                    onChange={ this.handleChangeText }
                    value={ this.state.text }
                />
                <Button 
                    variant="outlined" 
                    className = { classes.button}
                    onClick={ this.handleSubmit }
                    >
                    Send
                </Button>
            </Paper>
        )
    }
}



export default connect(null, { addPost })(withStyles(styles)(AddPost));