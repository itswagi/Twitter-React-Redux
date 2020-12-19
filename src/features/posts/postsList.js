import React from 'react'
import {useSelector} from 'react-redux'
import './postsList.css'
import {selectAllPosts} from './postsSlice'

export const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <div className="post" key={post.id}>
            <div className="postHeader">
                <h2>{post.name}</h2>
                <h3>{post.id}</h3>
                <h4>{post.timestamp}</h4>
            </div>
            <div className="postBody">
                <span>{post.text}</span>
            </div>
        </div>
    ))

    return (
        <div className="postsList">
            {renderedPosts}
        </div>
    )
}