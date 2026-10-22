import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CallToAction, ImagePanel, SectionHeading } from '@/components/site/sections'
import { ProjectCard } from '@/components/site/project-card'
import { projects } from '@/lib/site-data'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) return { title: 'Проект не найден' }
  return { title: project.title, description: project.summary, openGraph: { title: `${project.title} — концептуальный проект`, description: project.summary } }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()
  const relatedProjects = projects.filter((item) => item.slug !== project.slug)

  return (
    <main id="main-content" className="project-detail">
      <section className="project-detail-hero">
        <Image src={project.image} alt={project.alt} fill priority sizes="100vw" />
        <div className="project-detail-hero__copy">
          <span className="eyebrow">{project.type} · Концептуальный проект</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </section>
      <section className="detail-overview content-wrap">
        <div>
          <span className="eyebrow">Идея проекта</span>
          <h2>{project.concept}</h2>
        </div>
        <div className="detail-overview__copy">
          <p>{project.challenge}</p>
          <p>{project.solution}</p>
          <div className="detail-facts">
            <div className="detail-fact"><span className="eyebrow">Статус</span><p>{project.location}</p></div>
            <div className="detail-fact"><span className="eyebrow">Направление</span><p>{project.type}</p></div>
            <div className="detail-fact"><span className="eyebrow">Материалы</span><p>{project.material}</p></div>
            <div className="detail-fact"><span className="eyebrow">Пространство</span><p>{project.spatial}</p></div>
          </div>
        </div>
      </section>
      <div className="project-detail-image"><ImagePanel src={project.image} alt={project.alt} caption={`${project.title} · концептуальная архитектурная визуализация`} /></div>
      <section className="detail-story content-wrap">
        <div><span className="eyebrow">Архитектурное решение</span><h2>Точность формы.<br />Свобода опыта.</h2></div>
        <div className="detail-story__body">
          <p>{project.solution}</p>
          <p>{project.spatial}</p>
          <blockquote className="detail-quote">«Материал, свет и пространство работают вместе — без лишних жестов».</blockquote>
        </div>
      </section>
      <section className="detail-related">
        <div className="content-wrap">
          <SectionHeading eyebrow="Продолжить знакомство" title="Другие концепции." />
          <div className="project-grid">
            {relatedProjects.map((item, index) => <ProjectCard key={item.slug} project={item} index={index} />)}
          </div>
        </div>
      </section>
      <CallToAction title="Обсудим ваш проект?" />
    </main>
  )
}
