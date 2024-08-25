"use client";
import {
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://landing-pages-shoshin-tech.onrender.com/api/v1/auth",
          {
            headers: {
              Authorization: `${user?.data?.accessToken}`,
            },
          }
        );
        setData(response?.data?.data);
        setSelectedStatuses(response?.data?.data?.map((item) => item.role));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleStatusChange = async (index, event) => {
    const newRole = event.target.value;
    const userId = data[index].id;

    try {
      setLoading(true);
      // Sending the updated role and user ID to the API using PATCH
      await axios.patch(
        `https://landing-pages-shoshin-tech.onrender.com/api/v1/auth/change-role`, // API endpoint
        { id: userId, role: newRole }, // Body includes id and role
        {
          headers: {
            Authorization: `${user?.data?.accessToken}`,
          },
        }
      );

      // Update the local state
      setLoading(false);
      const newStatuses = [...selectedStatuses];
      newStatuses[index] = newRole;
      setSelectedStatuses(newStatuses);
    } catch (error) {
      setLoading(false);
      setError("Failed to update role. Please try again.", error);
    }
  };

  if (loading) {
    return (
      <div>
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-[#6665DD]"></div>
        </div>
      </div>
    );
  }

  // if (error) {
  //   return <div className="text-red-600">Error: {error}</div>;
  // }

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold">Users List</h1>
      </div>
      <div className="mt-10">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <Select
                      value={selectedStatuses[index]}
                      onChange={(event) => handleStatusChange(index, event)}
                    >
                      <MenuItem value="USER">User</MenuItem>
                      <MenuItem value="ADMIN">Admin</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
