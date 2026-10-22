import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/site-data'

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className={`project-card project-card--${index + 1}`}>
      <Link className="project-card__image" href={`/projects/${project.slug}`} aria-label={`Открыть проект ${project.title}`}>
        <Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) 100vw, 58vw" />
        <span className="project-card__number">0{index + 1}</span>
        <span className="project-card__arrow"><ArrowUpRight aria-hidden="true" size={18} /></span>
      </Link>
      <div className="project-card__meta">
        <div><span className="eyebrow">{project.type} · Концепция</span><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3></div>
        <p>{project.summary}</p>
      </div>
    </article>
  )
}
