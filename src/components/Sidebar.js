import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import {
    withStyles,
    Drawer,
    IconButton,
    List,
    Divider,
    Typography,
    ListItem,
    ListItemIcon,
    ListItemText
} from "material-ui";

import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import sidebarStyle from '../variables/styles/sidebarStyle';

const Sidebar = ({ ...props }) => {

    function activeRoute(routeName) {
        return props.location.pathname.indexOf(routeName) > -1 ? true : false;
      }

    const { classes, open, routes, color, handleToggle } = props;

    const links = (
        <List>
            {routes.map((prop, key) => {
                if (prop.redirect) return null;

                const listItemClasses = classNames({ [" " + classes[color]]: activeRoute(prop.path) });
                const whiteFontClasses = classNames({ [" " + classes.whiteFont]: activeRoute(prop.path) });

                return (
                    <NavLink
                        to={prop.path}
                        className={classes.item}
                        activeClassName="active"
                        key={key}
                    >
                        <ListItem button className={classes.itemLink + listItemClasses}>
                            <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                                <prop.icon />
                            </ListItemIcon>
                            <ListItemText primary={prop.sidebarName} />
                        </ListItem>
                    </NavLink>
                );
            })}
        </List>
    );

    return (
        <Drawer
            variant="permanent"
            classes={{ paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose) }}
            open={open}
        >
            <div className={classes.toolbar}>
                <Typography variant="subheading" color="inherit" noWrap align="left"> hide </Typography>
                <IconButton onClick={handleToggle}> <ChevronLeftIcon /> </IconButton>
            </div>
            <Divider />
            {links}
            <Divider />
        </Drawer>
    );
};

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(sidebarStyle)(Sidebar);