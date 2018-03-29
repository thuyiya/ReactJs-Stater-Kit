import React from "react";
import PropTypes from "prop-types";

import { Menu } from "material-ui-icons";
import {
    withStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from "material-ui";

import headerStyle from '../variables/styles/headerStyle';


import classNames from "classnames";

function Header({ ...props }) {

    const { classes, open, handleToggle } = props;

    return (
        <AppBar
            position="absolute"
            className={classNames(classes.appBar, open && classes.appBarShift)}
        >
            <Toolbar disableGutters={!open}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleToggle}
                    className={classNames(classes.menuButton, open && classes.hide)}
                >
                    <Menu />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap>
                    App Name
              </Typography>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default withStyles(headerStyle)(Header);
