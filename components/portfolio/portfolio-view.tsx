import { site } from "@/data/site"
import { ArrowUpRight, Github, Linkedin, Lock, Mail, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "./site-header"

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

export function PortfolioView() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="hero-glow absolute -left-1/4 top-0 h-[520px] w-[720px] rounded-full opacity-40 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-[480px] w-[600px] rounded-full bg-[var(--glow-2)] opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      </div>

      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              Portfolio
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl sm:leading-[1.06] lg:text-7xl">
              <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-white/65">
                {site.name}
              </span>
              <span className="mt-2 block text-2xl font-normal text-muted-foreground sm:mt-3 sm:text-3xl lg:text-4xl">
                {site.role}
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {site.tagline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-[var(--brand-fg)] shadow-lg shadow-[var(--brand)]/20 transition hover:brightness-110"
              >
                Layihələri gör
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border/80 bg-background/50 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:border-[var(--brand)]/50 hover:text-[var(--brand)]"
              >
                Əlaqə
              </a>
            </div>
           
          </div>
        </section>

        {/* About */}
      

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 border-y border-border/40 bg-muted/10 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="02" title="İş təcrübəsi" />
            <div className="relative space-y-0 pl-2 sm:pl-8">
              <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--brand)]/50 via-border to-transparent sm:left-[31px]" />
              {site.experience.map((job, i) => (
                <article
                  key={`${job.company}-${i}`}
                  className="relative pb-14 pl-10 sm:pb-16 sm:pl-16 last:pb-0"
                >
                  <span className="absolute left-[10px] top-2 flex h-3 w-3 rounded-full border-2 border-background bg-[var(--brand)] shadow-[0_0_12px_var(--brand)] sm:left-[26px]" />
                  <p className="font-mono text-xs font-medium uppercase tracking-wider text-[var(--brand)]">
                    {job.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{job.company}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {job.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="03" title="Seçilmiş layihələr" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {site.projects.map((p) => {
                const hasLink = Boolean(p.href?.trim())
                const cardClass =
                  "group relative flex flex-col rounded-2xl border border-border/50 bg-card/30 p-6 shadow-sm transition hover:border-[var(--brand)]/35 hover:bg-card/50 hover:shadow-md"

                const inner = (
                  <>
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-foreground transition group-hover:text-[var(--brand)]">
                        {p.title}
                      </h3>
                      {hasLink ? (
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-[var(--brand)]" />
                      ) : (
                        <Lock
                          className="h-5 w-5 shrink-0 text-muted-foreground"
                          aria-hidden
                        />
                      )}
                    </div>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </>
                )

                return hasLink ? (
                  <a
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={p.title}
                    className={`${cardClass} cursor-default`}
                    role="article"
                    aria-label={`${p.title} — məxfi layihə, açıq link yoxdur`}
                  >
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 px-4 pb-24 pt-4 sm:px-6 sm:pb-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="04" title="Əlaqə" />
            <div className="grid gap-5 md:grid-cols-2">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/30 p-6 transition hover:border-[var(--brand)]/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/15 text-[var(--brand)]">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    E-poçt
                  </p>
                  <p className="mt-1 font-medium text-foreground group-hover:text-[var(--brand)]">
                    {site.email}
                  </p>
                </div>
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/30 p-6 transition hover:border-[var(--brand)]/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/15 text-[var(--brand)]">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Telefon
                  </p>
                  <p className="mt-1 font-medium text-foreground group-hover:text-[var(--brand)]">
                    {site.phone}
                  </p>
                </div>
              </a>
            </div>

           
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. Bütün hüquqlar qorunur.
          </p>
          <p className="font-mono text-xs">Statik portfolio · Next.js</p>
        </div>
      </footer>
    </div>
  )
}
