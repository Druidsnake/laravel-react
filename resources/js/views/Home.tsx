import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            Home Screen
            <Link to="/admin/about">About</Link>
        </div>
    )
}

export default Home
