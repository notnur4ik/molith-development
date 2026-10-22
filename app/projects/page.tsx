import type { Metadata } from 'next'
import { ProjectFilter } from '@/components/site/project-filter'
import { PageIntro } from '@/components/site/sections'
import { projects } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Проекты',
  description: 'Концептуальные проекты MONOLITH DEVELOPMENT: частные резиденции и современная жилая архитектура.',
}

export default function ProjectsPage() {
  return (
    <main id="main-content" className="portfolio-page">
      <PageIntro eyebrow="Избранные работы · концепции" title="Проекты с чувством места." description="Архитектура частных резиденций и жилых пространств — через материал, масштаб и точную работу с контекстом." />
      <ProjectFilter projects={projects} />
    </main>
  )
}
