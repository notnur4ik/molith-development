import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CallToAction } from '@/components/site/sections'
import { services } from '@/lib/site-data'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  return service ? { title: service.title, description: service.summary } : { title: 'Услуга не найдена' }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()

  return (
    <main id="main-content" className="service-detail">
      <section className="service-detail__hero">
        <div className="service-detail__copy">
          <span className="eyebrow">{service.eyebrow}</span>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
        </div>
        <div className="service-detail__image"><Image src={service.image} alt={service.alt} fill priority sizes="(max-width: 760px) 100vw, 60vw" /></div>
      </section>
      <section className="service-detail__body content-wrap">
        <div><span className="eyebrow">Объём задач</span><h2>Сначала суть,<br />затем детали.</h2></div>
        <div>
          <p>{service.intro}</p>
          <ul className="service-deliverables">
            {service.details.map((detail, index) => <li key={detail}><span>0{index + 1}</span>{detail}</li>)}
          </ul>
          <div className="service-outcome"><span className="eyebrow">Ориентир результата</span><p>{service.outcome}</p></div>
        </div>
      </section>
      <CallToAction title="Поговорим о задаче?" description="Расскажите о контексте и масштабе проекта — определим, с чего начать." />
    </main>
  )
}
