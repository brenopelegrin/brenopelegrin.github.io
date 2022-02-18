import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div class="logo">
          <h3>&lt;brenopelegrin/&gt;</h3>
        </div>
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css"/>
        <div class="links">
          <ul>
            <Link to="/">Início</Link>
            <Link to="/about">Currículo</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/blog">Blog</Link>
            <Link to="#"><i class="fa fa-globe fa-fw"></i> pt-BR</Link>
            <div class="theme-switch-wrapper">
              <i class="fa fa-sun"></i>
              <label class="theme-switch" for="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div class="slider round"></div>
              </label>
              <i class="fa fa-moon"></i>
            </div>
          </ul>
          <div class="dropdown">
            <div class="dropbtn">
              <i class="fa fa-bars"></i>
            </div>
            <div class="dropdown-content">
                <Link to="/">Início</Link>
                <Link to="/about">Currículo</Link>
                <Link to="/projects">Projetos</Link>
                <Link to="/blog">Blog</Link>
                <Link to="#"><i class="fa fa-globe fa-fw"></i> pt-BR</Link>
            </div>
          </div>
        </div>
    </nav>
  )
}
