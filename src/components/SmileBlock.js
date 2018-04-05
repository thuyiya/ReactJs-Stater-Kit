import React from "react";
import {
  withStyles
} from "material-ui";
import PropTypes from "prop-types";
import cx from "classnames";

import smileBlockStyle from "../variables/styles/smileBlockStyle";

function SmileBlock({ ...props }) {
  const {
    classes,
    type,
    data,
    horizontal
  } = props;

  const detailsView = () => {
    return horizontal ? (
      <div className={classes.details}>
        <p className={classes.percentage}>{data.percentage}</p>
        <p className={classes.countText}>&nbsp;({data.count})</p>
      </div>
    ) :
      (
        <div >
          <p className={classes.percentage}><span className={classes.dot} />{data.percentage}</p>
          <p className={classes.countText}>{data.count}</p>
        </div>
      );
  };


  return (
    <div className={classes.container}>
      <div className={classes.logoImage}>
        <img src={require(`../assets/img/${type}.png`)} alt="smile" className={classes.img} />
      </div>
      {detailsView()}
    </div>
  );
}

export default withStyles(smileBlockStyle)(SmileBlock);
