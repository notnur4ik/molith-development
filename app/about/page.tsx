import Image from 'next/image'
import type { Metadata } from 'next'
import { CallToAction, PageIntro, SectionHeading } from '@/components/site/sections'

export const metadata: Metadata = { title: 'О компании', description: 'Философия MONOLITH DEVELOPMENT: внимание к контексту, дисциплина проектирования и долговечность решений.' }

const values = [
  ['01', 'Долгосрочная ценность', 'Архитектура рассматривается не только как образ, но и как среда, которая должна оставаться понятной и уместной со временем.'],
  ['02', 'Уважение к контексту', 'Место, масштаб окружения и сценарии использования становятся отправной точкой проектных решений.'],
  ['03', 'Дисциплина проектирования', 'Ясная логика планировки и структуры помогает удержать целостность на пути от концепции к деталям.'],
  ['04', 'Согласованность команды', 'Архитектурные и инженерные решения развиваются во взаимосвязи, чтобы избежать разрыва между идеей и реализацией.'],
  ['05', 'Внимание к материалу', 'Фактура, свет и способ соединения элементов определяют характер пространства не меньше, чем его форма.'],
  ['06', 'Баланс функции и образа', 'Выразительность имеет смысл, когда она поддерживает повседневное использование и ясную структуру.'],
]

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <PageIntro eyebrow="Философия MONOLITH" title="Форма с внутренней логикой." description="Концептуальный бренд архитектурно-строительной компании, созданный как исследование того, каким может быть последовательный путь от идеи до пространства." />
      <section className="about-hero content-wrap">
        <div className="about-hero__copy">
          <span className="eyebrow">Архитектура как долгосрочная ценность</span>
          <h2>Точность начинается с умения слушать.</h2>
          <p>MONOLITH DEVELOPMENT — вымышленная компания, разработанная для портфолио NOVEN DIGITAL. Её визуальная и смысловая система построена вокруг архитектурной ясности, инженерной дисциплины и уважения к материалу.</p>
          <p>Здесь нет заявлений о завершённых объектах или достижениях. Проект показывает подход и предполагаемый уровень коммуникации бренда.</p>
        </div>
        <div className="about-hero__image"><Image src="/images/hero-monolith.png" alt="Современное каменное здание как образ архитектурной философии Monolith" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
      </section>
      <section className="about-values">
        <div className="content-wrap">
          <SectionHeading eyebrow="Принципы" title="Решения, которые держат целое." description="Набор ориентиров для работы с пространством — без универсальных обещаний и готовых ответов." light />
          <div className="about-values__grid">
            {values.map(([number, title, text]) => <article className="about-value" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>
      <figure className="about-quote"><blockquote>«Сильная архитектура не повышает голос. Она остаётся точной».</blockquote><figcaption>MONOLITH DEVELOPMENT · Концепция бренда</figcaption></figure>
      <CallToAction title="Идея начинается с диалога." />
    </main>
  )
}
