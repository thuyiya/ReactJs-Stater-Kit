// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 240;

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

const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};
const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
const successBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
};
const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
const dangerBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
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
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};

const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...defaultFont
};

const orangeCardHeader = {
  background: "#f39c12",//"linear-gradient(60deg, #f83600, #f9d423)",
  ...warningBoxShadow
};
const greenCardHeader = {
  background: "#2ecc71",//"linear-gradient(60deg, #20E2D7, #F9FEA5)",
  ...successBoxShadow
};
const redCardHeader = {
  background: "#e74c3c",//"linear-gradient(60deg, #ff0844, #ffb199)",
  ...dangerBoxShadow
};
const blueCardHeader = {
  background: "#3498db",//"linear-gradient(60deg, #4facfe, #00f2fe)",
  ...infoBoxShadow
};
const purpleCardHeader = {
  background: "#9b59b6",//"linear-gradient(60deg, #ab47bc, #8e24aa)",
  ...primaryBoxShadow
};

export {
  //variables
  drawerWidth,
  defaultFont,
  infoColor,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  roseColor,
  grayColor,
  cardActions,
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  card,
  cardHeader
};
