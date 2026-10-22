import type { Metadata } from 'next'
import { CallToAction, PageIntro } from '@/components/site/sections'
import { processSteps } from '@/lib/site-data'

export const metadata: Metadata = { title: 'Процесс', description: 'Этапы реализации архитектурного проекта: от постановки задачи до проверки и завершения.' }

export default function ProcessPage() {
  return (
    <main id="main-content" className="process-page">
      <PageIntro eyebrow="Понятная последовательность" title="Процесс без белых пятен." description="Каждый этап начинается с ясной задачи и заканчивается решением, на которое можно опереться дальше." />
      <div className="process-timeline">
        {processSteps.map((step) => (
          <article className="process-step" key={step.number}>
            <span className="process-step__number" aria-hidden="true">{step.number}</span>
            <div><h2>{step.title}</h2><p>{step.text}</p></div>
          </article>
        ))}
      </div>
      <CallToAction title="У каждого проекта свой первый шаг." description="Обсудим ваши исходные данные и определим подходящую последовательность." />
    </main>
  )
}
