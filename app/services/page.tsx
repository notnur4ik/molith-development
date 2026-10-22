import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import { CallToAction, PageIntro } from '@/components/site/sections'
import { services } from '@/lib/site-data'

export const metadata: Metadata = { title: 'Услуги', description: 'Архитектурное проектирование, строительство и инженерная координация в единой системе.' }

export default function ServicesPage() {
  return (
    <main id="main-content" className="service-collection">
      <PageIntro eyebrow="Направления работы" title="Связанные решения." description="Архитектура, строительство и инженерия рассматриваются как части одной задачи — с ясной логикой и общей ответственностью за результат." />
      <div className="content-wrap">
        {services.map((service, index) => (
          <article className="service-feature" key={service.slug}>
            <div className="service-feature__image"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
            <div className="service-feature__copy">
              <span className="eyebrow">{service.eyebrow}</span>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <p>{service.outcome}</p>
              <Link className="text-link" href={`/services/${service.slug}`}>Подробнее <ArrowUpRight aria-hidden="true" size={16} /></Link>
            </div>
          </article>
        ))}
      </div>
      <CallToAction title="Начнём с вашей задачи." />
    </main>
  )
}
