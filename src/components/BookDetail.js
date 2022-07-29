import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

const data = {
  id: 1,
  bookName: "John",
  authorName: "Smith",
  borrowedBy: "John",
  borrowedDate: new Date("10/12/2021"),
  returnBefore: new Date(),
};

export const BookDetail = () => {
  const [bookid] = useSearchParams();
  const id = bookid.get("id");
  console.log(id);
  const [book, setBook] = useState({});
  useEffect(async () => {
    const res = await fetch(`http://localhost:4000/book/details/${id}`, {
      mode: "cors",
    });
    const response = await res.json();
    console.log(response);
    setBook(response.data);
    console.log(book);
  }, []);

  return (
    <div className="containers listbg">
      <div className="detailAlign studentLabel">
        <h1>Book Details</h1>
      </div>
      <Container align="center">
        <Card align="left" sx={{ minWidth: 600, minHeight: 500 }}>
          <CardContent>
            <Typography color="text.secondary" variant="h3" component="div">
              Book Name: <span style={{ color: "black" }}>{book.Bookname}</span>
            </Typography>
            <Typography color="text.secondary" variant="h4" component="div">
              Author Name: <span style={{ color: "black" }}>{book.Author}</span>
            </Typography>
            <Typography color="text.secondary" variant="h4" component="div">
              Borrowed By:{" "}
              <span style={{ color: "black" }}>
                {book.Borrowedby == null
                  ? "-"
                  : `${book.firstname} ${book.lastname} `}
              </span>
            </Typography>

            <Typography color="text.secondary" variant="h4" component="div">
              Borrowed Date:{" "}
              <span style={{ color: "black" }}>{book.Borroweddate}</span>
            </Typography>
            <Typography color="text.secondary" variant="h4" component="div">
              Return Before:{" "}
              <span style={{ color: "black" }}>{book.Returndate}</span>
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={"/BookEdit"}>
              <Button variant="contained" size="large">
                Update
              </Button>
            </Link>
            <Link to={"/BookList"}>
              <Button
                style={{ marginLeft: "10px" }}
                variant="contained"
                color="error"
                size="large"
              >
                Delete
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};
