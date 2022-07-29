import React from "react";
import { LeftSide } from "./components/LeftSide";
import { RightSide } from "./components/RightSide";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const App1 = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container>
        <Grid item xs={6}>
          <div className="containers listbg">
            <div>
              <strong>
                <h1 className="listtxt">\\LIB</h1>
              </strong>
              <LeftSide />
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="containers detailsbg">
            <div>
              <strong>
                <h1 className="detailstxt">RARY//</h1>
              </strong>
              <RightSide />
            </div>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
