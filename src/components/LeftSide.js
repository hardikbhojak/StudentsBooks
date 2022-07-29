import React from "react";
import { Link } from "react-router-dom";
import { Button, Avatar } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
export const LeftSide = () => {
  return (
    <div className="">
      <div className="align">
        <Avatar
          alt="Remy Sharp"
          src="./student.png"
          sx={{ width: 200, height: 200 }}
        />
      </div>
      <div className="detailAlign">
        <Link to={"/StudentList"}>
          <button>
            <h1>Student List</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};
