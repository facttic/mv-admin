import { defaultTheme } from "react-admin";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import merge from "lodash/merge";
import { orange } from '@material-ui/core/colors';


export const theme = createMuiTheme(
  merge({}, defaultTheme, {
    palette: {
      primary: {
        main: orange[400],
      },
      // Your theme goes here
      // Write the following code to have an orange app bar. We'll explain it later in this article.
      secondary: {
        main: orange[400]
      },
    }
  })
);

export const typography = {
  fontFamilySecondary: "'Bitter'",
  fontFamily: "'Bitter'",
  fontSize: 16, // Should be a number in pixels
  fontStyle: "normal",
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  
};
