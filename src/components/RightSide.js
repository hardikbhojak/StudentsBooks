import React from "react";
import { Button, Avatar } from "@mui/material";

import { Link } from "react-router-dom";
export const RightSide = () => {
  return (
    <div className="">
      <div className="align">
        <Avatar
          alt="Remy Sharp"
          src={"b.png"}
          sx={{ width: 200, height: 200 }}
        />
      </div>
      <div className="detailAlign">
        <Link to="/BookList">
          <button className="m-2 btn btn-outline-dark">
            <h1>Book List</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};
