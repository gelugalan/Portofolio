import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">Gelu</Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Acasă</Link>
            <Link to="/projects" className="nav-link">Proiecte</Link>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Gelu</span>
        </div>
      </footer>
    </div>
  )
}
