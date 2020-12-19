import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectAllPosts = state => state.posts.posts

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://api.twitter.com/2/tweets/search/recent?query=pakistan&user.fields=name,username&expansions=author_id&tweet.fields=created_at', {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
        }
    })
    return response
})

export default postsSlice.reducer