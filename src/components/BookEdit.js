import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

export const BookEdit = () => {
  const [bookid] = useSearchParams();
  const id = bookid.get("id");
  console.log(id);
  const [book, setbooks] = useState({});
  const [bookname, setbookname] = useState("");
  const [authorname, setauthorname] = useState("");
  const [borroweddate, setBorroweddate] = useState("");
  const [returndate, setreturndate] = useState("");
  useEffect(async () => {
    console.log("useEffect");
    const res = await fetch(`http://localhost:4000/book/details/${id}`, {
      mode: "cors",
    });
    const response = await res.json();
    setbookname(response.data.Bookname);
    setauthorname(response.data.Author);
    setBorroweddate(response.data.Borroweddate);
    setreturndate(response.data.Returndate);
    console.log(response);
    setbooks(response.data);
    console.log(book);
  }, []);

  const updateData = async () => {
    await fetch(`http://localhost:4000/book/details/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookname: bookname,
        authorname: authorname,
        borroweddate: borroweddate,
        returnbefore: returndate,
      }),
    });
  };

  return (
    <div className="containers listbg">
      <div className="detailAlign studentLabel">
        <h1>Book Edit</h1>
      </div>
      <Container align="center">
        <Card align="left" sx={{ minWidth: 600, minHeight: 500 }}>
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
                defaultValue={book.Bookname}
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
                defaultValue={book.Author}
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
                defaultValue={book.Borroweddate}
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
                // defaultValue={data.returnBefore.toLocaleDateString("en-IN")}
                defaultValue={book.Returndate}
                onChange={(e) => setreturndate(e.target.value)}
                name="lastName"
                placeholder="Last Name"
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={`/BookDetail?id=${book.Bookid}`}
              onClick={() => updateData()}
            >
              <Button color="success" variant="contained" size="large">
                Save
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};
