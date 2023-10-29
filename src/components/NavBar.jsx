import Link from 'next/link'
import React from 'react'
import './Navbar.css'
const NavBar = () => {
  return (
    <nav className='navbar py-3'>
      <Link href={"/"}>
        <h1 className='text-3xl'>Next js</h1>
      </Link>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/" title="Home">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tiendas</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar