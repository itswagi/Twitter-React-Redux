import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './postsList.css'
import {selectAllPosts, fetchPosts} from './postsSlice'

export const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)

    const postStatus = useSelector(state => state.posts.status)

    useEffect(() => {
        if (postStatus === 'idle'){
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    const renderedPosts = posts.map(post => (
        <div className="post" key={post[0].id}>
            <div className="postHeader">
                <h2>{post[1].name}</h2>
                <h3>{post[1].username}</h3>
                <h4>{post[0].created_at}</h4>
            </div>
            <div className="postBody">
                <span>{post[0].text}</span>
            </div>
        </div>
    ))

    return (
        <div className="postsList">
            {renderedPosts}
        </div>
    )
}