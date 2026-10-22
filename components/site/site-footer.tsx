import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <Link className="wordmark wordmark--footer" href="/" aria-label="MONOLITH DEVELOPMENT — главная">
            <span>MONOLITH</span><small>DEVELOPMENT</small>
          </Link>
          <p>Архитектура, проектирование и реализация пространств.</p>
          <span className="concept-note">Концептуальный бренд · дизайн-проект NOVEN DIGITAL</span>
        </div>
        <div className="site-footer__column">
          <span className="eyebrow">Навигация</span>
          <Link href="/projects">Проекты</Link><Link href="/services">Услуги</Link><Link href="/process">Процесс</Link><Link href="/about">О компании</Link><Link href="/journal">Журнал</Link>
        </div>
        <div className="site-footer__column">
          <span className="eyebrow">Направления</span>
          <Link href="/services/architecture">Архитектура</Link><Link href="/services/construction">Строительство</Link><Link href="/services/engineering">Инженерия</Link>
        </div>
        <div className="site-footer__contact">
          <span className="eyebrow">Есть задача?</span>
          <p>Контактные данные предоставляются после подключения владельцем проекта.</p>
          <Link href="/contact" className="footer-contact-link">Связаться с нами <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} MONOLITH DEVELOPMENT</span>
        <span>Концептуальный проект</span>
        <Link href="/privacy">Конфиденциальность</Link>
      </div>
    </footer>
  )
}
