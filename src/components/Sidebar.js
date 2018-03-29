import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import {
    withStyles,
    Drawer,
    IconButton,
    List,
    Divider,
    Typography
} from "material-ui";

import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

import { mailFolderListItems, otherMailFolderListItems } from '../data';
import sidebarStyle from '../variables/styles/sidebarStyle';

const Sidebar = ({ ...props }) => {

    const { classes, open, handleToggle } = props;

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbar}>
            <Typography variant="subheading" color="inherit" noWrap align="left">
                    hide
              </Typography>
                <IconButton onClick={handleToggle}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>{mailFolderListItems}</List>
            <Divider />
            <List>{otherMailFolderListItems}</List>
        </Drawer>
    );
};

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
