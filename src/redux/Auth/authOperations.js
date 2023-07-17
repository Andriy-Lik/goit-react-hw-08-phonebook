import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const logInUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const logOutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const currentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    
    try {
        setAuthHeader(tokenCurrent);
        const response = await axios.get('/users/current');
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});