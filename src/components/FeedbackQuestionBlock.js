import React from 'react';
import {
    withStyles,
    Typography,
    Grid
} from "material-ui";
import PropTypes from "prop-types";
import cx from "classnames";

import SmileBlock from './SmileBlock';

import feedbackQuestionBlockStyle from "../variables/styles/feedbackQuestionBlockStyle";

const smileData = [
    {
        type: 'smile',
        percentage: 32,
        count: 343
    },
    {
        type: 'lol',
        percentage: 8,
        count: 54
    },
    {
        type: 'love',
        percentage: 54,
        count: 45
    },
    {
        type: 'neutral',
        percentage: 1,
        count: 2
    },
    {
        type: 'angry',
        percentage: 9,
        count: 123
    }
];

function FeedbackQuestionBlock({ ...props }) {
    const {
        classes,
        data
    } = props;

    const smilesView = () => {
        return smileData.map((item, i) => {
            return (
                <SmileBlock
                    key={`item ${i + 1}`}
                    type={item.type}
                    horizontal={true}
                    data={item}
                />
            );
        });
    };


    return (
        <Grid container spacing={24} className={classes.container}>
            <div style={{ gridColumnEnd: 'span 10' }}>
                <Typography className={classes.smileTitle}> How is the big burger ?</Typography>
                <div className={classes.smileBlock}>
                    {smilesView()}
                </div>
            </div>
            <div style={{ gridColumnEnd: 'span 2' }}>
                <div className={classes.centerView}>
                    <Typography className={classes.breaches}>3 Breaches</Typography>
                    <Typography className={classes.valueText}>323</Typography>
                    <Typography className={classes.typeOfValue}>Responses</Typography>
                </div>
            </div>
        </Grid>
    );
}

export default withStyles(feedbackQuestionBlockStyle)(FeedbackQuestionBlock);
