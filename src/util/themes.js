import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#1D2026",
    },
    palette: {
      primary: green,
    },
  },
});

export default darkTheme;
