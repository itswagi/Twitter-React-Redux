import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = []

export const signInUser = createAsyncThunk('users/signInUser', async () => {
    var config = {
        method: 'post',
        url: `https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth/request_token?oauth_consumer_key=${process.env.REACT_APP_API_KEY}`,
        headers: { 
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
            'origin': 'http://localhost:3000/'
        }
    }
    
    var response = await axios(config)
    const data = response.data.split('&')
    console.log(data[0])

    config = {
        method: 'get',
        url: `https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth/authorize?${data[0]}`,
        headers: { 
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
            'origin': 'http://localhost:3000/'
        }
    }

    response = await axios(config)
    
    console.log(response)
    return response.data
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [signInUser.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})

export default usersSlice.reducer