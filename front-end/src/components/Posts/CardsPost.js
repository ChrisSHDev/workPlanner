import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getPosts, getPostsByFollowingUsers } from '../../actions/postActions';
import Post from './Post';

const styles = {
    cardWapper: {
        padding: 5,
        width: '100%'
    },
    cards: {
        height: 'calc((100vh - 240px)/2)',
        width: 'calc(100% - 20px)',
        display: 'flex',
        flexWrap:'wrap',
        justifyContent:'baseline',
        overflow: 'auto',
        padding: 10,
        alignItems: 'flex-start'
    }
}

class CardsPost extends Component {

    componentDidMount() {
        this.props.getPosts();

    }

    render() {
    
    const { classes } = this.props;
    const { list } = this.props;
    console.log(list);

    let listType;

    if(list != null){
        listType = list.filter(li => li.cardType === this.props.cardType);
        console.log(listType);
    }

    const items = listType && listType.map(el => <Post key={el._id} post={el} />)
        return (
            <div className = { classes.cardWapper }>
                <Paper className = { classes.cards } style={{ backgroundColor: this.props.bgColor }}>
                    {items}
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        list: state.post.list,
        loading: state.post.loading
    })

export default connect(mapStateToProps, { getPosts, getPostsByFollowingUsers })(withStyles(styles)(CardsPost));