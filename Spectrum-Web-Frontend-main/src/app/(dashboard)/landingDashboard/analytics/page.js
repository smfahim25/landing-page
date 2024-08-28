"use client";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import questions from "../../../questionairre/questions.json"; // Adjust the path as needed

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
      setLoading(true);
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
        setLoading(false);
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
      setLoading(true);
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
                (key) =>
                  key.startsWith("q") &&
                  !["q6Content", "q1Content"].includes(key)
              )
            )
          ),
          "q1Content",
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
            q1Content: item.q1Content || "No data",
            q6Content: item.q6Content || "No data",
          };

          questionColumns
            .filter((key) => !["q1Content", "q6Content"].includes(key))
            .forEach((key) => {
              const question = questions.find((q) => q.id === key);
              const option = question?.options.find(
                (opt) => opt.id === item[key]
              );
              row[key] = option?.text || option?.value || "Unknown";
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
    const [, optionCode] = optionId.split("-");
    const optionNumber = optionCode.replace("op", "");
    return `Option-${optionNumber}`;
  };
  return (
    <div>
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-[#6665DD]"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div>
            <Grid container spacing={3}>
              {questions.map((question) => (
                <Grid item xs={12} sm={12} md={12} key={question.id}>
                  <Card className="">
                    <CardHeader title={question.text} />
                    <div className="grid grid-col-2 gap-3">
                      <CardContent className="grid grid-cols-2 gap-3">
                        {question.options.map((option) => {
                          let displayText = option.text;
                          let count = 0;

                          if (question.id === "q2") {
                            // Handle q2 differently based on the value
                            const analyticsForQ2 = data["q2"] || [];
                            const match = analyticsForQ2.find(
                              (opt) => opt.option === option.id
                            );
                            count = match ? match.count : 0;

                            // Assuming you want to display something different for q2
                            displayText = option.value
                              ? `${option.value}`
                              : "Unknown";
                          } else {
                            // General case for other questions
                            count =
                              data[question.id]?.find(
                                (opt) => opt.option === option.id
                              )?.count || 0;
                          }

                          return (
                            <Typography key={option.id}>
                              {displayText} -- {count}
                            </Typography>
                          );
                        })}
                      </CardContent>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className="mt-16">
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              {error && <div className="text-red-600">Error: {error}</div>}
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
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, index) => (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
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
      )}
    </div>
  );
}
