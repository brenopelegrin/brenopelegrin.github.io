import { Link } from 'gatsby'
import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default function Navbar() {
  return (
    <nav>
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css"/>
        <div class="logo">
          <h3>&lt;brenopelegrin/&gt;</h3>
        </div>
        <button class="mobile-nav-toggle" onclick="teste()">
          <span aria-controls="links" aria-expanded="false" class="sr-only">Menu</span>
        </button>
        <ul data-visible="false" id="links" class="links">
            <li>
              <Link aria-hidden="true" to="/">Início</Link>
            </li>
            <li>
              <Link aria-hidden="true" to="/about">Currículo</Link>
            </li>
            <li>
              <Link aria-hidden="true" to="/projects">Projetos</Link>
            </li>
            <li>
              <Link aria-hidden="true" to="/blog">Blog</Link>
            </li>
            <li>
              <Link aria-hidden="true" to="#"><i class="fa fa-globe fa-fw"></i> pt-BR</Link>
            </li>
            <li>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <div aria-hidden="true" class="theme-switch-wrapper">
                  <i class="fa fa-sun"></i>
                  <label class="theme-switch" for="checkbox">
                    <input
                      type="checkbox" id = "checkbox"
                      onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                      checked={theme === 'dark'}
                    />{' '}
                    <div class="slider round"></div>
                  </label>
                  <i class="fa fa-moon"></i>
                </div>
              )}
            </ThemeToggler>
            </li>
        </ul>
    </nav>
  )
}

/*

*/