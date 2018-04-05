// ##############################
// // // RegularCard styles
// #############################

import {
    defaultFont
} from "../styles";

const smileBlockStyle = theme => ({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px 20px 5px'
    },

    smileBlock: {
        display: 'flex'
    },
    centerView: {
        textAlign: 'center'
    },
    breaches: {
        color: '#3498db',
        paddingBottom: '10px'
    },
    valueText: {
        fontWeight: '500',
        fontSize: 22,
    },
    typeOfValue: {

    }
});

export default smileBlockStyle;