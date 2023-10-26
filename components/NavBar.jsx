import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
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