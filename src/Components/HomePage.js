import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './NavBar'

export default function HomePage() {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="main-title home-page-title">Welcome to App!</h1>
      <Link to="/">
        <button className="primary-button">Log out</button>
      </Link>
    </div>
  )
}
