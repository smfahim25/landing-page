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

export default function SPage() {
  const user = useSelector((state) => state.auth.user);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchData = async () => {
      try {
        // Perform the fetch request
        const response = await fetch(
          "http://localhost:4000/api/v1//articals/article-analytics",
          {
            method: "GET",
            headers: {
              Authorization: `${user?.data?.accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Check if response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON response
        const result = await response.json();
        console.log("Fetched Data:", result);

        // Update state with the fetched data
        // setData(result.data || []);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error.message);
        setError(error.message);
      } finally {
        // Always set loading to false
        setLoading(false);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/questionaries",
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

  return (
    <div>
      <div></div>
      <div>
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
