import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const columns = [
  {
    id: "ID",
    label: "ID",
  },
  {
    id: "First Name",
    label: "First Name",
  },
  {
    id: "Last Name",
    label: "Last Name",
  },
  {
    id: "view",
    label: "View",
  },
];

export const StudentList = () => {
  const [students, setstudents] = useState([]);
  useEffect(async () => {
    const res = await fetch("http://localhost:4000/student/list", {
      mode: "cors",
    });
    const response = await res.json();

    setstudents(response.data);
  }, []);
  return (
    <div className="containers listbg">
      <div className="detailAlign studentLabel">
        <h1>Student List</h1>
      </div>

      <Container>
        <Paper elevation={3}>
          <TableContainer>
            <Table
              border="20"
              bgcolor="skyblue"
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align="center">
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((rows, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={rows.id}>
                      <TableCell key={rows.id} align="center">
                        {index + 1}
                      </TableCell>
                      <TableCell align="center">{rows.firstname}</TableCell>
                      <TableCell align="center">{rows.lastname}</TableCell>
                      <TableCell align="center">
                        <Link to={`/studentDetail?id=${rows.id}`}>
                          <button>View</button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Link to="../../../../../">
          <button>Back</button>
        </Link>
        <Link to="/StudentAdd">
          <Button
            style={{ marginLeft: "10px", marginTop: "10px" }}
            variant="contained"
            size="medium"
            color="success"
          >
            Add
          </Button>
        </Link>
      </Container>
    </div>
  );
};
