// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 240;

const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#bdc3c7";
const roseColor = "#e91e63";
const grayColor = "#999999";

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const grayBoxShadow = {
  // boxShadow:
  //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};

const cardHeader = {
  margin: "5px 10px 0",
  borderRadius: "3px",
  padding: "5px"
};

const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...defaultFont
};

const grayCardHeader = {
  background: "#fff",//"linear-gradient(60deg, #ab47bc, #8e24aa)",
  ...grayBoxShadow
};

export {
  //variables
  container,
  drawerWidth,
  defaultFont,
  infoColor,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  roseColor,
  grayColor,
  transition,
  cardActions,
  grayCardHeader,
  card,
  cardHeader
};
