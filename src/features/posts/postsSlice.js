import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/tweets/search/recent?query=formula1&user.fields=name,username&expansions=author_id&tweet.fields=created_at', {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
        }
    })
    const data = response.data.data.map((post, i) => [post, response.data.includes.users[i]])
    return data
})

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.posts = state.posts.concat(action.payload)
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const selectAllPosts = state => state.posts.posts



export default postsSlice.reducer