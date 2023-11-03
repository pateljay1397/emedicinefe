// authSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string | null;
}

interface AuthState {
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

export const signup = createAsyncThunk("auth/signup", async (jsonData: any) => {
  const apiUrl = "https://localhost:7182/api/Users/registration";
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error("An error occurred during signup");
  }
});

export const signin = createAsyncThunk("auth/signin", async (jsonData: any) => {
  const apiUrl = "https://localhost:7182/api/Users/login";
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error("An error occurred during signup");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    // Add other actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message || "Signup failed";
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signin.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message || "Signin failed";
      });
  },
});

export const { setUser, setError } = authSlice.actions;
export default authSlice.reducer;
