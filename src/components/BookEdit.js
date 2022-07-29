import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const data = {
  id: 1,
  bookName: "John",
  authorName: "Smith",
  borrowedBy: "John",
  borrowedDate: new Date("10/12/2021"),
  returnBefore: new Date(),
};

export const BookEdit = () => {
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
                defaultValue={data.bookName}
                name="lastName"
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
                defaultValue={data.authorName}
                name="lastName"
                placeholder="Last Name"
              />
            </Typography>
            <Typography
              style={{ margin: "2px" }}
              color="text.secondary"
              variant="h4"
              component="div"
            >
              Borrowed By:{" "}
              <input
                style={{ padding: "1px", fontSize: "20pt" }}
                type="text"
                defaultValue={data.borrowedBy}
                name="lastName"
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
                defaultValue={data.borrowedDate.toLocaleDateString("en-IN")}
                name="lastName"
                placeholder="Last Name"
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
                defaultValue={data.returnBefore.toLocaleDateString("en-IN")}
                name="lastName"
                placeholder="Last Name"
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={"/BookDetail"}>
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
