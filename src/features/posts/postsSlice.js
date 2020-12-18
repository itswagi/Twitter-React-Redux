import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {name: 'Wajahat', id: 'itswagi', timestamp: '7m', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Wajahat', id: 'itswagi', timestamp: '8m', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    {name: 'Wajahat', id: 'itswagi', timestamp: '9m', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer