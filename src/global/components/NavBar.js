import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/Path.png'
import movieHunt from '../images/MovieHunt.png'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    divider: {
        borderRight: '0.02em solid #393A48',
        padding: '1.9em'
    },
    signIn_button: {
        borderRadius: '16px',
        color: '#2E74C4'
    },
    navBar: {

    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

class MovieAppBar extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" className={classes.navBar}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} alt={"logo"}></img>
                        <img src={movieHunt} alt={"movieHunt"}></img>
                        <Typography variant="h6" color="inherit" className={classes.grow}></Typography>
                        <Button color="inherit">Top rated</Button>
                        <Button color="inherit">Movies</Button>
                        <Button color="inherit">Discover</Button>
                        <span className={classes.divider}></span>
                        <Button color="inherit" onClick={this.handleOpen}>Login</Button>
                        <Button variant="contained" className={classes.signIn_button}>Sing up</Button>
                    </Toolbar>
                </AppBar>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="userName"
                            label="User Name"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Login
                        </Button>
                        <span>Dont have account?</span>
                        <span onClick={this.handleClose} >
                            subscribe
                        </span>
                        <span onClick={this.handleClose} >
                            Recover password
                        </span>
                    </DialogActions>
                </Dialog>
            </div>

        );
    }

}

MovieAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MovieAppBar);