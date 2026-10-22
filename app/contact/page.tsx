import type { Metadata } from 'next'
import { ContactForm } from '@/components/site/contact-form'
import { PageIntro } from '@/components/site/sections'

export const metadata: Metadata = { title: 'Обсудить проект', description: 'Расскажите о задаче и масштабе проекта. Контактная форма работает в демонстрационном режиме и не отправляет данные.' }

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <PageIntro eyebrow="Первый разговор" title="Расскажите о вашем проекте." description="Опишите задачу, масштаб и ваши ожидания. Мы поможем определить дальнейшие шаги." />
      <div className="contact-layout content-wrap">
        <aside className="contact-aside">
          <span className="eyebrow">Обратная связь</span>
          <h2>Внимательно изучим вводные.</h2>
          <p>Для концептуального проекта реальные контакты и адрес не указаны. Владелец сайта сможет добавить их перед публикацией.</p>
          <div className="contact-aside__note">Форма ниже проверяет заполнение, но пока не отправляет и не сохраняет данные. Реальный канал обработки заявок не подключён.</div>
        </aside>
        <ContactForm />
      </div>
    </main>
  )
}
