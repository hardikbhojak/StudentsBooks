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
  firstName: "John",
  lastName: "Doe",
};

export const StudentDetail = () => {
  return (
    <div className="containers listbg">
      <div className="detailAlign studentLabel">
        <h1>Student Details</h1>
      </div>
      <Container align="center">
        <Card align="left" sx={{ maxWidth: 500, minHeight: 230 }}>
          <CardContent>
            <Typography color="text.secondary" variant="h5" component="div">
              Student ID: <span style={{ color: "black" }}>{data.id}</span>
            </Typography>
            <Typography color="text.secondary" variant="h5" component="div">
              First Name:{" "}
              <span style={{ color: "black" }}>{data.firstName}</span>
            </Typography>
            <Typography color="text.secondary" variant="h5" component="div">
              Last Name: <span style={{ color: "black" }}>{data.lastName}</span>
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={"/StudentEdit"}>
              <Button variant="contained" size="small">
                Update
              </Button>
            </Link>
            <Link to={"/StudentList"}>
              <Button variant="contained" color="error" size="small">
                Delete
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};
