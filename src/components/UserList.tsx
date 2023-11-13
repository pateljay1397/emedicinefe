import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../slices/userSlice";
import { RootState } from "../store";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Typography,
  Button,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: string;
}

interface UserRowProps {
  user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <TableRow>
        <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.password}</TableCell>
        <TableCell>
          <Button variant="contained" color="primary">
            View Details
          </Button>
        </TableCell>
        <TableCell>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="body2" color="textSecondary">
              Type: {user.type}
            </Typography>
            {/* Add more details or expandable content as needed */}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
