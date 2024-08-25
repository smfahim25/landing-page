"use client";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Link from "next/link";
import * as React from "react";
import { useSelector } from "react-redux";

const columns = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "catId", label: "Category ID", minWidth: 100 },
  { id: "description", label: "Description", minWidth: 200 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "action", label: "Action", minWidth: 100, align: "center" }, // New Action column
];

function createData(title, catId, description, status, id) {
  return { title, catId, description, status, id }; // Include id in the row object
}

export default function Page() {
  const user = useSelector((state) => state.auth.user);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://landing-pages-shoshin-tech.onrender.com/api/v1/articals",
          {
            headers: {
              Authorization: `${user?.data?.accessToken}`, // Include token in the request headers
            },
          }
        );
        // Assuming the API returns an array of objects with keys 'title', 'catId', 'description', 'status', and 'id'
        const data = response?.data?.data?.map((item) =>
          createData(
            item.title.slice(0, 35),
            item.category.name,
            item.description.slice(0, 50),
            item.status,
            item.id // Pass id for editing
          )
        );
        setRows(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (loading)
    return (
      <div>
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-[#6665DD]"></div>
        </div>
      </div>
    );
  // if (error) return <div className="text-red-600">Error: {error}</div>;

  return (
    <div className="px-10 flex flex-col gap-10">
      <div className="flex justify-between items-center mt-5">
        <h1 className="text-xl font-bold">Articles List</h1>
        <Link
          href="/landingDashboard/articles/create_articles"
          className=" bg-[#6665DD] px-5 py-1 text-white rounded-md "
        >
          Create Articles
        </Link>
      </div>
      <div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
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
                  .map((row) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={`${row.id}-${Date.now()}-${Math.random()}`} // Use id as the key
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "action" ? (
                              <Link
                                href={`/landingDashboard/articles/edit_articles?id=${row.id}`}
                                className="text-blue-500"
                              >
                                Edit
                              </Link>
                            ) : column.id === "description" ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: value,
                                }}
                              />
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
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
