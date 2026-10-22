import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { PageIntro } from '@/components/site/sections'
import { journalArticles } from '@/lib/site-data'

export const metadata: Metadata = { title: 'Журнал', description: 'Заметки о современной архитектуре, материале, свете и пространстве.' }

export default function JournalPage() {
  const featured = journalArticles[0]
  return (
    <main id="main-content" className="journal-page">
      <PageIntro eyebrow="Заметки о пространстве" title="Архитектура — в деталях." description="Редакционные материалы о материале, свете и городской среде. Публикации на этой странице — часть концепции бренда." />
      <section className="journal-feature content-wrap">
        <Link className="journal-feature__image" href="/journal/materials-and-architecture" aria-label={`Читать: ${featured.title}`}><Image src={featured.image} alt={featured.alt} fill priority sizes="(max-width: 760px) 100vw, 58vw" /></Link>
        <div className="journal-feature__copy">
          <span className="eyebrow">{featured.category} · {featured.date}</span>
          <h2><Link href="/journal/materials-and-architecture">{featured.title}</Link></h2>
          <p>Материал — не последний штрих, а один из способов думать об архитектуре. Он задаёт ритм, глубину и то, как свет будет вести себя в пространстве.</p>
          <Link className="text-link" href="/journal/materials-and-architecture">Читать статью <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
      </section>
      <section className="content-wrap">
        <div className="section-heading"><span className="eyebrow">Редакция Monolith</span><h2>Другие темы.</h2><p>Короткие концептуальные заметки о решениях, из которых складывается архитектура.</p></div>
        <div className="journal-grid">
          {journalArticles.map((article, index) => (
            <article className="journal-card" key={`${article.title}-${index}`}>
              <Link className="journal-card__image" href="/journal/materials-and-architecture"><Image src={article.image} alt={article.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></Link>
              <div className="journal-card__meta"><span>{article.category}</span><span>{index === 0 ? article.date : 'Концептуальная заметка'}</span></div>
              <h2><Link href="/journal/materials-and-architecture">{article.title}</Link></h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
