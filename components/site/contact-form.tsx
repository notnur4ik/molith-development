'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    setStatus('Это демонстрационный режим: данные не отправлены и не сохранены. Для приёма заявок подключите серверный обработчик и укажите фактические условия обработки данных.')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="contact-name">Ваше имя <span aria-hidden="true">*</span></label>
        <input id="contact-name" name="name" autoComplete="name" placeholder="Как к вам обращаться" required minLength={2} />
      </div>
      <div className="form-field">
        <label htmlFor="contact-method">Телефон или электронная почта <span aria-hidden="true">*</span></label>
        <input id="contact-method" name="contact" autoComplete="email" placeholder="Удобный способ связи" required minLength={5} />
      </div>
      <div className="form-field">
        <label htmlFor="project-type">Тип проекта <span aria-hidden="true">*</span></label>
        <select id="project-type" name="projectType" defaultValue="" required>
          <option value="" disabled>Выберите направление</option>
          <option value="residential">Частная резиденция</option>
          <option value="multi-unit">Жилой объект</option>
          <option value="commercial">Коммерческое пространство</option>
          <option value="other">Другая задача</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="project-scale">Масштаб или бюджет <span>(необязательно)</span></label>
        <input id="project-scale" name="scale" placeholder="Например, площадь или этап" />
      </div>
      <div className="form-field form-field--full">
        <label htmlFor="project-description">Расскажите о задаче <span aria-hidden="true">*</span></label>
        <textarea id="project-description" name="description" placeholder="Контекст, пожелания, важные ограничения" required minLength={12} />
      </div>
      <label className="form-consent">
        <input type="checkbox" name="privacyConsent" required />
        <span>Я ознакомился(-ась) с <Link href="/privacy">информацией о конфиденциальности</Link>. В демо-версии данные не передаются и не сохраняются.</span>
      </label>
      <button className="button button--dark form-submit" type="submit">Проверить форму <ArrowUpRight aria-hidden="true" size={16} /></button>
      {status && <p className="form-status form-status--notice" role="status">{status}</p>}
    </form>
  )
}
