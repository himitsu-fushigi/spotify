import React from 'react'
import './Login.css'
import { loginUri } from './spotify'

export default function Login() {
    return (
        <div className="login ">
            {/* logo */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqquiLWmKKErDDwtoXGVCi-yWXEtcBUYVyOw&usqp=CAU" alt="spotify" />

            {/* login button */}
            <a href={loginUri}>Login with Spotify</a>
        </div>
    )
}
