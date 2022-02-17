import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h3>&lt;brenopelegrin/&gt;</h3>
        <div className="links">
            <Link to="/">Início </Link>
            <Link to="/about">Sobre </Link>
            <Link to="/projects">Projetos </Link>
            <Link to="/blog">Blog </Link>
        </div>
    </nav>
  )
}
