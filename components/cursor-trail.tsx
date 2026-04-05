"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const MOBILE_MAX_W = 768
const RING_SIZE_DEFAULT = 24
const RING_SIZE_HOVER = 60
const DOT_SIZE = 8
const DOT_LERP = 0.15
const MAX_PARTICLES = 50
const PARTICLE_SPEED_THRESHOLD = 2

/** Portfolio `--brand` / qızılı-amber paleti (globals.css ilə uyğun) */
const PARTICLE_PALETTE = [
  "#e8c468",
  "#c5a035",
  "#d4a04a",
  "#f0c14b",
  "#fcd34d",
  "#b45309",
] as const

const BRAND_RING = "#e8c468"
const BRAND_RING_FILL = "rgba(232, 196, 104, 0.28)"

/** Tünd fon (240 12% ~6%) + yüngül trail — layihə fonuna uyğun */
const CANVAS_FADE = "rgba(18, 17, 22, 0.15)"

type Vec2 = { x: number; y: number }

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  color: string
}

function isInteractiveElement(el: Element | null): boolean {
  if (!el || !(el instanceof Element)) return false
  return Boolean(el.closest("a, button, [data-hover]"))
}

export function CursorTrail() {
  const [cursorPos, setCursorPos] = useState<Vec2>({ x: 0, y: 0 })
  const [dotPos, setDotPos] = useState<Vec2>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const [cursorVisible, setCursorVisible] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const prevMouseRef = useRef<Vec2 | null>(null)
  const mouseRef = useRef<Vec2>({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)
  const isMobileRef = useRef(true)

  const checkMobile = useCallback(() => {
    const mobile = window.innerWidth < MOBILE_MAX_W
    setIsMobile(mobile)
    isMobileRef.current = mobile
    if (mobile) {
      document.body.classList.remove("cursor-none")
    }
  }, [])

  useEffect(() => {
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [checkMobile])

  useEffect(() => {
    if (isMobile) return
    document.body.classList.add("cursor-none")
    return () => {
      document.body.classList.remove("cursor-none")
    }
  }, [isMobile])

  useEffect(() => {
    if (isMobile) return

    const onDown = () => setIsClicking(true)
    const onUp = () => setIsClicking(false)

    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("blur", onUp)

    return () => {
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("blur", onUp)
    }
  }, [isMobile])

  useEffect(() => {
    if (isMobile) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const resizeCanvas = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const onMove = (e: MouseEvent) => {
      if (isMobileRef.current) return
      const x = e.clientX
      const y = e.clientY
      mouseRef.current = { x, y }
      setCursorPos({ x, y })
      setCursorVisible(true)

      const target = document.elementFromPoint(x, y)
      setIsHovering(isInteractiveElement(target))

      const prev = prevMouseRef.current
      if (!prev) {
        prevMouseRef.current = { x, y }
        setDotPos({ x, y })
        return
      }

      const speed = Math.hypot(x - prev.x, y - prev.y)
      prevMouseRef.current = { x, y }

      if (speed > PARTICLE_SPEED_THRESHOLD) {
        const count = Math.min(3, Math.floor(speed / 5))
        const parts = particlesRef.current
        for (let i = 0; i < count; i++) {
          if (parts.length >= MAX_PARTICLES) {
            parts.shift()
          }
          const color =
            PARTICLE_PALETTE[Math.floor(Math.random() * PARTICLE_PALETTE.length)] ?? "#c5a035"
          parts.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            size: 3 + Math.random() * 8,
            alpha: 0.8 + Math.random() * 0.2,
            color,
          })
        }
      }
    }

    window.addEventListener("mousemove", onMove)

    const tick = () => {
      if (isMobileRef.current) {
        return
      }

      const m = mouseRef.current
      setDotPos((prev) => ({
        x: prev.x + (m.x - prev.x) * DOT_LERP,
        y: prev.y + (m.y - prev.y) * DOT_LERP,
      }))

      const { width, height } = canvas
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const cssW = width / dpr
      const cssH = height / dpr

      ctx.globalCompositeOperation = "destination-out"
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)"
      ctx.fillRect(0, 0, cssW, cssH)
      ctx.globalCompositeOperation = "source-atop"
      ctx.fillStyle = CANVAS_FADE
      ctx.fillRect(0, 0, cssW, cssH)
      ctx.globalCompositeOperation = "source-over"

      const mx = m.x
      const my = m.y

      const glow = ctx.createRadialGradient(mx, my, 0, mx, my, 150)
      glow.addColorStop(0, "rgba(232, 196, 104, 0.24)")
      glow.addColorStop(0.45, "rgba(197, 160, 53, 0.1)")
      glow.addColorStop(1, "rgba(232, 196, 104, 0)")
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, cssW, cssH)

      const parts = particlesRef.current
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i]!
        p.x += p.vx
        p.y += p.vy
        p.alpha -= 0.02
        p.size *= 0.97
        if (p.alpha <= 0 || p.size < 0.5) {
          parts.splice(i, 1)
        }
      }

      for (const p of particlesRef.current) {
        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.shadowColor = p.color
        ctx.shadowBlur = 20
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      ctx.save()
      ctx.strokeStyle = "rgba(197, 160, 53, 0.55)"
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.arc(mx, my, 30, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [isMobile])

  if (isMobile) return null

  const ringSize = isHovering ? RING_SIZE_HOVER : RING_SIZE_DEFAULT

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-40"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed z-[100]"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      >
        <div
          style={{
            width: ringSize,
            height: ringSize,
            boxSizing: "border-box",
            borderRadius: "50%",
            border: isHovering ? `2px solid ${BRAND_RING}` : "2px solid #ffffff",
            backgroundColor: isHovering ? BRAND_RING_FILL : "transparent",
            transform: `scale(${isClicking ? 0.8 : 1})`,
            transition:
              "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease",
          }}
        />
      </div>
      {cursorVisible ? (
        <div
          className="pointer-events-none fixed z-[100]"
          style={{
            left: dotPos.x,
            top: dotPos.y,
            width: DOT_SIZE,
            height: DOT_SIZE,
            marginLeft: -DOT_SIZE / 2,
            marginTop: -DOT_SIZE / 2,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            mixBlendMode: "difference",
            willChange: "left, top",
          }}
        />
      ) : null}
    </>
  )
}
