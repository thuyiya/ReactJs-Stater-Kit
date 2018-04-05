// ##############################
// // // RegularCard styles
// #############################

import {
    card,
    cardHeader,
    defaultFont,
    grayCardHeader,
  } from "../styles";
  
  const basicCardStyle = {
    card,
    cardPlain: {
      background: "transparent",
      boxShadow: "none"
    },
    cardHeader: {
      ...cardHeader,
      ...defaultFont
    },
    cardPlainHeader: {
      marginLeft: 0,
      marginRight: 0
    },
    grayCardHeader,
    cardTitle: {
      color: "#bdc3c7",
      marginTop: "0",
      marginBottom: "5px",
      marginTopLeft: '5px',
      ...defaultFont,
      fontWeight: 500,
      fontSize: "1.125em"
    },
    cardSubtitle: {
      ...defaultFont,
      marginBottom: "0",
      color: "rgba(255, 255, 255, 0.62)",
      margin: "0 0 10px"
    },
    cardActions: {
      padding: "14px",
      display: "block",
      height: "auto"
    }
  };
  
  export default basicCardStyle;
  