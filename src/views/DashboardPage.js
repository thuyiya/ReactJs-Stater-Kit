import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import {
    withStyles,
    Grid,
    Typography,
    Tabs,
    Tab,
    AppBar,
    Divider,
    ListItem,
    ListItemText,
    Button
} from "material-ui";

import { BasicCard, ItemGrid, SmileBlock, FeedbackQuestionBlock } from '../components';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#74b9ff',
            '#3498db',
            '#2980b9'
        ],
        hoverBackgroundColor: [
            '#dfe6e9',
            '#dfe6e9',
            '#dfe6e9'
        ]
    }]
};

const keyFacts = [
    'your business is in top 10% in your industry',
    'positive feedbacks gone up 10% than last month'
];

const questionData = [
    {
        question: 'How is the big burger ?',
        state: 'Active'
    },
    {
        question: 'How is the new coffee ?',
        state: 'Active'
    },
    {
        question: 'How is the new table arrangement ?',
        state: 'Active'
    },
    {
        question: 'How is the new indian pizza ?',
        state: 'InActive'
    }
];


const styles = theme => ({
    root: {
        backgroundColor: 'transparent',
    },
    appBar: {
        boxShadow: 'none',
        backgroundColor: 'transparent'
    },
    smileBlock: {
        display: 'flex'
    },
    smileTitle: {
        padding: '10px',
        color: 'gray'
    },
    button: {
        margin: theme.spacing.unit,
        float: 'right'
    },
    header: {
        padding: '2px 16px'
    },
    content: {
        padding: '2px 16px'
    },
    questionsContainer: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    question: {
        float: 'left'
    },
    questionStateActive: {
        color: 'green',
        float: 'right'
    },
    questionStateInActive: {
        color: 'red',
        float: 'right'
    },
    questionBox: {
        padding: '20px 10px 20px 10px',
        marginBottom: '20px'
    }
});

const TabContainer = ({ children, dir }) => {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
};

class DashboardPage extends Component {

    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
 
    renderQuestions = (classes) => {
        return questionData.map((item, i) => {
            return (
                <div key={i}>
                    <div className={classes.questionBox}>
                        <Typography className={classes.question}>{item.question}</Typography>
                        <Typography className={item.state == 'Active'? classes.questionStateActive: classes.questionStateInActive}>{item.state}</Typography>
                    </div>
                    <Divider />
                </div>
            );
        });
    }
    

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default" className={classes.appBar}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="OVERVIEW" />
                        <Tab label="QUESTIONS" />
                        <Tab label="DEVICES" />
                        <Tab label="STATISTICS" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <Grid container>
                            <ItemGrid xs={8}>
                                <BasicCard
                                    headerColor="gray"
                                    cardTitle="Responses"
                                    content={
                                        <Grid container>
                                            <ItemGrid md={4}>
                                                <Doughnut
                                                    data={data}
                                                    width={150}
                                                    height={150}
                                                    options={{
                                                        showDatapoints: true,
                                                        maintainAspectRatio: false,
                                                        animation: {
                                                            animateScale: true,
                                                            animateRotate: true
                                                        },
                                                        plugins: {
                                                            datalabels: {
                                                                display: true,
                                                                color: 'black',
                                                                anchor: 'center', //end
                                                                offset: 18,
                                                                font: {
                                                                    size: 11
                                                                }
                                                            }
                                                        },
                                                        legend: {
                                                            position: 'left',
                                                            maxHeight: 60,
                                                            labels: {
                                                                fontSize: 8,
                                                                boxWidth: 10
                                                            }
                                                        }
                                                    }}
                                                />
                                            </ItemGrid>
                                            <ItemGrid md={8} >
                                                <Typography className={classes.smileTitle}> How is the big burger ?</Typography>
                                                <div className={classes.smileBlock}>
                                                    <SmileBlock
                                                        type="lol"
                                                        // horizontal = {true}
                                                        data={{
                                                            percentage: '32%',
                                                            count: 230
                                                        }}
                                                    />
                                                    <SmileBlock
                                                        type="smile"
                                                        data={{
                                                            percentage: '12%',
                                                            count: 76
                                                        }}
                                                    />
                                                    <SmileBlock
                                                        type="love"
                                                        data={{
                                                            percentage: '45%',
                                                            count: 110
                                                        }}
                                                    />
                                                    <SmileBlock
                                                        type="neutral"
                                                        data={{
                                                            percentage: '1%',
                                                            count: 20
                                                        }}
                                                    />
                                                    <SmileBlock
                                                        type="angry"
                                                        data={{
                                                            percentage: '10%',
                                                            count: 48
                                                        }}
                                                    />
                                                </div>

                                            </ItemGrid>
                                        </Grid >
                                    }
                                />

                            </ItemGrid>
                            <ItemGrid xs={4}>
                                <Grid>
                                    <ItemGrid md={12}>
                                        <BasicCard
                                            headerColor="gray"
                                            cardTitle="Key Facts"
                                            content={
                                                <div>
                                                    {
                                                        keyFacts.map((item, i) => (
                                                            <ListItem key={`item${i + 1}`}>
                                                                <ListItemText primary={item} />
                                                            </ListItem>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        />
                                    </ItemGrid>
                                </Grid>
                            </ItemGrid>
                            <ItemGrid xs={8}>
                                <Grid>
                                    <ItemGrid md={12}>
                                        <BasicCard
                                            headerColor="gray"
                                            cardTitle="Active Questions"
                                            content={
                                                <div>
                                                    <FeedbackQuestionBlock />
                                                    <Divider />
                                                    <FeedbackQuestionBlock />
                                                    <Divider />
                                                    <FeedbackQuestionBlock />
                                                </div>
                                            }
                                        />
                                    </ItemGrid>
                                </Grid>
                            </ItemGrid>
                        </Grid>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <BasicCard
                            headerColor="gray"
                            cardTitle="Questions"
                            content={
                                <div className={classes.questionsContainer}>
                                    <header className={classes.header}>
                                        <Button variant="raised" color="primary" className={classes.button}>
                                            New Question
                                         </Button>
                                    </header>
                                    <Divider />
                                    <div className={classes.content}>
                                        {this.renderQuestions(classes)}
                                    </div>
                                </div>
                            }
                        />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>Item DEVICES</TabContainer>
                    <TabContainer dir={theme.direction}>Item STATISTICS</TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(DashboardPage);