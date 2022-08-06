import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

export const StudentAdd = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");

  const addData = async () => {
    const res = await fetch(`http://localhost:4000/student/addstudent`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname: firstname, lastname: lastname }),
    });
    const response = res.json();
    console.log(response);
  };

  return (
    <div className="containers listbg">
      <div className="detailAlign studentLabel">
        <h1>Student Edit</h1>
      </div>
      <Container align="center">
        <Card align="left" sx={{ maxWidth: 500, minHeight: 230 }}>
          <CardContent>
            <Typography color="text.secondary" variant="h5" component="div">
              First Name:{" "}
              <input
                style={{ padding: "1px", fontSize: "15pt" }}
                type="text"
                name="firstname"
                onChange={(e) => setfirstname(e.target.value)}
                placeholder="First Name"
              />
            </Typography>
            <Typography color="text.secondary" variant="h5" component="div">
              Last Name:{" "}
              <input
                style={{ padding: "1px", fontSize: "15pt" }}
                type="text"
                name="lastname"
                onChange={(e) => setlastname(e.target.value)}
                placeholder="Last Name"
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Link onClick={() => addData()} to={"/Studentlist"}>
              <Button variant="contained" color="success" size="small">
                Save
              </Button>
            </Link>
            <Link to={`/studentlist`}>
              <Button variant="contained" color="error" size="small">
                Cancel
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};
