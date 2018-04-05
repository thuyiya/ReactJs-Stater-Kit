// ##############################
// // // Header styles
// #############################
import { drawerWidth } from '../styles';

const headerStyle = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    flex: {
        flex: 1,
    },
    avatar: {
        width: 40,
        height: 40,
    },
    username: {
        'align-self': 'center'
    },
    avatarcontainer: {
        marginRight: 10,
    }
});

export default headerStyle;
