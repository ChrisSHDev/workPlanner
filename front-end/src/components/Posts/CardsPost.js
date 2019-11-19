import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getPosts, getPostsByFollowingUsers } from '../../actions/postActions';
import Post from './Post';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Modals from '../Posts/Modals';

const styles = {
    cardWapper: {
        padding: 5,
        width: '100%'
    },
    cards: {
        height: 'calc((100vh - 240px)/2)',
        width: 'calc(100% - 20px)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        padding: 10,
    },
    cardHeader: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    cardContent: {
        width: '100%',
        display: 'flex'
    },
    cardPlus: {
        width: 62
    },
    cardHeaderLine: {
        textTransform: 'uppercase',
        marginLeft: 10
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
        console.log(this.props.cardType);
        let listType;

        if (list != null) {
            listType = list.filter(li => li.cardType === this.props.cardType);
            console.log(listType);
        }

        const items = listType && listType.map(el => <Post key={el._id} post={el} />)

        return (
            <div className={classes.cardWapper}>
                <Paper className={classes.cards} style={{ backgroundColor: this.props.bgColor }}>
                    <div className={classes.cardHeader}><h3 className={classes.cardHeaderLine}>{this.props.cardType}</h3>
                        <IconButton className={classes.cardPlus} color="inherit">
                            <Modals cardType={this.props.cardType} />
                        </IconButton></div>


                    <div className={classes.cardContent}>
                        {items}
                    </div>
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