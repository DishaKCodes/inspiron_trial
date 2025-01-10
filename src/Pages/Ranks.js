import * as React from "react";
// import Paper from "@mui/material/Paper";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { finalists, columns } from "./Participants.js";
import { tableCellClasses } from "@mui/material/TableCell";

export default function CodequestRank() {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "rgba(105, 119, 211, 1)",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: theme.palette.common.white,
      fontFamily: 'Patua One',
      fontSize: 14,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
      fontFamily: "Times New Roman",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    // <Paper >
    <>
      <div 
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "2.5rem",
          marginTop: "2rem",
          marginBottom: "2rem",
          fontFamily: "Merriweather, sans-serif",
          color: "white",
          textShadow:
            " #6977d3 0px 0px 5px, #6977d3 0px 0px 10px, #6977d3 0px 0px 20px, #6977d3 0px 0px 40px, #da1c5c 0px 0px 60px",
        }}
      >
        INSPIRON FINALISTS
      </div>

      <Box sx={{ overflow: "hidden", margin: "auto" }} className="ranks">
        {/* Junior Table */}
        <center>
          <Typography
            variant="overline"
            style={{ color: "white", fontSize: "1.5em" }}
          ></Typography>
        </center>
        <TableContainer
          sx={{ backgroundColor: "whitesmoke" }}
          style={{ marginTop: "2em", marginBottom: "2em" }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead style={{ backgroundColor: "blue" }}>
              <StyledTableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {finalists
                //   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      // hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      sx={{ backgroundColor: "black" }}
                      className="glass"
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ color: "white" }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <br />

        {/* Senior Table */}
        {/*   <center>
        <Typography
          variant="overline"
          style={{ color: "white", fontSize: "1.5em" }}
        >
          Sr Leaderboard
        </Typography>
      </center>
      <TableContainer
        sx={{ backgroundColor: "whitesmoke" }}
        style={{ marginTop: "2em" }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {codequestSr
              //   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    // hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    sx={{ backgroundColor: "black" }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ color: "white" }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
     

      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={codequestJr.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      </Box>
    </>
    // </Paper>
  );
}
