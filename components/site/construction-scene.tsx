'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type TowerProps = {
  x: number
  baseY: number
  width: number
  depth: number
  depthY: number
  floors: number
  start: number
  progress: number
  accent?: boolean
}

const clamp = (value: number, min = 0, max = 1) => Math.max(min, Math.min(max, value))

function Tower({ x, baseY, width, depth, depthY, floors, start, progress, accent = false }: TowerProps) {
  const floorHeight = 18
  const heightProgress = clamp((progress - start) / (0.77 - start)) * floors
  const facadeProgress = clamp((progress - 0.65 - start * 0.12) / 0.34) * floors
  const rows = []

  for (let floor = 0; floor < floors; floor += 1) {
    const amount = clamp(heightProgress - floor)
    if (!amount) continue
    const y = baseY - (floor + amount) * floorHeight
    const visibleHeight = amount * floorHeight
    const panel = clamp(facadeProgress - floor)
    const left = x
    const right = x + width
    const topPoints = `${left},${y} ${right},${y} ${right + depth},${y - depthY} ${left + depth},${y - depthY}`
    const sidePoints = `${right},${y} ${right + depth},${y - depthY} ${right + depth},${y + visibleHeight - depthY} ${right},${y + visibleHeight}`

    rows.push(
      <g key={floor} className="construction-floor">
        {panel > 0 && <rect x={left + width * 0.04} y={y + 1} width={width * 0.92} height={Math.max(0, visibleHeight - 1)} fill={accent ? '#b7ac99' : '#d8d0c2'} fillOpacity={0.42 + panel * 0.22} />}
        <polygon points={sidePoints} fill={panel ? '#454845' : 'rgba(32,34,32,.14)'} fillOpacity={panel ? 0.72 : 1} stroke="#777971" strokeOpacity=".72" strokeWidth="1" />
        <rect x={left} y={y} width={width} height={visibleHeight} fill={panel ? '#b8b4a8' : 'rgba(243,240,233,.08)'} fillOpacity={panel ? 0.22 + panel * 0.34 : 1} stroke="#747771" strokeWidth="1" />
        <line x1={left + width * 0.34} y1={y} x2={left + width * 0.34} y2={y + visibleHeight} stroke="#85847f" strokeOpacity=".82" strokeWidth="1" />
        <line x1={left + width * 0.68} y1={y} x2={left + width * 0.68} y2={y + visibleHeight} stroke="#85847f" strokeOpacity=".82" strokeWidth="1" />
        {panel > 0.18 && <line x1={left + width * 0.08} y1={y + visibleHeight * 0.66} x2={left + width * 0.92} y2={y + visibleHeight * 0.66} stroke="#f3f0e9" strokeOpacity={panel * 0.56} strokeWidth=".75" />}
        <line x1={left} y1={y + visibleHeight} x2={right + depth} y2={y + visibleHeight - depthY} stroke="#50534f" strokeWidth="1.25" />
        <polygon points={topPoints} fill="#e9e5dc" fillOpacity=".52" stroke="#777971" strokeWidth="1" />
      </g>,
    )
  }

  const visible = clamp((progress - start) / 0.17)
  const baseWidth = width + depth

  return (
    <g opacity={visible}>
      <polygon points={`${x - 12},${baseY + 7} ${x + width + 24},${baseY + 7} ${x + width + depth + 34},${baseY - depthY + 7} ${x + depth - 3},${baseY - depthY + 7}`} fill="#85847f" fillOpacity=".22" stroke="#9b978f" strokeWidth="1" />
      {rows}
      {heightProgress > 0.25 && progress < 0.69 && (
        <g stroke="#9c7951" strokeOpacity=".72" strokeWidth="1.1" fill="none">
          <line x1={x - 8} y1={baseY - Math.min(heightProgress, floors) * floorHeight} x2={x + width + depth + 10} y2={baseY - Math.min(heightProgress, floors) * floorHeight} />
          <line x1={x + width * 0.08} y1={baseY - Math.min(heightProgress, floors) * floorHeight} x2={x + width * 0.08} y2={baseY + 3} />
        </g>
      )}
      <title>{`Башня: ${Math.min(floors, Math.floor(heightProgress))} из ${floors} этажей`}</title>
      <desc>{`Фасад сформирован на ${Math.round(clamp(facadeProgress / floors) * 100)} процентов`}</desc>
      <rect x={x} y={baseY - floors * floorHeight - depthY} width={baseWidth} height={floorHeight * floors} fill="transparent" aria-hidden="true" />
    </g>
  )
}

