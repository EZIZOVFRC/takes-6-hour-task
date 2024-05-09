import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <ul>
            <li><Link to='/admin'>Dashboard</Link></li>
            <li><Link to='/admin/products'>Products</Link></li>
            <li><Link to='/admin/users'>Users</Link></li>
            <li><Link to='/admin/add'>Add Page</Link></li>
            
        </ul>
    </nav>
  )
}

export default Header
