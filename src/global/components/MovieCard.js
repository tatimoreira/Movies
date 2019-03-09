import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class MovieCard extends React.Component {

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        debugger
        const { classes } = this.props;
       // const movieRender = this.state.movie;
        let data = this.props.data;

        let originalTitle = data.original_title,
            overview = data.overview,
            posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster_path;

        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={posterIMG}
                    title={originalTitle}
                />
                <CardContent>
                    <Typography component="p">
                        When Alita awakens with no memory of who she is in a future world she does not recognize
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

MovieCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

function nestedDataToString(nestedData) {
    let nestedArray = [],
        resultString;
    if (nestedData !== undefined) {
        nestedData.forEach(function (item) {
            nestedArray.push(item.name);
        });
    }
    resultString = nestedArray.join(', '); // array to string
    return resultString;
};

export default withStyles(styles)(MovieCard);