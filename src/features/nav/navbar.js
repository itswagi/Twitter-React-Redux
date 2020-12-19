import React from 'react'
import './navbar.css'
import {useDispatch} from 'react-redux'
import {signInUser} from '../users/usersSlice'

export const NavBar = () => {

    const dispatch = useDispatch()

    const signIn = () => {
        dispatch(signInUser())
    }


    return(
        <div className="navbar">
            <button className="signInButton" onClick={signIn} target="_blank"/>
        </div>
    )
}