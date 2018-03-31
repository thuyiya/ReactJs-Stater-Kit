import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid } from 'material-ui';
import ChartistGraph from "react-chartist";
import {
    ContentCopy,
    Store,
    InfoOutline,
    Warning,
    DateRange,
    LocalOffer,
    Update,
    Accessibility,
    ArrowUpward,
    AccessTime
} from "material-ui-icons";

import {
    StatsCard,
    ItemGrid,
    ChartCard
} from '../components';

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
} from "../variables/charts";

let simpleLineChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
  };
  

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


class DashboardPage extends Component {
    state = {
        value: 0
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
            <div>
                <Grid container>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={ContentCopy}
                            iconColor="orange"
                            title="Used Space"
                            description="49/50"
                            small="GB"
                            statIcon={Warning}
                            statIconColor="danger"
                            statLink={{ text: "Get More Space...", href: "#pablo" }}
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={Store}
                            iconColor="green"
                            title="Revenue"
                            description="$34,245"
                            statIcon={DateRange}
                            statText="Last 24 Hours"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={InfoOutline}
                            iconColor="red"
                            title="Fixed Issues"
                            description="75"
                            statIcon={LocalOffer}
                            statText="Tracked from Github"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={Accessibility}
                            iconColor="blue"
                            title="Followers"
                            description="+245"
                            statIcon={Update}
                            statText="Just Updated"
                        />
                    </ItemGrid>
                </Grid>

                <Grid container>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={dailySalesChart.data}
                                    type="Line"
                                    options={dailySalesChart.options}
                                    listener={dailySalesChart.animation}
                                />
                            }
                            chartColor="green"
                            title="Daily Sales"
                            text={
                                <span>
                                    <span className={this.props.classes.successText}>
                                        <ArrowUpward className={this.props.classes.upArrowCardCategory}/>
                                        {" "} 55%
                                    </span>
                                    {" "} increase in today sales.
                            </span>
                            }
                            statIcon={AccessTime}
                            statText="updated 4 minutes ago"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={emailsSubscriptionChart.data}
                                    type="Bar"
                                    options={emailsSubscriptionChart.options}
                                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                    listener={emailsSubscriptionChart.animation}
                                />
                            }
                            chartColor="orange"
                            title="Email Subscriptions"
                            text="Last Campaign Performance"
                            statIcon={AccessTime}
                            statText="campaign sent 2 days ago"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={completedTasksChart.data}
                                    type="Line"
                                    options={completedTasksChart.options}
                                    listener={completedTasksChart.animation}
                                />
                            }
                            chartColor="red"
                            title="Completed Tasks"
                            text="Last Campaign Performance"
                            statIcon={AccessTime}
                            statText="campaign sent 2 days ago"
                        />
                    </ItemGrid>
                </Grid>
            </div>
        );
    }
}

DashboardPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardPage);