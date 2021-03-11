import { defaultTheme } from "react-admin";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import merge from "lodash/merge";
import { orange, grey } from '@material-ui/core/colors';

export const theme = createMuiTheme(
  merge({}, defaultTheme, {
    palette: {
      primary: {
        main: orange[400],
        light: "#ff0000",
        dark: grey[900]
      },
      secondary: {
        main: grey[200],
        light: grey[100]
      },
      background: {
        default: grey[200]
      }
    },
    overrides: {
      MuiButton: {
        root: {background:orange[400]}
      }
    }
  })
);

export const typography = {
  fontFamilySecondary: "'Bitter'",
  fontFamily: "'Bitter'",
  fontSize: "16px", // Should be a number in pixels
  fontStyle: "normal",
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  
};
