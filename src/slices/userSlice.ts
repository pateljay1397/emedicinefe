import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: string;
}

interface UserState {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  users: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const apiUrl = "https://localhost:7182/api/Admin/userList";
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("User Data", data);
    if (response.ok) {
      return data.listUsers;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error("An error occured while fetching Users");
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch Users";
      });
  },
});

export default userSlice.reducer;
