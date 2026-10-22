import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { ConstructionScene } from '@/components/site/construction-scene'
import { ProjectCard } from '@/components/site/project-card'
import { CallToAction, SectionHeading, TextLink } from '@/components/site/sections'
import { processSteps, projects, services } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'MONOLITH DEVELOPMENT — архитектура, которая определяет будущее',
  description: 'Концептуальный архитектурный проект о создании современных жилых пространств — от идеи до реализации.',
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <Image className="home-hero__image" src="/images/hero-monolith.png" alt="Современное жилое здание из камня и стекла в мягком дневном свете" fill priority sizes="100vw" />
        <div className="home-hero__veil" />
        <div className="home-hero__content content-wrap">
          <span className="eyebrow home-hero__eyebrow">Architecture / Development / Construction</span>
          <h1>Архитектура,<br />которая определяет<br /><em>будущее.</em></h1>
          <p>Проектируем и создаём пространства, в которых архитектурная идея становится реальностью.</p>
          <div className="home-hero__actions">
            <Link className="button button--light" href="/projects">Смотреть проекты <ArrowUpRight aria-hidden="true" size={16} /></Link>
            <Link className="button button--ghost-light" href="/contact">Обсудить проект</Link>
          </div>
        </div>
        <div className="home-hero__foot content-wrap">
          <span>MONOLITH DEVELOPMENT</span>
          <a href="#construction">Листайте, чтобы увидеть процесс <ArrowDown aria-hidden="true" size={15} /></a>
          <span>01 — 07</span>
        </div>
      </section>

      <div id="construction"><ConstructionScene /></div>

      <section className="principles-section">
        <div className="content-wrap">
          <div className="principles-intro">
            <SectionHeading eyebrow="Один замысел · три масштаба" title="Целое начинается с точности деталей." light />
            <p>Архитектура, инженерия и реализация работают как единая система — от первого решения до пространства, которым будут пользоваться.</p>
          </div>
          <div className="principles-grid">
            {[
              ['01', 'Архитектура', 'Формируем ясную идею и пространственную логику, опираясь на контекст и задачу.'],
              ['02', 'Инженерия', 'Согласуем технические решения с планировкой, материалами и характером здания.'],
              ['03', 'Реализация', 'Связываем проект с последовательностью работ и координацией на каждом этапе.'],
            ].map(([number, title, text]) => (
              <article className="principle" key={number}>
                <span className="principle__number">{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="principle__line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="selected-section content-wrap">
        <div className="section-head-row">
          <SectionHeading eyebrow="Выбор редакции · концептуальные проекты" title="Архитектура в контексте." description="Три разных масштаба и характера — объединённые вниманием к месту, материалу и повседневному опыту." />
          <TextLink href="/projects">Все проекты</TextLink>
        </div>
        <div className="project-grid project-grid--home">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </section>

      <section className="services-section">
        <div className="content-wrap services-layout">
          <div className="services-intro">
            <span className="eyebrow">Что мы делаем</span>
            <h2>От замысла<br />до воплощения.</h2>
            <p>Собираем проект вокруг целостного решения, а не отдельных этапов и несвязанных деталей.</p>
            <TextLink href="/services">Все услуги</TextLink>
          </div>
          <div className="services-list">
            {services.map((service, index) => (
              <Link className="service-row" href={`/services/${service.slug}`} key={service.slug}>
                <span className="service-row__number">0{index + 1}</span>
                <span className="service-row__name">{service.title}</span>
                <span className="service-row__summary">{service.summary}</span>
                <ArrowUpRight aria-hidden="true" size={19} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="process-preview content-wrap">
        <div className="section-head-row process-preview__heading">
          <SectionHeading eyebrow="Вместе по шагам" title="Путь, который виден." description="У каждого этапа есть своя задача, результат и связь со следующим решением." />
          <TextLink href="/process">О процессе</TextLink>
        </div>
        <div className="process-preview__list">
          {processSteps.slice(0, 5).map((step) => (
            <div className="process-preview__item" key={step.number}>
              <span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-section__image">
          <Image src="/images/casa-stone.png" alt="Светлая каменная резиденция в саду" fill sizes="(max-width: 760px) 100vw, 56vw" />
        </div>
        <div className="editorial-section__copy">
          <span className="eyebrow">Принцип Monolith</span>
          <h2>Хорошая архитектура начинается с <em>правильных решений.</em></h2>
          <p>Решения о свете, масштабе и материале определяют, как пространство будет ощущаться каждый день.</p>
          <TextLink href="/about">Наш подход</TextLink>
          <span className="editorial-section__index">04 / 07</span>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
