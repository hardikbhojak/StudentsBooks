import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

export const StudentEdit = () => {
  const [studid] = useSearchParams();
  const id = studid.get("id");

  const [student, setStudents] = useState({});
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");

  useEffect(async () => {
    console.log("useEffect");
    const res = await fetch(`http://localhost:4000/student/details/${id}`, {
      mode: "cors",
    });
    const response = await res.json();
    setfirstname(response.data.firstname);
    setlastname(response.data.lastname);

    setStudents(response.data);
  }, []);

  const updateData = async () => {
    console.log(firstname, lastname);
    await fetch(`http://localhost:4000/student/details/${id}`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ first: firstname, last: lastname }),
    });
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
              Student ID: <span style={{ color: "black" }}>{student.id}</span>
            </Typography>
            <Typography color="text.secondary" variant="h5" component="div">
              First Name:{" "}
              <input
                style={{ padding: "1px", fontSize: "15pt" }}
                type="text"
                name="firstName"
                defaultValue={student.firstname}
                onChange={(e) => setfirstname(e.target.value)}
                placeholder="First Name"
              />
            </Typography>
            <Typography color="text.secondary" variant="h5" component="div">
              Last Name:{" "}
              <input
                style={{ padding: "1px", fontSize: "15pt" }}
                type="text"
                defaultValue={student.lastname}
                name="lastName"
                onChange={(e) => setlastname(e.target.value)}
                placeholder="Last Name"
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              onClick={() => updateData()}
              to={`/StudentDetail?id=${student.id}`}
            >
              <Button variant="contained" color="success" size="small">
                Save
              </Button>
            </Link>
            <Link to={`/StudentDetail?id=${student.id}`}>
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
