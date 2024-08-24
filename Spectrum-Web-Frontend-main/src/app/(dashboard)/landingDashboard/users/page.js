"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";

const data = [
  { id: 1, name: "Item 1", email: "example@gmail.com", role: "user" },
  { id: 2, name: "Item 2", email: "example@gmail.com", role: "user" },
  { id: 3, name: "Item 3", email: "example@gmail.com", role: "ADMIN" },
];

export default function Page() {
  const [selectedStatuses, setSelectedStatuses] = React.useState(
    data.map((item) => item.role)
  );

  const handleStatusChange = (index, event) => {
    const newStatuses = [...selectedStatuses];
    newStatuses[index] = event.target.value;
    setSelectedStatuses(newStatuses);
  };

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
                      <MenuItem value="user">User</MenuItem>
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
