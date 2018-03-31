import React, { Component } from 'react';
import PropTypes from "prop-types";
import MenuIcon from 'material-ui-icons/Menu';
import ExitToApp from 'material-ui-icons/ExitToApp';
import Menu, { MenuItem } from 'material-ui/Menu';

import {
    withStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from "material-ui";

import headerStyle from '../variables/styles/headerStyle';


import classNames from "classnames";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: true,
            anchorEl: null,
        };
    }

    handleChange = (event, checked) => {
        this.setState({ auth: checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        const { classes, open, handleToggle } = this.props;
        const { auth, anchorEl } = this.state;
        const openmenu = Boolean(anchorEl);
        return (
            <AppBar
                position="absolute"
                className={classNames(classes.appBar, open && classes.appBarShift)}
                color="default"
            >
                <Toolbar disableGutters={!open}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleToggle}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        noWrap
                        className={classes.flex}
                    >
                        App Name
                    </Typography>

                    {auth && (
                        <div>
                            <IconButton
                                aria-owns={openmenu ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <ExitToApp />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={openmenu}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default withStyles(headerStyle)(Header);
