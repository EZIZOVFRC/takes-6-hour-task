import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='detail'>Detail</Link></li>
            <li>Blog</li>
            <li><Link to='shop'>Shop</Link></li>
        </ul>
    </nav>
  )
}

export default Header
