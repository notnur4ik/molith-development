'use client'

import { useMemo, useState } from 'react'
import { ProjectCard } from './project-card'
import type { Project } from '@/lib/site-data'

const filters = ['Все проекты', 'Жилая архитектура', 'Частные резиденции', 'Коммерческие пространства', 'Концептуальные проекты']

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState(filters[0])
  const visibleProjects = useMemo(() => {
    if (activeFilter === 'Все проекты' || activeFilter === 'Концептуальные проекты') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter, projects])

  return (
    <>
      <div className="filter-row" role="group" aria-label="Фильтр проектов">
        {filters.map((filter) => (
          <button key={filter} type="button" className={`filter-chip ${activeFilter === filter ? 'is-active' : ''}`} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>
      {activeFilter === 'Коммерческие пространства' ? (
        <p className="filter-empty">В этой подборке пока нет концептуальных проектов коммерческих пространств.</p>
      ) : (
        <div className="project-grid project-grid--portfolio">
          {visibleProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      )}
    </>
  )
}
