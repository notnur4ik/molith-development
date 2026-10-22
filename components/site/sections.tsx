import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro content-wrap">
      <span className="eyebrow page-intro__eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export function CallToAction({ title = 'Есть идея, которую стоит построить?', description = 'Расскажите о проекте. Обсудим задачу, масштаб и возможный путь реализации.' }: { title?: string; description?: string }) {
  return (
    <section className="cta-band">
      <div className="cta-band__inner">
        <span className="eyebrow">Следующий шаг</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="button button--light" href="/contact">Связаться с нами <ArrowUpRight aria-hidden="true" size={16} /></Link>
      </div>
      <span className="cta-band__index" aria-hidden="true">M.</span>
    </section>
  )
}

export function ImagePanel({ src, alt, caption, className = '' }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={`image-panel ${className}`}>
      <div className="image-panel__frame"><Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 70vw" /></div>
      {caption && <figcaption><span>{caption}</span><ArrowDownRight aria-hidden="true" size={15} /></figcaption>}
    </figure>
  )
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="text-link" href={href}>{children}<ArrowUpRight aria-hidden="true" size={16} /></Link>
}
