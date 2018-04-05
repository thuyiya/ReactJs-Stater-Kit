// ##############################
// // // RegularCard styles
// #############################

import {
  defaultFont
} from "../styles";

const smileBlockStyle = {
  cardPlainHeader: {
    marginLeft: 0,
    marginRight: 0
  },
  container: {
    padding: '20px'
  },
  logoImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: '40px'
  },
  countText: {
    ...defaultFont,
    fontWeight: '600',
    color: '#7f8c8d',
    display: 'grid',
    justifyContent: 'center'
  },
  percentage: {
    ...defaultFont,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    height: '10px',
    width: '10px',
    backgroundColor: '#3498db',
    borderRadius: '50%',
    display: 'inline-block',
  },
  details: {
    display: 'flex'
  }
};

export default smileBlockStyle;
