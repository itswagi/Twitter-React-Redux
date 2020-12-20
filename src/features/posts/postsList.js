import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './postsList.css'
import {selectAllPosts, fetchPosts} from './postsSlice'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'


export const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)

    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)

    useEffect(() => {
        if (postStatus === 'idle'){
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    const timeAgo = (time) => {
        var date = new Date(time)
        var current = new Date()
        return Math.floor(Math.abs(current - date)/(1000*60))
    }

    let renderedPosts

    if(postStatus === 'loading'){
        renderedPosts = (
        <div className="post">
            <div className="postHeader">
                <Skeleton width={250} height={14}/>
            </div>
            <div className="postBody">
                <Skeleton count={2} height={15}/>
            </div>
        </div>
        )
    } else if (postStatus === 'succeeded'){
        renderedPosts = posts.map(post => (
            <div className="post" key={post[0].id}>
                <div className="postHeader">
                    <h2>{post[1].name}</h2>
                    <h3>{post[1].username}</h3>
                    <h4>{timeAgo(post[0].created_at)}m ago</h4>
                </div>
                <div className="postBody">
                    <span>{(post[0].text)}</span>
                </div>
            </div>
        ))
    } else if (postStatus === 'failed'){
        renderedPosts = <div>{error}</div>
    }

    return (
        <SkeletonTheme color="#FDF1E7" highlightColor="#ADD2EB">
            <div className="postsList">
                {renderedPosts}
            </div>
        </SkeletonTheme>
        
    )
}