import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Dashboard</Link>
            </li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/newEntry'>New Entry</Link></li>
        </ul>
    </nav>
  )
}
