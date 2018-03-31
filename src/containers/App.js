import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import className from 'classnames';

// import Typography from 'material-ui/Typography';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import appRoutes from "../routes/app.js";

import appStyle from '../variables/styles/appStyle';

const switchRoutes = (
    <Switch>
    {appRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleToggle = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { classes, ...rest } = this.props;

        return (
            <div className={classes.root}>
                <Header open={this.state.open} handleToggle={this.handleToggle} />
                <Sidebar 
                open={this.state.open} 
                handleToggle={this.handleToggle} 
                routes={appRoutes}
                color="gray"
                {...rest}
                />

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {/* <BrowserRouter > */}
                    {
                        /* <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography> */
                        switchRoutes
                    }
                    {/* </BrowserRouter> */}
                </main>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(appStyle)(App);