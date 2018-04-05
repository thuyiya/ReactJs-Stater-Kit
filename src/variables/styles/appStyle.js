// ##############################
// // // App styles
// #############################

import { drawerWidth, transition, container } from "../styles.js";

const appStyle = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: "30px 15px",
        minHeight: "calc(100% - 123px)"
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    mainPanel: {
        overflow: "auto",
        position: "relative",
        float: "right",
        ...transition,
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: 'touch'
      },
      container,
      map: {
        marginTop: "70px"
      }
});

export default appStyle;
