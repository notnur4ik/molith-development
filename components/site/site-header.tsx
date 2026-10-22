'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '/projects', label: 'Проекты' },
  { href: '/services', label: 'Услуги' },
  { href: '/process', label: 'Процесс' },
  { href: '/about', label: 'О компании' },
  { href: '/journal', label: 'Журнал' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const appearance = isHome && !scrolled ? 'is-home' : 'is-light'

  return (
    <header className={`site-header ${appearance}`}>
      <div className="site-header__inner">
        <Link className="wordmark" href="/" aria-label="MONOLITH DEVELOPMENT — главная">
          <span>MONOLITH</span>
          <small>DEVELOPMENT</small>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/contact">
          <span>Обсудить проект</span><ArrowUpRight aria-hidden="true" size={15} />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Мобильная навигация" aria-hidden={!menuOpen}>
        {links.map((link, index) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            <span className="mobile-nav__index">0{index + 1}</span>{link.label}<ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        ))}
        <Link className="mobile-nav__contact" href="/contact" onClick={() => setMenuOpen(false)}>Обсудить проект</Link>
      </nav>
    </header>
  )
}
