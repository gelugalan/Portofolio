import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function Home() {
  return (
    <main className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Salut, eu sunt Gelu</h1>
        <p className="hero__subtitle">Bine ai venit la portofoliul meu. Aici găsești proiectele și experiența mea.</p>
        <div className="hero__actions">
          <Link to="/projects"><Button>Vezi proiecte</Button></Link>
          <a href="#contact"><Button variant="ghost">Contact</Button></a>
        </div>
      </div>
    </main>
  )
}
