import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const columns = [
  {
    id: "ID",
    label: "Sr No.",
  },
  {
    id: "Book Name",
    label: "Book Name",
  },
  {
    id: "Author Name",
    label: "Author Name",
  },
  {
    id: "Borrowed By",
    label: "Borrowed By",
  },
  {
    id: "Borrowed Date",
    label: "Borrowed Date",
  },
  {
    id: "Return Before",
    label: "Returned Before",
  },
  {
    id: "View",
    label: "View",
  },
];

export const BookList = () => {
  const [books, setbooks] = useState([]);
  useEffect(async () => {
    const res = await fetch("http://localhost:4000/book/list", {
      mode: "cors",
    });
    const response = await res.json();
    console.log(response);
    setbooks(response.data);
    console.log(books);
  }, []);
  return (
    <div>
      <div className="containers detailsbg">
        <div className="detailAlign bookLabel">
          <h1>Books List</h1>
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
                  {books.map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.Bookid}
                      >
                        <TableCell key={row.Bookid} align="center">
                          {index + 1}
                        </TableCell>
                        <TableCell align="center">{row.Bookname}</TableCell>
                        <TableCell align="center">{row.Author}</TableCell>
                        <TableCell align="center">
                          {row.Borrowedby == null
                            ? "-"
                            : `${row.firstname} ${row.lastname} `}
                        </TableCell>
                        <TableCell align="center">{row.Borroweddate}</TableCell>
                        <TableCell align="center">{row.Returndate}</TableCell>
                        <TableCell align="center">
                          <Link to={`/BookDetail?id=${row.Bookid}`}>
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
        </Container>
      </div>
    </div>
  );
};
