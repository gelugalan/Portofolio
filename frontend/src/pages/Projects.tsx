import React from 'react'
import Card from '../components/ui/Card'

export default function Projects() {
  return (
    <main className="page">
      <div className="page__content">
        <h2 className="page__title">Proiecte</h2>
        <p className="page__lead">Aici poți începe să adaugi proiectele tale. Folosește această pagină ca schelet.</p>
        <section id="projects" className="projects__list">
          <Card>
            <h3 className="project-card__title">Proiect exemplu</h3>
            <p className="project-card__desc">Descriere scurtă a proiectului. Începe aici cu titlul și descrierea.</p>
          </Card>
        </section>
      </div>
    </main>
  )
}
