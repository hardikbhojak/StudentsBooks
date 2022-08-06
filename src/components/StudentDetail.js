import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

export const StudentDetail = () => {
  const [studid] = useSearchParams();
  const id = studid.get("id");

  const [student, setStudents] = useState({});
  useEffect(async () => {
    const res = await fetch(`http://localhost:4000/student/details/${id}`, {
      mode: "cors",
    });
    const response = await res.json();
    setStudents(response.data);
  }, []);

  const deleteStudent = async () => {
    if (window.confirm("Are you sure you want to delete this student")) {
      await fetch(`http://localhost:4000/student/details/${id}`, {
        method: "DELETE",
        mode: "cors",
        // headers: { "Content-Type": "application/json" },
      });
    } else {
      alert("Data not deleted");
    }
  };

  return (
    <div className="containers listbg">
      <div className="detailAlign studentLabel">
        <h1>Student Details</h1>
      </div>
      <Container align="center">
        <Card align="left" sx={{ maxWidth: 500, minHeight: 230 }}>
          <CardContent>
            <Typography color="text.secondary" variant="h5" component="div">
              Student ID: <span style={{ color: "black" }}>{student.id}</span>
            </Typography>
            <Typography color="text.secondary" variant="h5" component="div">
              First Name:{" "}
              <span style={{ color: "black" }}>{student.firstname}</span>
            </Typography>
            <Typography color="text.secondary" variant="h5" component="div">
              Last Name:{" "}
              <span style={{ color: "black" }}>{student.lastname}</span>
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/StudentEdit?id=${student.id}`}>
              <Button variant="contained" size="small">
                Update
              </Button>
            </Link>
            <Link to={"/StudentList"}>
              <Button
                onClick={() => deleteStudent()}
                variant="contained"
                color="error"
                size="small"
              >
                Delete
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Link to={"/studentlist"}>
          <button>Back</button>
        </Link>
      </Container>
    </div>
  );
};
