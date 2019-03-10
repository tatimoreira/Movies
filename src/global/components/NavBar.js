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
import DialogTitle from '@material-ui/core/DialogTitle';

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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }
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
                        <Button >Top rated</Button>
                        <Button color="inherit">Movies</Button>
                        <Button color="inherit">Discover</Button>
                        <span className={classes.divider}></span>
                        <Button color="inherit" onClick={this.handleOpen}>Login</Button>
                        <Button variant="contained" className={classes.signIn_button}>Sing up</Button>
                    </Toolbar>
                </AppBar>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" >
                        <img src={logo} alt={"logo"}></img>
                        <img src={movieHunt} alt={"movieHunt"}></img>
                    </DialogTitle>
                    <DialogContent >                   
                        <TextField
                            id="outlined-search"
                            label="User Name"
                            type="text"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                            />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            className={classes.textField}
                            label="Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} >
                            Login
                        </Button>
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