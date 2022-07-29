import React from "react";
import { Link } from "react-router-dom";
export const RightSide = () => {
  return (
    <div className="">
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
