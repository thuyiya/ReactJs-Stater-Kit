// ##############################
// // // Sidebar styles
// #############################
import {
    drawerWidth,
    infoColor,
    defaultFont
} from '../styles';

const sidebarStyle = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        height: '100%'
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    grayFont: {
        color: "#bdc3c7"
    },
    gray: {
        boxShadow:
            "0 12px 20px -10px rgba(236, 240, 241,1.0), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(236, 240, 241,1.0)",
        "&:hover": {
            boxShadow:
                "0 12px 20px -10px rgba(236, 240, 241,1.0), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(236, 240, 241,1.0)"
        }
    },

    itemLink: {
        backgroundColor: "transparent",
        height: "52px",
        ...defaultFont
    },
    itemIcon: {
        color: "rgba(0, 0, 0, 0.54)"
    },
    item: {
        position: "relative",
        display: "block",
        color: '#000',
        textDecoration: "none",
      }
});

export default sidebarStyle;
