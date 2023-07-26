import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const createUser = createAsyncThunk(
    "authentication/createUser",
    async (payload: { email: string; password: string }, { rejectWithValue }) => {
        try {
            await createUserWithEmailAndPassword(auth, payload.email, payload.password);
            return payload.email;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const googleLogin = createAsyncThunk(
    "authentication/googleLogin",
    async (_, { rejectWithValue }) => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const LoginSlice = createSlice({
    name: "authentication",
    initialState: {
        isLoading: false as boolean,
        user: null as string | null,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(createUser.rejected, (state: any, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(googleLogin.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(googleLogin.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(googleLogin.rejected, (state: any, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default LoginSlice.reducer;