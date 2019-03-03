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


const styles = {
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
    divider:{
        borderRight: '0.02em solid #393A48', 
        padding: '1.9em'
    },
    signIn_button:{
        borderRadius: '16px',
        color: '#2E74C4'
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.transparentBar}>
            <AppBar position="static" >
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
                    <Button color="inherit" >Login</Button>
                    <Button variant="contained" className={classes.signIn_button}>Sing up</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);