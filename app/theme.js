import {
  blue500, blue700, blue600,
  yellow100, yellow500, yellow600, yellow700,
  grey600, grey900, grey50,
} from 'material-ui/styles/colors';

// https://www.materialpalette.com/yellow/blue
export default {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: yellow500,
    primary2Color: yellow700,
    primary3Color: yellow100,
    accent1Color: blue500,
    accent2Color: blue700,
    accent3Color: blue600,
    textColor: grey900,
    secondaryTextColor: grey600,
    alternateTextColor: grey900,
  },
  flatButton: {
    color: blue500,
  },
  paper: {
    backgroundColor: grey50,
  },
};
