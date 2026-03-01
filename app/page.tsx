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
  Pen,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

const CTA_URL = "https://whop.com/checkout-placeholder";

// ─── Reusable CTA Button ────────────────────────────────────────────────────
function CtaButton({
  label = "Inizia la tua trasformazione",
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
  const [videoStarted, setVideoStarted] = useState(false);
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
                Il tuo gusto è già
                <br />
                Premium.
              </span>
              <br />
              <span className="text-[var(--text-primary)]">
              Il tuo lavoro deve esserlo.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl">
            Sai riconoscere un design eccellente. Il problema è che il tuo non lo sembra ancora. 
            Questo mentorship 1:1 ti dà il sistema per colmare quel divario, in 6 settimane.
            </p>

            {/* CTA */}
            <CtaButton size="lg" />

            <p className="text-xs text-[var(--text-muted)]">
              Valore Garantito.
            </p>

            {/* VSL Video */}
            <div className="w-full mt-4 rounded-2xl overflow-hidden border border-dark-goldenrod/30 shadow-[0_0_40px_rgba(174,133,46,0.15)]">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                {videoStarted ? (
                  <iframe
                    src="https://player.vimeo.com/video/1169288772?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    title="Audit Luciano"
                  />
                ) : (
                  <button
                    aria-label="Riproduci il video"
                    onClick={() => setVideoStarted(true)}
                    className="absolute inset-0 w-full h-full bg-[var(--bg-card)] flex flex-col items-center justify-center gap-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-dark-goldenrod"
                    style={{
                      backgroundImage: "url('/video-thumbnail.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Dark overlay so the play button stays legible over the thumbnail */}
                    <span className="absolute inset-0 bg-black/40" aria-hidden="true" />
                    <span className="group relative z-10 w-20 h-20 rounded-full btn-neon flex items-center justify-center">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-dark-goldenrod opacity-30 animate-ping" />
                      <Play className="w-8 h-8 text-white fill-white translate-x-0.5" />
                    </span>
                    <span className="relative z-10 text-sm text-[var(--text-primary)] font-medium tracking-wide uppercase">
                      Guarda il video · 3 min
                    </span>
                  </button>
                )}
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
                Non è mancanza di {" "}
                <span className="gradient-text">talento.</span>
                <br />
                È cecità strutturale.
              </h2>
            </div>

            {/* Swipeable cards row — horizontal scroll on mobile, grid on md+ */}
            <div className="md:hidden -mx-4 px-4">
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
                <PainCard
                  icon={<TrendingDown className="w-5 h-5" />}
                  title="Qualcosa non funziona"
                  body="Hai passato ore su Behance e Dribbble. Hai comprato corsi, template, pack di asset. Hai guardato tutorial su tutorial. Eppure, quando apri un file vuoto, qualcosa non funziona. Il risultato finale sembra sempre... quasi buono. Ma non abbastanza. E non sai perché."
                />
                <PainCard
                  icon={<Clock className="w-5 h-5" />}
                  title="Non è mancanza di talento"
                  body="Ecco la verità che nessun corso ti ha mai detto: il problema non è il tuo occhio. Il tuo gusto è già buono, forse anche ottimo. Il problema è che nessuno ti ha mai insegnato lo scheletro invisibile che regge ogni design professionale. Hai imparato a usare i software, ma non i principi che trasformano un layout in qualcosa di solido, intenzionale, premium. Stai costruendo case senza fondamenta. E lo senti."
                />
                <PainCard
                  icon={<AlertCircle className="w-5 h-5" />}
                  title="Non sei un impostore"
                  body="Quella sensazione di essere un impostore, di non riuscire a difendere le tue scelte davanti a un cliente, di vedere altri designer avanzare mentre tu rimani fermo... non è colpa tua. È il risultato diretto di un sistema di formazione che insegna effetti visivi e trend, ma non il linguaggio reale del design. Nessuno ti ha mostrato come si costruisce una gerarchia tipografica solida, come si usa una griglia con precisione matematica, come si crea tensione visiva con intenzione. Finché non impari questo, continuerai a lavorare per tentativi."
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
              La Soluzione
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight mb-6">
              Esiste un{" "}
              <span className="gradient-text">
                Sistema.
              </span>
              <br />
              E puoi{" "}
              <span className="gradient-text">Impararlo.</span>
            </h2>

            <div className="space-y-5 text-[var(--text-secondary)] text-base leading-relaxed">
              <p>
                I designer che producono lavori premium non hanno più talento di te.{" "}
                <strong className="text-[var(--text-primary)]">
                  Hanno un metodo.{" "}
                </strong>
                Sanno come costruire ogni composizione su una struttura invisibile ma precisa, fatta di griglie matematiche, 
                scale tipografiche e allineamento ottico. Non scelgono i font "a occhio". 
                Non spostano elementi finché "sembra giusto". <strong className="text-[var(--text-primary)]">Costruiscono con intenzione, ogni volta.{" "}</strong>
                E il risultato si vede.
              </p>
              <p>
                Questo mentorship 1:1 è l'unico percorso che ti dà accesso diretto a quel metodo, 
                applicato al tuo lavoro reale. Non video preregistrati. Non feedback generici.{" "}
                <strong className="text-[var(--text-primary)]">
                  Sessioni live, chirurgiche, costruite attorno ai tuoi progetti e alle tue lacune specifiche. {" "}
                </strong>
                Vedi esattamente dove il tuo layout perde coerenza, dove la tua tipografia manca di gerarchia, 
                dove il tuo design smette di comunicare. E impari a correggerlo, una volta sola, per sempre.
              </p>
              <p>
                Immagina di aprire un file con chiarezza totale. Sai da dove iniziare. 
                Sai perché ogni elemento è dove si trova. Presenti il tuo lavoro a un cliente e non aspetti la sua approvazione: la guidi. 
                Il tuo portfolio non è più una raccolta di tentativi riusciti a metà.{" "}
                <strong className="text-[var(--text-primary)]">
                  È una serie di case study che parlano da soli, che attraggono clienti disposti a pagare per la qualità. {" "}
                </strong>
                Questo è il risultato di un sistema. E il sistema si impara.
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Metodo strutturato in 6 settimane",
                "Sessioni live 1:1 chirurgiche",
                "Feedback personalizzato",
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

        {/* ── BLOCK 4: PER CHI È ───────────────────────────────────────── */}
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
              <Sparkles className="w-3.5 h-3.5" />
              Per Chi È
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight mb-10">
              Questo percorso è{" "}
              <span className="gradient-text">fatto per te</span>{" "}
              se ti riconosci qui
            </h2>

            <div className="space-y-5">
              {/* Persona 1 */}
              <div className="card-glow rounded-2xl p-6 flex gap-5 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-dark-goldenrod/15 border border-dark-goldenrod/30 flex items-center justify-center">
                  <Pen className="w-5 h-5 text-dark-goldenrod" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5">
                    Designer freelance con buon gusto ma esecuzione incostante
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Produci lavori che sembrano quasi professionali, ma sai che
                    manca qualcosa. Vuoi un metodo che ti permetta di
                    raggiungere quel livello premium ogni volta, non solo per
                    caso.
                  </p>
                </div>
              </div>

              {/* Persona 2 */}
              <div className="card-glow rounded-2xl p-6 flex gap-5 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-dark-goldenrod/15 border border-dark-goldenrod/30 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-dark-goldenrod" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5">
                    Designer junior o mid-level bloccati nel ciclo delle
                    revisioni
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    I clienti continuano a chiederti modifiche senza fine e non
                    riesci a difendere le tue scelte. Vuoi imparare a
                    presentare il tuo lavoro con autorità e ridurre le
                    revisioni alla radice.
                  </p>
                </div>
              </div>

              {/* Persona 3 */}
              <div className="card-glow rounded-2xl p-6 flex gap-5 items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-dark-goldenrod/15 border border-dark-goldenrod/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-dark-goldenrod" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5">
                    Designer che vogliono alzare le tariffe e attirare clienti
                    migliori
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Sei stanco di competere sul prezzo. Vuoi costruire un
                    portfolio che parli da solo e posizionarti come partner
                    strategico, non come esecutore di pixel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 5: VALUE PROPOSITION ───────────────────────────────── */}
        <section className="relative px-4 py-12 md:py-20 overflow-hidden">
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
                Cosa Ti Manca
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Il tuo gusto è già{" "}
                <span className="gradient-text">premium</span>. Il tuo
                processo no.
              </h2>
            </div>

            <ul className="space-y-4">
              {[
                {
                  icon: <Layers className="w-5 h-5 text-dark-goldenrod" />,
                  title: "Un sistema, non istinto",
                  body: `Smetti di affidarti a ciò che "sembra giusto." Impari a costruire ogni layout su una griglia matematica e una gerarchia tipografica precisa. Ogni scelta ha una ragione. Ogni ragione è difendibile.`,
                },
                {
                  icon: <Zap className="w-5 h-5 text-dark-goldenrod" />,
                  title: "Critiche chirurgiche sul tuo lavoro reale",
                  body: "Niente video preregistrati. Niente feedback generici. Ogni sessione live è dedicata al tuo progetto, ai tuoi punti ciechi, al tuo specifico divario tra visione ed esecuzione.",
                },
                {
                  icon: <FileText className="w-5 h-5 text-dark-goldenrod" />,
                  title: "Un portfolio che parla da solo",
                  body: "In 6 settimane costruisci lavori che dimostrano un livello premium, non una collezione di template modificati. Il tipo di portfolio che attira clienti senza dover spiegare il tuo valore.",
                },
                {
                  icon: <MessageSquare className="w-5 h-5 text-dark-goldenrod" />,
                  title: "Comanda la stanza, non solo il software",
                  body: `Quando un cliente mette in discussione una tua scelta, non dici più "mi sembrava giusto." Spieghi esattamente perché quella decisione risolve il suo problema di business. Questo è ciò che separa un pixel-pusher da un consulente strategico.`,
                },
              ].map(({ icon, title, body }) => (
                <li
                  key={title}
                  className="card-glow rounded-2xl p-6 flex items-start gap-5"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-dark-goldenrod/15 border border-dark-goldenrod/30 flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <p className="font-bold text-[var(--text-primary)] text-sm mb-1.5 uppercase tracking-wide">
                      {title}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
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
                Prove
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Altri Designer hanno già{" "}
                <span className="gradient-text">Fatto Questo Salto</span>
              </h2>
            </div>

            {/* Testimonial cards — stacked on mobile */}
            <div className="space-y-5">
              <div className="card-glow rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-dark-goldenrod text-dark-goldenrod" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-5 italic">
                  "Dopo anni di tutorial, finalmente capisco perché il mio
                  lavoro sembrava amatoriale. Non era talento. Era struttura."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-shadow-grey/70 border border-dark-goldenrod/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black text-eggshell">MR</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      Marco R.
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Graphic Designer Freelance
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-glow rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-dark-goldenrod text-dark-goldenrod" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-5 italic">
                  "Ho presentato il mio primo progetto post-mentorship a un
                  cliente. Nessuna revisione. Ha approvato al primo round."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-shadow-grey/70 border border-dark-goldenrod/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black text-eggshell">GT</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      Giulia T.
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Brand Identity Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client logos strip */}
            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] text-center mb-6">
                Brand e clienti con cui ho collaborato
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {["Brand A", "Brand B", "Brand C", "Brand D"].map((name) => (
                  <div
                    key={name}
                    className="h-8 px-5 rounded-lg bg-shadow-grey/50 border border-dark-goldenrod/20 flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-[var(--text-muted)] tracking-wider uppercase">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 7: ORIGIN STORY ─────────────────────────────────────── */}
        <section className="relative px-4 py-12 md:py-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #AE852E, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-shadow-grey/60 border border-dark-goldenrod/40 rounded-full px-4 py-1.5 text-sm font-medium text-eggshell mb-6">
                <Award className="w-3.5 h-3.5" />
                La Mia Storia
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Come Ho Capito Che Il Problema{" "}
                <span className="gradient-text">Non Era Il Talento</span>
              </h2>
            </div>

            {/* Image placeholder */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-dark-goldenrod/30 shadow-[0_0_40px_rgba(174,133,46,0.12)] mb-8">
              <div className="absolute inset-0 bg-[var(--bg-card)] flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-shadow-grey/70 border border-dark-goldenrod/40 flex items-center justify-center">
                  <span className="text-2xl font-black text-eggshell select-none">
                    M
                  </span>
                </div>
                <span className="text-xs text-[var(--text-muted)] font-medium tracking-wide uppercase">
                  Foto autentica al lavoro
                </span>
              </div>
              <div
                aria-hidden
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, #AE852E, transparent 70%)",
                }}
              />
            </div>

            {/* Story text */}
            <div className="space-y-5 text-[var(--text-secondary)] text-base leading-relaxed">
              <p>
                Ho lavorato per anni guardando altri designer produrre lavori
                che mi facevano venire voglia di smettere.
              </p>
              <p>
                Non perché fossero più bravi. Non perché avessero più
                esperienza. Ma perché sembravano capire qualcosa che io non
                riuscivo a vedere.
              </p>
              <p>
                Passavo ore su Behance. Compravo corsi. Guardavo tutorial.
                Eppure, ogni volta che aprivo un file nuovo, finivo nello
                stesso posto: a spostare elementi a caso, sperando che
                qualcosa "scattasse."
              </p>
              <p>
                I clienti me lo facevano sentire. "Puoi provare qualcosa di
                più... wow?" Oppure: "Mio nipote ha Canva, potrebbe farlo per
                meno." Ogni presentazione era un momento di ansia pura. Non
                perché non credessi nel mio lavoro. Ma perché{" "}
                <strong className="text-[var(--text-primary)]">
                  non sapevo come difenderlo
                </strong>
                .
              </p>
              <p>
                Ho provato tutto ciò che il mercato offriva. Corsi
                preregistrati su Skillshare. Template da Envato. Post sui
                trend del 2024. Niente funzionava. Non perché fossi incapace,
                ma perché nessuno mi stava insegnando la cosa giusta.
              </p>

              {/* Pivot moment */}
              <div className="border-l-2 border-dark-goldenrod/60 pl-5 py-1 my-6">
                <p className="text-[var(--text-primary)] font-medium italic">
                  Poi è successa una cosa semplice, quasi banale.
                </p>
              </div>

              <p>
                Ho smontato un progetto di un designer che ammiravo. Non per
                copiarlo. Per capire come era costruito. E lì l'ho visto: una
                griglia matematica precisa. Una scala tipografica intenzionale.
                Una gerarchia visiva che guidava l'occhio senza che il lettore
                se ne accorgesse.
              </p>
              <p>
                Non era magia.{" "}
                <strong className="text-[var(--text-primary)]">
                  Era un sistema.
                </strong>
              </p>
              <p>
                Da quel momento ho smesso di cercare ispirazione e ho iniziato
                a costruire struttura. Ho rifatto i miei progetti da zero,
                applicando questi principi uno alla volta. I risultati erano
                diversi. Non "più belli" in modo soggettivo. Più solidi. Più
                difendibili. Più professionali.
              </p>
              <p>
                I clienti hanno smesso di fare revisioni infinite. Hanno
                iniziato a chiedermi il perché delle mie scelte, e io avevo le
                risposte. Le tariffe sono salite. La fiducia anche.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">
                  Structural Vision Mastery
                </strong>{" "}
                è nato da quella scoperta. È il sistema che avrei voluto avere
                anni fa: critiche chirurgiche sul lavoro reale, principi
                fondamentali applicati al tuo progetto specifico, e un
                processo che trasforma il gusto che già hai in esecuzione
                premium.
              </p>
              <p>
                Non sto insegnando un software. Sto insegnando come vedere e
                costruire il design nel modo in cui i professionisti lo fanno
                davvero.
              </p>
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

        {/* ── BLOCK 8: HOW IT WORKS ─────────────────────────────────────── */}
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
            <div className="mb-10 md:mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-dark-goldenrod mb-3">
                Come Funziona
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Roadmap del{" "}
                <span className="gradient-text">Percorso</span>
              </h2>
            </div>

            {/* Steps */}
            <ol className="relative space-y-0">
              {/* Vertical connector line */}
              <div
                aria-hidden
                className="absolute left-[1.625rem] top-10 bottom-10 w-px bg-dark-goldenrod/20"
              />

              {[
                {
                  step: "01",
                  icon: <Lightbulb className="w-5 h-5 text-dark-goldenrod" />,
                  title: "Diagnosi — Troviamo il tuo punto cieco",
                  lines: [
                    "Analizziamo insieme il tuo lavoro attuale.",
                    "Non per giudicare. Per trovare esattamente dove la tua esecuzione si rompe.",
                    "Ogni designer ha un punto cieco specifico. Noi lo troviamo subito.",
                  ],
                },
                {
                  step: "02",
                  icon: <Layers className="w-5 h-5 text-dark-goldenrod" />,
                  title: "Fondamenta — Installi i sistemi che i professionisti usano",
                  lines: [
                    "Qui impari il linguaggio invisibile del design di alto livello.",
                    "Griglie matematiche. Gerarchia tipografica. Tensione visiva.",
                    "Non teoria astratta. Sistemi concreti che applichi subito al tuo lavoro.",
                  ],
                },
                {
                  step: "03",
                  icon: <Pen className="w-5 h-5 text-dark-goldenrod" />,
                  title: "Applicazione — Costruisci da zero, con intenzione",
                  lines: [
                    "Niente template. Niente scorciatoie.",
                    "Prendi un progetto reale e lo costruisci usando i nuovi sistemi.",
                    "Ogni scelta ha un perché. Ogni elemento ha una ragione precisa.",
                  ],
                },
                {
                  step: "04",
                  icon: <Zap className="w-5 h-5 text-dark-goldenrod" />,
                  title: "Critica Chirurgica — Affiniamo fino al livello premium",
                  lines: [
                    "Sessioni live 1:1 in cui analizziamo il tuo lavoro insieme.",
                    `Non feedback generico tipo "bel lavoro."`,
                    `Feedback preciso: "questa gerarchia tipografica è rotta, ecco come sistemarla."`,
                  ],
                },
                {
                  step: "05",
                  icon: <FileText className="w-5 h-5 text-dark-goldenrod" />,
                  title: "Portfolio — Esci con lavori che parlano da soli",
                  lines: [
                    "Al termine delle 6 settimane hai un portfolio che dimostra un livello premium.",
                    "Lavori che attirano clienti migliori.",
                    "Lavori che giustificano tariffe più alte, senza dover convincere nessuno.",
                  ],
                },
              ].map(({ step, icon, title, lines }) => (
                <li key={step} className="relative flex gap-5 pb-8 last:pb-0">
                  {/* Step bubble */}
                  <div className="flex-shrink-0 w-[3.25rem] flex flex-col items-center">
                    <div className="w-[3.25rem] h-[3.25rem] rounded-full bg-[var(--bg-card)] border border-dark-goldenrod/40 flex items-center justify-center shadow-[0_0_16px_rgba(174,133,46,0.15)] z-10">
                      {icon}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pt-2 pb-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-dark-goldenrod mb-1">
                      Passo {step}
                    </p>
                    <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 leading-snug">
                      {title}
                    </h3>
                    <div className="space-y-1.5">
                      {lines.map((line, i) => (
                        <p
                          key={i}
                          className="text-sm text-[var(--text-secondary)] leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
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
                L&apos;Investimento
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Structural Vision Mastery —{" "}
                <span className="gradient-text">Mentorship 1:1</span>
              </h2>
            </div>

            {/* Scarcity badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-2 bg-dark-goldenrod/10 border border-dark-goldenrod/40 rounded-full px-4 py-2 text-sm font-semibold text-dark-goldenrod">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                Iscrizioni Limitate
              </div>
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
                {/* Price */}
                <div>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">
                    Valore totale dei bonus: €2.991
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-black gradient-text leading-none">
                      €997
                    </span>
                    <span className="text-[var(--text-muted)] text-base">
                      pagamento unico
                    </span>
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                {/* Core inclusions */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                    Incluso nel percorso
                  </p>
                  <ul className="space-y-3">
                    {[
                      "6 settimane di lavoro diretto e personale con Menny",
                      "Design Calibration Sessions: critiche chirurgiche live 1:1",
                      "Execution Roadmap: piano d'azione sui tuoi specifici punti deboli",
                      "Structural Vision Toolkit: libreria su griglie, tipografia e tensione visiva",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-dark-goldenrod flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-white/5" />

                {/* Bonuses */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-dark-goldenrod mb-3">
                    Bonus inclusi
                  </p>
                  <ul className="space-y-3">
                    {[
                      {
                        label: `Bonus 1 — "Blank Canvas" Demystifier Toolkit`,
                        value: "€497",
                        body: "Il sistema per non bloccarti mai davanti a una pagina bianca",
                      },
                      {
                        label: "Bonus 2 — Premium Client Acquisition Method",
                        value: "€997",
                        body: "Come trovare clienti che pagano per il valore, non per il prezzo",
                      },
                      {
                        label: "Bonus 3 — Real-World Redesign Project",
                        value: "€1.497",
                        body: "Un progetto reale guidato da zero a fine, per vedere il sistema in azione",
                      },
                      {
                        label: "Bonus 4 — Post-Mentorship Portfolio Review",
                        value: "",
                        body: "Una sessione finale dopo le 6 settimane per non perdere lo slancio",
                      },
                    ].map(({ label, value, body }) => (
                      <li key={label} className="flex items-start gap-3">
                        <Sparkles className="w-4 h-4 text-dark-goldenrod flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                            {label}
                            {value && (
                              <span className="ml-2 text-xs font-bold text-dark-goldenrod/70">
                                (val. {value})
                              </span>
                            )}
                          </p>
                          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                            {body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-white/5" />

                {/* Guarantee note */}
                <div className="flex items-start gap-3 bg-dark-goldenrod/5 border border-dark-goldenrod/20 rounded-xl p-4">
                  <Shield className="w-4 h-4 text-dark-goldenrod flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    <strong className="text-[var(--text-primary)]">
                      Garanzia &ldquo;Undeniable Portfolio&rdquo;:
                    </strong>{" "}
                    se non vedi un miglioramento dimostrabile, continuo a
                    lavorare con te gratis per altre 2 settimane.
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-3">
                  <CtaButton
                    label="Inizia ora"
                    fullWidth
                    size="lg"
                  />
                  <p className="text-center text-xs text-[var(--text-muted)]">
                    Pagamento sicuro · Nessun rinnovo automatico · Garanzia
                    inclusa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 10: GUARANTEE ──────────────────────────────────────── */}
        <section className="px-4 py-12 md:py-16">
          <div className="max-w-lg mx-auto flex flex-col items-center text-center gap-6">
            {/* Seal badge */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[var(--bg-card)] border-2 border-dark-goldenrod/50 flex items-center justify-center shadow-[0_0_40px_rgba(174,133,46,0.2)]">
                <Shield className="w-10 h-10 text-dark-goldenrod" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-dark-goldenrod text-[#191613] text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full whitespace-nowrap">
                Garanzia 6 Settimane
              </div>
            </div>

            <div className="pt-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-dark-goldenrod mb-3">
                La Nostra Garanzia
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] leading-tight mb-2">
                Garanzia{" "}
                <span className="gradient-text">
                  &ldquo;Undeniable Portfolio&rdquo;
                </span>
              </h2>
              <p className="text-base font-medium text-[var(--text-secondary)] italic">
                Fai il lavoro, vedi i risultati.
              </p>
            </div>

            <div className="space-y-4 text-[var(--text-secondary)] text-base leading-relaxed text-left max-w-md">
              <p>
                Segui le sessioni. Applica la roadmap. Partecipa attivamente
                alle critiche.
              </p>
              <p>
                Se alla fine delle 6 settimane non hai almeno un lavoro nel
                portfolio che è{" "}
                <strong className="text-[var(--text-primary)]">
                  dimostrabilmente superiore
                </strong>{" "}
                  a qualsiasi cosa tu abbia fatto prima... continuo a lavorare
                  con te{" "}
                <strong className="text-[var(--text-primary)]">
                  gratis per altre 2 settimane
                </strong>
                .
              </p>
              <p>
                Questa garanzia esiste per un motivo semplice. Il sistema
                funziona quando viene applicato. E io ci metto la faccia su
                questo.
              </p>
            </div>

            {/* Closing line */}
            <div className="card-glow rounded-2xl px-6 py-4 text-center max-w-sm">
              <p className="text-base font-bold text-[var(--text-primary)]">
                Il rischio è tutto mio.
              </p>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                Hai 6 settimane per provarlo. Tu hai solo da guadagnare.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-dark-goldenrod">
              <CheckCircle className="w-4 h-4" />
              Niente da perdere. Tutto da guadagnare.
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
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <Sparkles className="w-8 h-8 text-dark-goldenrod mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Immagina{" "}
                <span className="gradient-text">tra 6 settimane</span>
              </h2>
            </div>

            {/* Two-column contrast layout on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {/* Positive future */}
              <div className="card-glow rounded-2xl p-6 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-dark-goldenrod mb-1">
                  Con il sistema
                </p>
                <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Apri un file nuovo. Nessun panico. Nessuna sensazione di
                    vuoto. Sai esattamente da dove partire.
                  </p>
                  <p>
                    Costruisci la griglia. Imposti la scala tipografica. Ogni
                    elemento va dove deve andare, per una ragione precisa. Non
                    perché{" "}
                    <em>&ldquo;sembra giusto&rdquo;</em>... ma perché sai il
                    perché.
                  </p>
                  <p>
                    Il cliente vede il lavoro finito. Non chiede{" "}
                    <em>&ldquo;puoi provare un&apos;altra versione?&rdquo;</em>{" "}
                    Ti guarda e dice:{" "}
                    <strong className="text-[var(--text-primary)]">
                      &ldquo;Quando possiamo iniziare il prossimo
                      progetto?&rdquo;
                    </strong>
                  </p>
                  <p>
                    Il tuo portfolio non è più una raccolta di esercizi carini.
                    È una serie di case study che dimostrano risultati reali.
                    I clienti ti trovano. Ti scrivono. Chiedono il tuo
                    preventivo senza battere ciglio.
                  </p>
                  <p>
                    Quella sensazione di essere un impostore? Sparita. Al suo
                    posto c&apos;è{" "}
                    <strong className="text-[var(--text-primary)]">
                      autorità
                    </strong>
                    . La certezza che ogni scelta visiva che fai ha una
                    struttura solida dietro.
                  </p>
                </div>
              </div>

              {/* Cost of inaction */}
              <div className="card-glow rounded-2xl p-6 space-y-4 border border-white/5">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">
                  Senza il sistema
                </p>
                <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Tra 6 settimane sei ancora lì. Stesso file aperto. Stessa
                    sensazione che manca qualcosa. Stessi clienti che ti
                    chiedono{" "}
                    <em>&ldquo;puoi fare qualcosa di più... wow?&rdquo;</em>
                  </p>
                  <p>
                    Continui a guardare i portfolio degli altri su Behance e
                    ti chiedi cosa hanno che tu non hai. La risposta non è
                    talento.{" "}
                    <strong className="text-[var(--text-primary)]">
                      È un sistema.
                    </strong>
                  </p>
                  <p>
                    Ogni giorno che passa senza impararlo è un giorno in cui
                    qualcun altro — con lo stesso livello di talento tuo — si
                    avvicina di più a quei clienti premium che tu vuoi.
                  </p>
                  <p>
                    Il costo di non agire non è zero. È ogni progetto che
                    potresti vincere e non vinci. Ogni tariffa che potresti
                    alzare e non alzi. Ogni presentazione in cui esci dalla
                    stanza{" "}
                    <strong className="text-[var(--text-primary)]">
                      senza la certezza di aver convinto davvero.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-base text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
                Non devi essere pronto al 100%. Devi solo smettere di
                aspettare che le cose migliorino da sole.
              </p>
              <CtaButton size="lg" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 12: OBJECTIONS ─────────────────────────────────────── */}
        <section className="px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10 md:mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-dark-goldenrod mb-3">
                Ultime Domande
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] leading-tight">
                Hai ancora qualche dubbio.{" "}
                <span className="gradient-text">È normale.</span>
              </h2>
              <p className="mt-4 text-[var(--text-secondary)] text-base max-w-lg mx-auto">
                Ecco le domande che mi fanno più spesso, con risposte dirette.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <TrendingDown className="w-5 h-5 text-dark-goldenrod" />,
                  q: "«Una mentorship 1:1 è troppo costosa per me adesso.»",
                  a: [
                    "Capisco. È una cifra reale, non una spesa piccola.",
                    "Ma considera questo: perdere un solo cliente premium — quello che vale 5.000€ o 10.000€ — perché il tuo portfolio non convince ancora, costa più dell'intera mentorship. Il vero costo non è quello che paghi. È quello che continui a perdere ogni mese che aspetti.",
                    `Con la garanzia "Undeniable Portfolio": se alla fine delle 6 settimane il tuo lavoro non è visibilmente migliore di qualsiasi cosa tu abbia fatto prima, continuo a lavorare con te gratis per altre 2 settimane.`,
                  ],
                  highlight: "Il rischio è mio, non tuo.",
                },
                {
                  icon: <Clock className="w-5 h-5 text-dark-goldenrod" />,
                  q: "«Non ho tempo per sessioni live e compiti a casa.»",
                  a: [
                    "Questa è la domanda giusta da farti.",
                    "Se non hai tempo ora, non lo avrai nemmeno tra sei mesi. Il problema non è il tempo: è la priorità. La mentorship è costruita per essere intensiva ma efficiente. Niente contenuti passivi da guardare sul divano. Solo lavoro reale, sul tuo lavoro reale, con feedback chirurgico diretto.",
                  ],
                  highlight: "Otto settimane. Poi hai un sistema che usi per tutta la carriera.",
                },
                {
                  icon: <AlertCircle className="w-5 h-5 text-dark-goldenrod" />,
                  q: "«Come faccio a sapere che non è l'ennesimo corso che non funziona?»",
                  a: [
                    "È la preoccupazione più onesta che puoi avere.",
                    "Hai già comprato corsi preregistrati. Hai già guardato tutorial su YouTube. Sai già che l'informazione passiva non basta. Questa non è una lezione su come usare il software. È una sessione 1:1 sul tuo file, con il tuo progetto, con un occhio esterno che ti mostra esattamente dove la griglia è rotta e perché la gerarchia tipografica non funziona.",
                  ],
                  highlight: "Non stai comprando contenuti. Stai comprando una diagnosi precisa e un piano per risolverla.",
                },
                {
                  icon: <Shield className="w-5 h-5 text-dark-goldenrod" />,
                  q: "«Ho paura che la critica diretta al mio lavoro distrugga la mia fiducia.»",
                  a: [
                    "Questa paura ha senso. E la rispetto.",
                    `Ma pensa a cosa succede adesso: ogni volta che presenti un lavoro a un cliente, quella paura è già lì. Non scompare da sola. Una critica chirurgica non è un giudizio sul tuo talento. È una diagnosi con una soluzione chiara. "La griglia è interrotta qui" non significa "sei un cattivo designer." Significa: "ecco cosa aggiustare, ed ecco come farlo."`,
                  ],
                  highlight: "La fiducia non viene dall'evitare il feedback. Viene dal capire finalmente perché le cose funzionano.",
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-dark-goldenrod" />,
                  q: "«E se alla fine non riesco comunque a trovare clienti migliori?»",
                  a: [
                    "Capisco il dubbio. Ma separiamo le due cose.",
                    `Il tuo problema adesso non è la ricerca clienti. È l'esecuzione. Un portfolio che non convince al livello premium è il vero blocco. Quando il tuo lavoro parla da solo, la conversazione con il cliente cambia completamente. Il Bonus 2 incluso — il "Premium Client Acquisition Method" — ti dà esattamente il metodo per trovare e attrarre i clienti giusti una volta che il tuo portfolio è pronto a riceverli.`,
                  ],
                  highlight: "Prima costruisci lo strumento. Poi lo usi.",
                },
              ].map(({ icon, q, a, highlight }) => (
                <div
                  key={q}
                  className="card-glow rounded-2xl p-6 flex gap-5 items-start"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-dark-goldenrod/15 border border-dark-goldenrod/30 flex items-center justify-center mt-0.5">
                    {icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-[var(--text-primary)] text-base leading-snug">
                      {q}
                    </h3>
                    {a.map((line, i) => (
                      <p
                        key={i}
                        className="text-sm text-[var(--text-secondary)] leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                    <p className="text-sm font-semibold text-dark-goldenrod">
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── BLOCK 13: FAQ ACCORDION ──────────────────────────────────── */}
        <section className="px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10 md:mb-14 text-center">
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
                question="Quanto costa la mentorship?"
                answer="C'è un solo pacchetto disponibile, a 997 euro. Nessun upsell, nessuna sorpresa. Un prezzo, un percorso completo."
              />
              <FaqItem
                question="Quante persone accetti ogni mese?"
                answer="Solo 3. La mentorship è 1:1, quindi il numero di posti è limitato per garantire la massima attenzione su ogni designer."
              />
              <FaqItem
                question="Non ho mai fatto una mentorship. Come funziona?"
                answer="Lavoriamo insieme in sessioni live, uno a uno. Analizzo il tuo lavoro, identifico i tuoi punti ciechi e costruiamo un piano d'azione su misura per te."
              />
              <FaqItem
                question="E se non vedo miglioramenti concreti nel mio portfolio?"
                answer="Continuo a lavorare con te gratuitamente per altre 2 settimane."
              />
              <FaqItem
                question="Quanto tempo devo dedicare ogni settimana?"
                answer="Dipende dal tuo ritmo. Ma più applichi i sistemi tra una sessione e l'altra, più velocemente vedi i risultati nel tuo lavoro."
              />
              <FaqItem
                question="Questo fa per me se uso già Behance e guardo tutorial su YouTube?"
                answer="Sì, anzi, è esattamente per te. I tutorial insegnano il software. Questa mentorship ti insegna a pensare come un designer di alto livello."
              />
              <FaqItem
                question="Devo avere un certo livello di esperienza per partecipare?"
                answer="Devi saper usare i principali strumenti di design. Non devi essere un esperto, ma devi essere pronto a lavorare sul serio."
              />
              <FaqItem
                question="Cosa ricevo esattamente con i 997 euro?"
                answer="Sessioni live 1:1, un piano d'azione personalizzato, accesso al toolkit sui sistemi fondamentali del design, e 4 bonus inclusi. Tutto quello che ti serve per colmare il gap tra il tuo gusto e la tua esecuzione."
              />
              <FaqItem
                question="Ho paura di ricevere critiche al mio lavoro. È un problema?"
                answer="No. La critica chirurgica non è un giudizio sul tuo talento. È una diagnosi precisa con una soluzione chiara. È quello che ti ha sempre mancato."
              />
              <FaqItem
                question="Come faccio a iniziare?"
                answer="Contatta Menny direttamente. I posti si esauriscono ogni mese, quindi prima lo fai, meglio è."
              />
            </div>

            {/* Final CTA after FAQ */}
            <div className="mt-12 flex flex-col items-center gap-3 text-center">
              <CtaButton label="Prenota il tuo posto" size="lg" />
              <p className="text-sm text-[var(--text-muted)]">
                Ancora dubbi? Scrivimi direttamente prima di iscriverti.
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
