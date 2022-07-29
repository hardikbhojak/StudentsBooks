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

export const StudentEdit = () => {
  return (
    <div className="containers listbg">
      <div className="detailAlign studentLabel">
        <h1>Student Edit</h1>
      </div>
      <Container align="center">
        <Card align="left" sx={{ maxWidth: 500, minHeight: 230 }}>
          <CardContent>
            <Typography color="text.secondary" variant="h5" component="div">
              Student ID: <span style={{ color: "black" }}>{data.id}</span>
            </Typography>
            <Typography color="text.secondary" variant="h5" component="div">
              First Name:{" "}
              <input
                style={{ padding: "1px", fontSize: "15pt" }}
                type="text"
                name="firstName"
                defaultValue={data.firstName}
                placeholder="First Name"
              />
            </Typography>
            <Typography color="text.secondary" variant="h5" component="div">
              Last Name:{" "}
              <input
                style={{ padding: "1px", fontSize: "15pt" }}
                type="text"
                defaultValue={data.lastName}
                name="lastName"
                placeholder="Last Name"
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={"/StudentDetail"}>
              <Button variant="contained" color="success" size="small">
                Save
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};
