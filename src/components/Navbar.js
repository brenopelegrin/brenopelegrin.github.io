import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css"/>
        <h3>&lt;brenopelegrin/&gt;</h3>
        <div className="links">
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/about">Currículo</Link></li>
            <li><Link to="/projects">Projetos</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="#"><i class="fa fa-globe fa-fw"></i> pt-BR</Link></li>
            <li><Link to="#"><i class="fa fa-moon"></i> Dark </Link></li>
          </ul>
          <div class="dropdown">
            <div class="dropbtn">
              <i class="fa fa-bars"></i>
            </div>
            <div class="dropdown-content">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/about">Currículo</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="#"><i class="fa fa-globe fa-fw"></i> pt-BR</Link></li>
                <li><Link to="#"><i class="fa fa-moon"></i> Dark </Link></li>
            </div>
          </div>
        </div>
    </nav>
  )
}
