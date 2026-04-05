"use client"

import { site, nav } from "@/data/site"
import { Menu, X } from "lucide-react"
import { useCallback, useState } from "react"
import { ThemeToggle } from "./theme-toggle"

function scrollToId(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const onNav = useCallback((id: string) => {
    scrollToId(id)
    setOpen(false)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
            setOpen(false)
          }}
          className="group flex items-baseline gap-2 text-left"
        >
          <span className="font-display text-lg font-semibold tracking-tight text-foreground transition group-hover:text-[var(--brand)]">
            {site.name}
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-muted-foreground sm:inline">
            {site.role}
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Əsas menyu">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNav(item.id)}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-muted/80 hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Menyunu bağla" : "Menyunu aç"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border/40 bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobil menyu">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNav(item.id)}
                className="rounded-lg px-3 py-3 text-left text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
