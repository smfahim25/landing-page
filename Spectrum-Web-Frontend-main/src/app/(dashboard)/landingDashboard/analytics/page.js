"use client";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import questions from "../../../questionairre/questions.json"; // Adjust the path as needed
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

export default function SPage() {
  const user = useSelector((state) => state.auth.user);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://landing-pages-shoshin-tech.onrender.com/api/v1/articals/article-analytics",
          {
            method: "GET",
            headers: {
              Authorization: `${user?.data?.accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.data || {});
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://landing-pages-shoshin-tech.onrender.com/api/v1/questionaries",
          {
            method: "GET",
            headers: {
              Authorization: `${user?.data?.accessToken}`, // Replace with your actual token
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const result = await response.json();
        const data = result?.data || [];

        // Determine columns based on data keys
        const questionColumns = [
          ...new Set(
            data.flatMap((item) =>
              Object.keys(item).filter(
                (key) => key.startsWith("q") && key !== "q6Content"
              )
            )
          ),
          "q6Content",
        ];

        const dynamicColumns = [
          { id: "email", label: "Email", minWidth: 170 },
          ...questionColumns.map((key) => ({
            id: key,
            label: `Q${key.replace("q", "")}`,
            minWidth: 100,
          })),
        ];

        setColumns(dynamicColumns);

        // Transform data
        const transformedData = data.map((item) => {
          const row = {
            email: item.email,
            q6Content: item.q6Content || "No data",
          };

          questionColumns
            .filter((key) => key !== "q6Content")
            .forEach((key) => {
              const question = questions.find((q) => q.id === key);
              const option = question?.options.find(
                (opt) => opt.id === item[key]
              );
              row[key] = option.text
                ? option.text
                : option.value
                ? option.value
                : "Unknown";
            });

          return row;
        });

        setRows(transformedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const generateLabel = (optionId) => {
    const [optionCode] = optionId.split("-");
    const optionNumber = optionCode.replace("op", "");
    return `Option-${optionNumber}`;
  };
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Grid container spacing={3}>
          {Object.keys(data).map((questionId) => (
            <Grid item xs={12} sm={6} md={4} key={questionId}>
              <Card className="h-[200px]">
                <CardHeader title={`Q${questionId.slice(1)}`} />
                <div className="grid grid-col-2 gap-3">
                  <CardContent className="grid grid-cols-2 gap-3">
                    {data[questionId].map((option) => (
                      <Typography key={option.option}>
                        {generateLabel(option.option)}: {option.count}
                      </Typography>
                    ))}
                  </CardContent>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="mt-16">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          {error && <div>Error: {error}</div>}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => (
                          <TableCell key={column.id}>
                            {row[column.id] !== undefined
                              ? row[column.id]
                              : "No Data"}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}