function ConstructionArtwork({ progress }: { progress: number }) {
  return (
    <svg className="construction-art" viewBox="0 0 1200 620" role="img" aria-labelledby="construction-title construction-description" preserveAspectRatio="xMidYMid meet">
      <title id="construction-title">Поэтапное строительство архитектурного ансамбля</title>
      <desc id="construction-description">Несколько башен последовательно вырастают из фундамента, а каркас этажей постепенно закрывается фасадами.</desc>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e5e1d8" /><stop offset="1" stopColor="#f3f0e9" /></linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d5d0c6" /><stop offset="1" stopColor="#b9b7af" /></linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8e9996" stopOpacity=".4" /><stop offset="1" stopColor="#e3dfd6" stopOpacity=".18" /></linearGradient>
      </defs>
      <rect width="1200" height="620" fill="url(#sky)" />
      <circle cx="966" cy="114" r="45" fill="#fffdf7" fillOpacity=".52" />
      <g fill="#a8a69f" opacity=".22">
        <path d="M0 340h110v-116h48v77h58v-147h46v67h50v-103h38v222h69v-85h56v85h65V243h43v-48h30v145h83v-73h55v73h45V215h44v125h70v-87h53v87h83v280H0z" />
      </g>
      <g stroke="#b4b1a9" strokeOpacity=".26" strokeWidth="1">
        <path d="M70 281h32m17 26h43m41-74h34m25 40h31m-145-58h24m140-31h32m70 98h44m70-28h34m122 2h45m48 40h43m40-89h27m43 52h36m50-6h36m-980 99h1000" />
      </g>
      <path d="M0 430 1200 390v230H0z" fill="url(#ground)" />
      <g stroke="#9f9c94" strokeOpacity=".3" strokeWidth="1">
        <path d="M-20 489 1200 436M-20 546l1220-52M-20 601l1220-56M146 429 53 620m216-198 23 198m170-204 35 204m166-210 49 210m142-215 64 215m132-220 80 220" />
      </g>
      <g className="construction-foundation" opacity={clamp((progress - 0.04) / 0.16)} fill="#787972" fillOpacity=".35" stroke="#666963" strokeWidth="1">
        <path d="m204 426 140-8 33 15-141 9z" /><path d="m463 410 192-10 37 18-194 11z" /><path d="m757 414 140-8 37 17-142 9z" />
      </g>
      <g className="construction-cranes" opacity={clamp((progress - 0.1) / 0.2)} stroke="#a88b65" strokeOpacity=".7" strokeWidth="1.4" fill="none">
        <path d="M520 410V193h8v217m-26-186h160m-153 0 72 33m80-33-46 24M777 421V263h7v158m-23-130h108m-100 0 49 22" />
        <path d="M524 191h11m-15 31 8 2m-2 61 8 2m-8 62 8 2m258-84h10m-6 45h7" strokeOpacity=".5" />
      </g>
      <g>
        <Tower x={256} baseY={424} width={112} depth={22} depthY={13} floors={9} start={0.2} progress={progress} />
        <Tower x={431} baseY={415} width={160} depth={30} depthY={18} floors={15} start={0.12} progress={progress} accent />
        <Tower x={686} baseY={422} width={122} depth={24} depthY={14} floors={11} start={0.17} progress={progress} />
        <Tower x={852} baseY={429} width={92} depth={20} depthY={12} floors={7} start={0.26} progress={progress} />
      </g>
      <g fill="#484b47" fillOpacity={clamp((progress - 0.82) / 0.18)}>
        <path d="M149 445h20v-15h5v15h22v11h-47zm817-6h22v-13h5v13h20v13h-47z" />
        <circle cx="177" cy="438" r="9" /><circle cx="974" cy="431" r="8" />
      </g>
      <g stroke="#53564f" strokeOpacity={clamp((progress - 0.78) / 0.22)} fill="none" strokeWidth="2">
        <path d="M107 460c10-14 18-14 28 0m950-2c10-16 20-16 30 0m-866-8c8-15 17-15 26 0m503-2c8-15 17-15 26 0" />
      </g>
      <rect width="1200" height="620" fill="url(#glass)" fillOpacity=".07" />
    </svg>
  )
}

const stageForProgress = (progress: number) => {
  if (progress < 0.15) return ['01 / Идея', 'Пустая площадка']
  if (progress < 0.34) return ['02 / Основание', 'Фундамент и контуры']
  if (progress < 0.57) return ['03 / Каркас', 'Этажи поднимаются']
  if (progress < 0.79) return ['04 / Фасад', 'Материал собирает объём']
  return ['05 / Ансамбль', 'Архитектура на месте']
}

export function ConstructionScene() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      setProgress(1)
      return
    }

    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current
        if (!section) return
        const bounds = section.getBoundingClientRect()
        const distance = Math.max(1, section.offsetHeight - window.innerHeight)
        const nextProgress = clamp(-bounds.top / distance)
        setProgress((current) => Math.abs(current - nextProgress) > 0.003 ? nextProgress : current)
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      cancelAnimationFrame(frame)
    }
  }, [])

  const [stage, label] = stageForProgress(progress)

  return (
    <section className="construction-run" ref={sectionRef} aria-label="Сцена строительства, управляемая прокруткой">
      <div className="construction-sticky">
        <div className="construction-copy">
          <span className="eyebrow">Проектирование · строительство · инженерия</span>
          <h2>Города начинаются<br />с идеи.</h2>
          <p>От архитектурной концепции до реализации — продуманно на каждом этапе.</p>
        </div>
        <div className="construction-scene" aria-label={`Этап ${stage}: ${label}`}>
          <ConstructionArtwork progress={progress} />
        </div>
        <div className="construction-stage">
          <div><span className="eyebrow">{stage}</span><p>{label}</p></div>
          <div className="construction-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
        </div>
        <div className={`construction-finale ${progress > 0.84 ? 'is-visible' : ''}`} aria-hidden={progress <= 0.84} inert={progress <= 0.84}>
          <span className="eyebrow">Финальный образ</span>
          <h3>Создаём пространство<br />для будущего.</h3>
          <Link className="button button--dark" href="/contact">Обсудить проект <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
        <span className="construction-side-note">MONOLITH / DEVELOPMENT</span>
      </div>
    </section>
  )
}
