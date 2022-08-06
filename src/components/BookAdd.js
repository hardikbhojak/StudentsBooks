import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

export const BookAdd = () => {
  const [bookname, setbookname] = useState("");
  const [authorname, setauthorname] = useState("");
  const [borroweddate, setBorroweddate] = useState("");
  const [returndate, setreturndate] = useState("");

  const addData = async () => {
    const res = await fetch(`http://localhost:4000/book/addBook`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Bookname: bookname,
        Author: authorname,
        Borroweddate: borroweddate,
        Returndate: returndate,
      }),
    });
    const response = res.json();
    console.log(response);
  };

  return (
    <div className="containers listbg">
      <div className="detailAlign studentLabel">
        <h1>Book Edit</h1>
      </div>
      <Container align="center">
        <Card align="left" sx={{ minWidth: 600, minHeight: 400 }}>
          <CardContent>
            <Typography
              style={{ margin: "2px" }}
              color="text.secondary"
              variant="h3"
              component="div"
            >
              Book Name:{" "}
              <input
                style={{ padding: "1px", fontSize: "25pt" }}
                type="text"
                onChange={(e) => setbookname(e.target.value)}
                name="bookname"
                placeholder="Last Name"
              />
            </Typography>
            <Typography
              style={{ margin: "2px" }}
              color="text.secondary"
              variant="h4"
              component="div"
            >
              Author Name:{" "}
              <input
                style={{ padding: "1px", fontSize: "20pt" }}
                type="text"
                onChange={(e) => setauthorname(e.target.value)}
                name="authorname"
                placeholder="Last Name"
              />
            </Typography>

            <Typography
              style={{ margin: "2px" }}
              color="text.secondary"
              variant="h4"
              component="div"
            >
              Borrowed Date:{" "}
              <input
                style={{ padding: "1px", fontSize: "20pt" }}
                type="text"
                onChange={(e) => setBorroweddate(e.target.value)}
                name="lastName"
                placeholder="Borrowed date"
              />
            </Typography>
            <Typography
              style={{ margin: "2px" }}
              color="text.secondary"
              variant="h4"
              component="div"
            >
              Return Before:{" "}
              <input
                style={{ padding: "1px", fontSize: "20pt" }}
                type="text"
                onChange={(e) => setreturndate(e.target.value)}
                name="lastName"
                placeholder="Last Name"
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/Booklist`} onClick={() => addData()}>
              <Button color="success" variant="contained" size="large">
                Save
              </Button>
            </Link>
            <Link to={`/Booklist`}>
              <Button color="error" variant="contained" size="large">
                Cancel
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};
