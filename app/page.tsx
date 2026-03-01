"use client";

import { useState } from "react";
import {
  Play,
  AlertCircle,
  TrendingDown,
  Clock,
  ArrowRight,
  Lightbulb,
  Layers,
  Zap,
  CheckCircle,
  Star,
  Award,
  Video,
  MessageSquare,
  BookOpen,
  FileText,
  Shield,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const CTA_URL = "https://whop.com/checkout-placeholder";

// ─── Reusable CTA Button ────────────────────────────────────────────────────
function CtaButton({
  label = "Unisciti alla Mentorship",
  fullWidth = false,
  size = "default",
}: {
  label?: string;
  fullWidth?: boolean;
  size?: "default" | "lg";
}) {
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-neon inline-flex items-center justify-center gap-2 rounded-xl font-bold text-white tracking-wide
        ${fullWidth ? "w-full" : ""}
        ${size === "lg" ? "px-10 py-5 text-lg" : "px-8 py-4 text-base"}
        min-h-[52px]`}
    >
      {label}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
}

// ─── Pain Point Card ────────────────────────────────────────────────────────
interface PainCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
}

function PainCard({ icon, title, body }: PainCardProps) {
  return (
    <div className="card-glow rounded-2xl p-6 flex flex-col gap-3 min-w-[78vw] max-w-[320px] snap-start flex-shrink-0 sm:min-w-[300px]">
      <div className="w-11 h-11 rounded-xl bg-shadow-grey/60 flex items-center justify-center text-dark-goldenrod flex-shrink-0">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-[var(--text-primary)] leading-snug">
        {title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        {body}
      </p>
    </div>
  );
}

// ─── Testimonial Card ───────────────────────────────────────────────────────
interface TestimonialCardProps {
  initials: string;
  name: string;
  role: string;
  body: string;
}

function TestimonialCard({ initials, name, role, body }: TestimonialCardProps) {
  return (
    <div className="card-glow rounded-2xl p-6 flex flex-col gap-4 min-w-[78vw] max-w-[320px] snap-start flex-shrink-0 sm:min-w-[300px]">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-shadow-grey/60 border border-dark-goldenrod/40 flex items-center justify-center text-eggshell font-bold text-sm flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-[var(--text-primary)] text-sm leading-snug">
            {name}
          </p>
          <p className="text-xs text-[var(--text-muted)]">{role}</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        {body}
      </p>
    </div>
  );
}

// ─── FAQ Accordion Item ─────────────────────────────────────────────────────
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-glow rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left min-h-[64px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-goldenrod focus-visible:ring-inset"
      >
        <span className="font-semibold text-[var(--text-primary)] text-sm sm:text-base leading-snug">
          {question}
        </span>
        <ChevronDown
          aria-hidden
          className={`w-5 h-5 text-[var(--text-muted)] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-white/5">
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-4">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Section Divider ────────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-dark-goldenrod/40 to-transparent" />
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <main className="min-h-screen pb-36 md:pb-0">
        {/* ── BLOCK 1: HERO / VSL ───────────────────────────────────────── */}
        <section className="relative overflow-hidden section-noise px-4 pt-16 pb-12 md:pt-24 md:pb-20 flex flex-col items-center text-center">
          {/* Background radial glow */}
          <div
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] rounded-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, #AE852E 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl w-full mx-auto flex flex-col items-center gap-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-shadow-grey/70 border border-dark-goldenrod/50 rounded-full px-4 py-1.5 text-sm font-medium text-eggshell">
              <Zap className="w-3.5 h-3.5" />
              Mentorship Esclusiva · Posti Limitati
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              <span className="gradient-text">
                Diventa un Designer
                <br />
                Professionista
              </span>
              <br />
              <span className="text-[var(--text-primary)]">
                in 90 Giorni — Garantito.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl">
              Smetti di girare in tondo su YouTube. Con questa mentorship
              one&#8209;to&#8209;one costruirai un portfolio che attira clienti,
              imparerai le strategie che i pro non condividono e inizierai a
              fatturare prima di quanto credi.
            </p>

            {/* CTA */}
            <CtaButton size="lg" />

            <p className="text-xs text-[var(--text-muted)]">
              Nessun contratto. Cancella quando vuoi.
            </p>

            {/* VSL Video Placeholder */}
            <div className="w-full mt-4 rounded-2xl overflow-hidden border border-dark-goldenrod/30 shadow-[0_0_40px_rgba(174,133,46,0.15)]">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <div className="absolute inset-0 bg-[var(--bg-card)] flex flex-col items-center justify-center gap-4">
                  {/* Pulsing play button */}
                  <button
                    aria-label="Riproduci il video"
                    className="group relative w-20 h-20 rounded-full btn-neon flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-dark-goldenrod"
                  >
                    <span className="absolute inline-flex h-full w-full rounded-full bg-dark-goldenrod opacity-30 animate-ping" />
                    <Play className="w-8 h-8 text-white fill-white translate-x-0.5" />
                  </button>
                  <span className="text-sm text-[var(--text-muted)] font-medium tracking-wide uppercase">
                    Guarda il video · 3 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 2: PROBLEM ─────────────────────────────────────────── */}
        <section className="relative px-4 py-12 md:py-20 overflow-hidden">
          <div className="max-w-2xl mx-auto">
            {/* Section header */}
            <div className="mb-8 md:mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-dark-goldenrod mb-3">
                Ti Riconosci?
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Il Problema di{" "}
                <span className="gradient-text">Quasi Ogni Designer</span>
                <br />
                che Vuole Crescere
              </h2>
            </div>

            {/* Swipeable cards row — horizontal scroll on mobile, grid on md+ */}
            <div className="md:hidden -mx-4 px-4">
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
                <PainCard
                  icon={<TrendingDown className="w-5 h-5" />}
                  title="Impari tanto, guadagni poco"
                  body="Segui corsi su corsi, guardi ore di tutorial, ma il tuo portfolio è fermo e i clienti non arrivano. Tutta teoria, zero risultati concreti."
                />
                <PainCard
                  icon={<Clock className="w-5 h-5" />}
                  title="Perdi anni a sbagliare da solo"
                  body="Senza una guida che ha già percorso la strada, sprechi mesi su errori che un mentor avrebbe risolto in cinque minuti di feedback."
                />
                <PainCard
                  icon={<AlertCircle className="w-5 h-5" />}
                  title="Non sai da dove cominciare"
                  body="Il mercato è vasto: brand identity, UI, social media. Senza una direzione chiara rimani bloccato nel mezzo, senza specializzarti mai davvero."
                />
                {/* Spacer for last card peek */}
                <div className="w-4 flex-shrink-0" aria-hidden />
              </div>
              {/* Scroll indicator dots */}
              <div className="flex justify-center gap-1.5 mt-2" aria-hidden>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-1.5 rounded-full transition-all ${i === 0 ? "w-4 bg-dark-goldenrod" : "w-1.5 bg-shadow-grey"}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-3 gap-5">
              <PainCard
                icon={<TrendingDown className="w-5 h-5" />}
                title="Impari tanto, guadagni poco"
                body="Segui corsi su corsi, guardi ore di tutorial, ma il tuo portfolio è fermo e i clienti non arrivano. Tutta teoria, zero risultati concreti."
              />
              <PainCard
                icon={<Clock className="w-5 h-5" />}
                title="Perdi anni a sbagliare da solo"
                body="Senza una guida che ha già percorso la strada, sprechi mesi su errori che un mentor avrebbe risolto in cinque minuti di feedback."
              />
              <PainCard
                icon={<AlertCircle className="w-5 h-5" />}
                title="Non sai da dove cominciare"
                body="Il mercato è vasto: brand identity, UI, social media. Senza una direzione chiara rimani bloccato nel mezzo, senza specializzarti mai davvero."
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 3: OPPORTUNITY (NEW MECHANISM) ─────────────────────── */}
        <section className="relative px-4 py-12 md:py-20 overflow-hidden">
          {/* Subtle side glow */}
          <div
            aria-hidden
            className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #AE852E, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-shadow-grey/60 border border-dark-goldenrod/40 rounded-full px-4 py-1.5 text-sm font-medium text-eggshell mb-6">
              <Lightbulb className="w-3.5 h-3.5" />
              La Nuova Via
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight mb-6">
              Non È Questione di{" "}
              <span className="line-through text-[var(--text-muted)]">
                Talento
              </span>
              <br />
              È Questione di{" "}
              <span className="gradient-text">Sistema</span>
            </h2>

            <div className="space-y-5 text-[var(--text-secondary)] text-base leading-relaxed">
              <p>
                I designer che guadagnano bene non sono necessariamente i più
                talentuosi. Seguono un{" "}
                <strong className="text-[var(--text-primary)]">
                  metodo preciso e replicabile
                </strong>
                : sanno quali nicchie pagano di più, come posizionarsi, come
                presentare il proprio lavoro e come chiudere i clienti senza
                sentirsene a disagio.
              </p>
              <p>
                Il problema è che questo sistema non si insegna sui corsi
                online. Si trasmette attraverso{" "}
                <strong className="text-[var(--text-primary)]">
                  feedback diretto, esperienza reale e una guida che ci è già
                  passata
                </strong>
                .
              </p>
              <p>
                Ecco perché ho creato questo percorso: per comprimere anni di
                tentativi ed errori in un cammino strutturato, dove ogni passo è
                calibrato sulla tua situazione specifica.
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Metodo strutturato in 90 giorni",
                "Feedback personalizzato",
                "Nicchie ad alto reddito",
                "Portfolio che converte",
                "Acquisizione clienti",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-shadow-grey/50 border border-dark-goldenrod/40 text-eggshell text-sm font-medium px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 4: BRIDGE ──────────────────────────────────────────── */}
        <section className="relative px-4 py-12 md:py-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #AE852E, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-shadow-grey/60 border border-dark-goldenrod/40 rounded-full px-4 py-1.5 text-sm font-medium text-eggshell mb-6">
              <Layers className="w-3.5 h-3.5" />
              Il Ponte verso la Soluzione
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight mb-6">
              E se Potessi Saltare{" "}
              <span className="gradient-text">
                i 3 Anni di Errori
              </span>{" "}
              che Ho Fatto Io?
            </h2>

            <div className="space-y-5 text-[var(--text-secondary)] text-base leading-relaxed">
              <p>
                Ho passato anni a sbagliare prezzi, perdere clienti per
                proposte sbagliate, costruire un portfolio che non comunicava
                nulla di rilevante. Ho imparato nel modo più costoso: da solo,
                a tentativi.
              </p>
              <p>
                Poi ho trovato il metodo giusto. E nel giro di pochi mesi ho
                trasformato la mia carriera:{" "}
                <strong className="text-[var(--text-primary)]">
                  clienti migliori, tariffe più alte, lavoro più soddisfacente
                </strong>
                .
              </p>
              <p>
                Con questa mentorship ti metto direttamente nelle mani tutto
                quello che avrei voluto sapere fin dall'inizio. Non teoria — un
                percorso operativo, passo dopo passo, con me al tuo fianco a
                guidarti in ogni fase.
              </p>
            </div>

            {/* Before / After visual */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="card-glow rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-red-400/80 mb-3">
                  Prima
                </p>
                <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
                  {[
                    "Tutorial infiniti, zero direzione",
                    "Portfolio generico e ignorato",
                    "Prezzi troppo bassi per paura",
                    "Clienti difficili e mal paganti",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500 flex-shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-glow rounded-2xl p-5 border-dark-goldenrod/40">
                <p className="text-xs font-bold uppercase tracking-widest text-dark-goldenrod mb-3">
                  Dopo
                </p>
                <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
                  {[
                    "Metodo chiaro e risultati misurabili",
                    "Portfolio su nicchia che converte",
                    "Tariffe da professionista",
                    "Clienti ideali che ti cercano",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-dark-goldenrod flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA inside block */}
            <div className="mt-10 flex flex-col items-center gap-3 text-center">
              <CtaButton size="lg" />
              <p className="text-sm text-[var(--text-muted)]">
                Inizia oggi — i posti disponibili si esauriscono rapidamente.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 5: VALUE PROPOSITION ───────────────────────────────── */}
        <section className="relative px-4 py-12 md:py-20 overflow-hidden">
          {/* Background glow */}
          <div
            aria-hidden
            className="absolute right-0 top-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #AE852E, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-dark-goldenrod mb-3">
                Cosa Impari
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Tutto Quello che Ti Serve per{" "}
                <span className="gradient-text">Diventare un Pro</span>
              </h2>
              <p className="mt-4 text-[var(--text-secondary)] text-base leading-relaxed max-w-lg mx-auto">
                Un percorso strutturato che copre ogni aspetto della carriera da
                designer freelance — dalla tecnica alla gestione dei clienti.
              </p>
            </div>

            {/* Checkmark grid — 1 col on mobile, 2 col on md+ */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Portfolio su nicchia",
                  body: "Costruisci un portfolio specializzato che parla direttamente ai clienti giusti e converte le visite in richieste.",
                },
                {
                  title: "Nicchie ad alto reddito",
                  body: "Identifica i settori più redditizi per il tuo profilo e posizionati come lo specialista di riferimento.",
                },
                {
                  title: "Prezzi da professionista",
                  body: "Imposta tariffe che riflettono il tuo valore reale, senza paura di perdere il cliente.",
                },
                {
                  title: "Acquisizione clienti",
                  body: "Un sistema di outreach testato e replicabile per trovare clienti costantemente, senza affidarti al passaparola.",
                },
                {
                  title: "Proposte che si vendono da sole",
                  body: "Scrivi offerte commerciali chiare e persuasive che accompagnano il cliente verso il sì.",
                },
                {
                  title: "Gestione revisioni e clienti",
                  body: "Gestisci feedback, richieste fuori scope e clienti difficili con autorevolezza e protocolli chiari.",
                },
                {
                  title: "Brand personale online",
                  body: "Struttura la tua presenza sui social e sul web per attrarre opportunità in modo passivo.",
                },
                {
                  title: "Automazione del flusso",
                  body: "Identifica le operazioni ripetitive da automatizzare per lavorare meno ore guadagnando di più.",
                },
              ].map(({ title, body }) => (
                <li
                  key={title}
                  className="card-glow rounded-2xl p-5 flex items-start gap-4"
                >
                  <CheckCircle className="w-5 h-5 text-dark-goldenrod flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] text-sm mb-1">
                      {title}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 6: TESTIMONIALS ─────────────────────────────────────── */}
        <section className="relative px-4 py-12 md:py-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute -left-40 bottom-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #AE852E, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-dark-goldenrod mb-3">
                Cosa Dicono
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Risultati{" "}
                <span className="gradient-text">Reali da Designer Reali</span>
              </h2>
            </div>

            {/* Mobile: swipeable carousel */}
            <div className="md:hidden -mx-4 px-4">
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
                <TestimonialCard
                  initials="MR"
                  name="Marco R."
                  role="Brand Designer, Milano"
                  body="Dopo 2 mesi ho chiuso il mio primo cliente a 1.500€. Non pensavo fosse possibile così in fretta. Il metodo di acquisizione clienti che mi ha insegnato il mentor ha cambiato tutto."
                />
                <TestimonialCard
                  initials="GT"
                  name="Giulia T."
                  role="UI/UX Designer, Roma"
                  body="Non credevo di riuscire a specializzarmi così in fretta. Ora ho una nicchia precisa, un portfolio che converte e clienti che mi contattano invece del contrario."
                />
                <TestimonialCard
                  initials="LM"
                  name="Luca M."
                  role="Graphic Designer, Torino"
                  body="Il feedback diretto sulle mie proposte commerciali ha cambiato tutto. Finalmente capisco cosa vuole il mercato e come comunicare il mio valore senza sentirsene a disagio."
                />
                {/* Spacer */}
                <div className="w-4 flex-shrink-0" aria-hidden />
              </div>
              {/* Scroll indicator dots */}
              <div className="flex justify-center gap-1.5 mt-2" aria-hidden>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-1.5 rounded-full transition-all ${i === 0 ? "w-4 bg-dark-goldenrod" : "w-1.5 bg-shadow-grey"}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: 3-col grid */}
            <div className="hidden md:grid grid-cols-3 gap-5">
              <TestimonialCard
                initials="MR"
                name="Marco R."
                role="Brand Designer, Milano"
                body="Dopo 2 mesi ho chiuso il mio primo cliente a 1.500€. Non pensavo fosse possibile così in fretta. Il metodo di acquisizione clienti che mi ha insegnato il mentor ha cambiato tutto."
              />
              <TestimonialCard
                initials="GT"
                name="Giulia T."
                role="UI/UX Designer, Roma"
                body="Non credevo di riuscire a specializzarmi così in fretta. Ora ho una nicchia precisa, un portfolio che converte e clienti che mi contattano invece del contrario."
              />
              <TestimonialCard
                initials="LM"
                name="Luca M."
                role="Graphic Designer, Torino"
                body="Il feedback diretto sulle mie proposte commerciali ha cambiato tutto. Finalmente capisco cosa vuole il mercato e come comunicare il mio valore senza sentirsene a disagio."
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 7: MENTOR HISTORY ───────────────────────────────────── */}
        <section className="relative px-4 py-12 md:py-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #AE852E, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="mb-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-shadow-grey/60 border border-dark-goldenrod/40 rounded-full px-4 py-1.5 text-sm font-medium text-eggshell mb-6">
                <Award className="w-3.5 h-3.5" />
                Il Tuo Mentor
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Chi Ti Guiderà in{" "}
                <span className="gradient-text">Questo Percorso</span>
              </h2>
            </div>

            {/* Mobile-first: image on top, bio below. md: side-by-side */}
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              {/* Image placeholder */}
              <div className="w-full md:w-64 md:flex-shrink-0">
                <div className="relative w-full md:w-64 aspect-square rounded-2xl overflow-hidden border border-dark-goldenrod/30 shadow-[0_0_40px_rgba(174,133,46,0.15)]">
                  <div className="absolute inset-0 bg-[var(--bg-card)] flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-shadow-grey/70 border border-dark-goldenrod/40 flex items-center justify-center">
                      <span className="text-3xl font-black text-eggshell select-none">
                        M
                      </span>
                    </div>
                    <span className="text-xs text-[var(--text-muted)] font-medium tracking-wide uppercase">
                      Foto del Mentor
                    </span>
                  </div>
                  {/* Decorative corner glow */}
                  <div
                    aria-hidden
                    className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, #AE852E, transparent 70%)",
                    }}
                  />
                </div>

                {/* Quick stats below image */}
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    { value: "5+", label: "Anni di esperienza" },
                    { value: "80+", label: "Studenti mentored" },
                    { value: "€1M+", label: "Revenue generata" },
                  ].map(({ value, label }) => (
                    <div
                      key={label}
                      className="card-glow rounded-xl p-3 flex flex-col gap-1"
                    >
                      <span className="text-lg font-black gradient-text leading-none">
                        {value}
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)] leading-tight">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio text */}
              <div className="flex flex-col gap-5 text-[var(--text-secondary)] text-base leading-relaxed">
                <p>
                  Ciao, sono{" "}
                  <strong className="text-[var(--text-primary)]">
                    [Nome Mentor]
                  </strong>
                  , designer freelance con oltre 5 anni di esperienza nel
                  mercato italiano ed europeo. Ho lavorato con brand di moda,
                  tech startup e agenzie internazionali costruendo un portfolio
                  che parla chiaro: specializzazione e posizionamento vincono
                  sempre sul talento grezzo.
                </p>
                <p>
                  Ho iniziato esattamente come te — senza contatti, senza un
                  metodo, pagando prezzi da fame e perdendo clienti per
                  proposte sbagliate. Ho impiegato{" "}
                  <strong className="text-[var(--text-primary)]">
                    tre anni a capire da solo
                  </strong>{" "}
                  ciò che oggi insegno in 90 giorni.
                </p>
                <p>
                  Ho già accompagnato più di 80 designer a trasformare la loro
                  carriera: dal primo cliente pagato fino a pacchetti da
                  3.000€+. Il metodo funziona perché è costruito su{" "}
                  <strong className="text-[var(--text-primary)]">
                    casi reali, feedback diretto e zero teorie inutili
                  </strong>
                  .
                </p>

                {/* Credential pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    "Brand Identity",
                    "UI/UX Design",
                    "Freelance Strategy",
                    "Client Acquisition",
                    "Pricing Psychology",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-shadow-grey/50 border border-dark-goldenrod/40 text-eggshell text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA inside block */}
            <div className="mt-10 flex flex-col items-center gap-3 text-center">
              <CtaButton size="lg" />
              <p className="text-sm text-[var(--text-muted)]">
                Lavora direttamente con me — posti limitati ogni mese.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 8: THE PRODUCT ──────────────────────────────────────── */}
        <section className="relative px-4 py-12 md:py-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[120%] h-64 opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, #AE852E, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-dark-goldenrod mb-3">
                Cosa Ottieni
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                La Mentorship{" "}
                <span className="gradient-text">in Dettaglio</span>
              </h2>
              <p className="mt-4 text-[var(--text-secondary)] text-base max-w-lg mx-auto">
                Non un corso pre-registrato. Un percorso vivo, costruito
                attorno a te, con accesso diretto al mentor.
              </p>
            </div>

            {/* 2-col on mobile, 3-col on md+ */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <Video className="w-5 h-5" />,
                  title: "Chiamate Settimanali",
                  body: "Sessioni live 1-to-1 ogni settimana per analizzare i tuoi progressi, risolvere blocchi e pianificare i prossimi passi.",
                },
                {
                  icon: <MessageSquare className="w-5 h-5" />,
                  title: "Accesso Discord",
                  body: "Canale privato per domande, feedback rapidi tra le chiamate e accesso alla community di altri designer in percorso.",
                },
                {
                  icon: <BookOpen className="w-5 h-5" />,
                  title: "Materiale Esclusivo",
                  body: "Guide, checklist e risorse operative costruite sul metodo — niente contenuti riciclati dal web.",
                },
                {
                  icon: <CheckCircle className="w-5 h-5" />,
                  title: "Feedback Portfolio",
                  body: "Review dettagliata del tuo portfolio esistente e supporto passo-passo per costruire quello nuovo.",
                },
                {
                  icon: <FileText className="w-5 h-5" />,
                  title: "Template & Swipe File",
                  body: "Proposte commerciali, email di outreach e script per le call con i clienti già pronti da adattare.",
                },
                {
                  icon: <Zap className="w-5 h-5" />,
                  title: "Supporto Illimitato",
                  body: "Messaggi diretti senza limite di numero. Se sei bloccato tra una sessione e l'altra, sono qui.",
                },
              ].map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="card-glow rounded-2xl p-5 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-shadow-grey/60 flex items-center justify-center text-dark-goldenrod flex-shrink-0">
                    {icon}
                  </div>
                  <p className="font-bold text-[var(--text-primary)] text-sm leading-snug">
                    {title}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 9: THE OFFER / PRICING ─────────────────────────────── */}
        <section className="relative px-4 py-12 md:py-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #AE852E, transparent 65%)",
            }}
          />
          <div className="relative z-10 max-w-lg mx-auto">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-dark-goldenrod mb-3">
                L&apos;Offerta
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Tutto Incluso,{" "}
                <span className="gradient-text">Nessuna Sorpresa</span>
              </h2>
            </div>

            {/* Pricing card */}
            <div
              className="rounded-3xl p-px"
              style={{
                background:
                  "linear-gradient(135deg, rgba(174,133,46,0.7) 0%, rgba(174,133,46,0.3) 50%, rgba(174,133,46,0.7) 100%)",
                boxShadow:
                  "0 0 60px rgba(174,133,46,0.25), 0 0 120px rgba(174,133,46,0.1)",
              }}
            >
              <div className="bg-[var(--bg-card)] rounded-[calc(1.5rem-1px)] p-7 flex flex-col gap-6">
                {/* Badge */}
                <div className="inline-flex self-start items-center gap-2 bg-shadow-grey/70 border border-dark-goldenrod/50 rounded-full px-3 py-1 text-xs font-bold text-dark-goldenrod uppercase tracking-widest">
                  <Zap className="w-3 h-3" />
                  Più Popolare
                </div>

                {/* Price */}
                <div className="flex items-end gap-3">
                  <div>
                    <p className="text-sm text-[var(--text-muted)] line-through mb-1">
                      €497/mese
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black gradient-text leading-none">
                        €297
                      </span>
                      <span className="text-[var(--text-muted)] text-base">
                        /mese
                      </span>
                    </div>
                  </div>
                  <span className="mb-1 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full">
                    -40% Lancio
                  </span>
                </div>

                {/* Included list */}
                <ul className="space-y-3">
                  {[
                    "Chiamate 1-to-1 settimanali",
                    "Accesso Discord privato",
                    "Materiale & guide esclusive",
                    "Feedback portfolio illimitato",
                    "Template proposte + script outreach",
                    "Supporto diretto via messaggi",
                    "Garanzia 30 giorni soddisfatti o rimborsati",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-dark-goldenrod flex-shrink-0" />
                      <span className="text-sm text-[var(--text-secondary)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="h-px bg-white/5" />

                {/* CTA */}
                <div className="flex flex-col gap-3">
                  <CtaButton label="Iscriviti Ora" fullWidth size="lg" />
                  <p className="text-center text-xs text-[var(--text-muted)]">
                    Pagamento sicuro · Cancella quando vuoi · Posti limitati
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 10: WARRANTY ───────────────────────────────────────── */}
        <section className="px-4 py-12 md:py-16">
          <div className="max-w-lg mx-auto flex flex-col items-center text-center gap-5">
            {/* Badge */}
            <div className="w-20 h-20 rounded-full bg-[var(--bg-card)] border border-dark-goldenrod/30 flex items-center justify-center shadow-[0_0_30px_rgba(174,133,46,0.15)]">
              <Shield className="w-9 h-9 text-dark-goldenrod" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
              Garanzia{" "}
              <span className="gradient-text">30 Giorni</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-md">
              Se entro i primi 30 giorni non sei soddisfatto al 100% del
              percorso, ti restituiamo l&apos;intero importo senza domande. Zero
              rischi, zero burocrazia. Inizia con la sicurezza assoluta che il
              tuo investimento è protetto.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-dark-goldenrod">
              <CheckCircle className="w-4 h-4" />
              Rimborso garantito entro 48 ore dalla richiesta
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 11: FUTURE PACING ──────────────────────────────────── */}
        <section className="relative px-4 py-12 md:py-20 overflow-hidden section-noise">
          <div
            aria-hidden
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, #AE852E, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
            <Sparkles className="w-8 h-8 text-dark-goldenrod" />
            <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
              Immagina Dove Sarai{" "}
              <span className="gradient-text">Fra 90 Giorni</span>
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)] text-base leading-relaxed max-w-xl">
              <p>
                Il tuo portfolio parla a una nicchia precisa. I clienti
                giusti ti contattano e tu sai esattamente come rispondere, come
                quotare, come chiudere.
              </p>
              <p>
                Mandi la prima proposta da{" "}
                <strong className="text-[var(--text-primary)]">
                  professionista
                </strong>
                . Il cliente dice sì. Quella sera guardi il bonifico arrivare e
                pensi: "Potevo farlo prima."
              </p>
              <p>
                Questo non è un sogno lontano — è il risultato prevedibile di
                un metodo che ha già funzionato per oltre 80 designer. L&apos;unica
                variabile sei{" "}
                <strong className="text-[var(--text-primary)]">tu</strong> e la
                decisione che prendi oggi.
              </p>
            </div>
            <CtaButton size="lg" />
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 12: OBJECTIONS ─────────────────────────────────────── */}
        <section className="px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-dark-goldenrod mb-3">
                Hai Qualche Dubbio?
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Le Obiezioni Più Comuni —{" "}
                <span className="gradient-text">Risposta Diretta</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  emoji: "⏱",
                  title: "«Non ho tempo»",
                  body: "Il percorso è pensato per chi lavora o studia. Bastano 5–7 ore a settimana. Le sessioni si pianificano insieme in base alla tua disponibilità. La struttura si adatta a te, non il contrario.",
                },
                {
                  emoji: "🎨",
                  title: "«Non sono abbastanza bravo»",
                  body: "Non servono anni di esperienza. Molti degli studenti hanno iniziato da zero. Il metodo ti porta dove devi arrivare, partendo esattamente da dove sei adesso — senza scuse, senza filtri.",
                },
                {
                  emoji: "💸",
                  title: "«È troppo costoso»",
                  body: "Un solo cliente acquisito grazie al metodo ripaga l'intera mentorship. E la garanzia 30 giorni azzera il rischio. La vera domanda è: quanto ti costa ogni mese restare fermo?",
                },
              ].map(({ emoji, title, body }) => (
                <div
                  key={title}
                  className="card-glow rounded-2xl p-6 flex flex-col gap-4"
                >
                  <span className="text-3xl" role="img" aria-label={title}>
                    {emoji}
                  </span>
                  <h3 className="font-bold text-[var(--text-primary)] text-base leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 13: FAQ ACCORDION ──────────────────────────────────── */}
        <section className="px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-dark-goldenrod mb-3">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Domande{" "}
                <span className="gradient-text">Frequenti</span>
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              <FaqItem
                question="Quanto dura la mentorship e posso cancellarmi?"
                answer="La mentorship è mensile e puoi cancellarla in qualsiasi momento senza penali. Non ci sono contratti o vincoli a lungo termine. Molti studenti scelgono di continuare perché i risultati si moltiplicano nel tempo, ma la scelta è sempre tua."
              />
              <FaqItem
                question="Quante ore a settimana devo dedicarci?"
                answer="Il carico minimo consigliato è di 5–7 ore settimanali, inclusa la chiamata con il mentor. Chi riesce a dedicare più tempo progredisce più velocemente, ma il programma è calibrato per chi ha una vita piena. Qualità del tempo, non quantità."
              />
              <FaqItem
                question="Funziona anche se sono alle prime armi?"
                answer="Sì. Il metodo parte da dove sei tu adesso. Abbiamo lavorato con designer che non avevano ancora un singolo cliente e li abbiamo portati a chiuderne i primi in poche settimane. L'importante è la disponibilità a seguire il percorso con costanza."
              />
              <FaqItem
                question="Come avvengono le sessioni settimanali?"
                answer="Le chiamate si svolgono in videoconferenza (Google Meet o Zoom) e durano in media 45–60 minuti. Il giorno e l'orario vengono concordati insieme all'inizio del percorso e possono essere adattati mese per mese in base alla tua disponibilità."
              />
              <FaqItem
                question="Cosa succede se non sono soddisfatto?"
                answer="Attivi la garanzia entro 30 giorni dall'inizio e ti rimborsiamo l'intero importo pagato, senza domande e senza burocrazia. Il rimborso viene processato entro 48 ore dalla richiesta. Il nostro obiettivo è che tu ottenga risultati — se non succede, non vogliamo i tuoi soldi."
              />
            </div>

            {/* Final CTA after FAQ */}
            <div className="mt-12 flex flex-col items-center gap-3 text-center">
              <CtaButton size="lg" />
              <p className="text-sm text-[var(--text-muted)]">
                Ancora dubbi? Scrivimi su Instagram prima di iscriverti.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ── STICKY BOTTOM BAR (mobile only) ──────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-safe-area-inset-bottom">
        <div className="bg-[var(--bg-base)]/90 backdrop-blur-md border-t border-dark-goldenrod/40 px-4 py-3">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon flex items-center justify-center gap-2 w-full rounded-xl font-bold text-white text-base min-h-[52px]"
          >
            Iscriviti Ora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
}
