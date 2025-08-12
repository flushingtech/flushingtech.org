'use client';

import {
  Sparkles,
  Target,
  CheckSquare,
  Users,
  Handshake,
  BookOpen,
  BadgeCheck,
  Layers,
  Mail,
} from 'lucide-react';

const GOOGLE_FORM =
  process.env.NEXT_PUBLIC_SIGNUP_FORM_URL || 'https://forms.gle/your-form-id';

export default function CodeblockManifestoPage() {
  return (
    <main className="w-full">

      {/* --- NAVBAR MASK (covers global header) --- */}
      {/* Adjust height to your navbar height (e.g., h-16 ≈ 64px) */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 h-16 bg-site_navy z-[999] pointer-events-auto"
      />

      {/* 1) HERO — BLUE */}
      <section className="bg-site_navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20 lg:py-28">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-white/30 bg-white/10 text-sm">
            <Sparkles className="w-4 h-4 text-peach" />
            <span>Flushing Tech</span>
          </div>

          {/* MASSIVE HEADLINE */}
          <h1 className="font-site_header font-extrabold leading-[0.95] tracking-tight text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-8xl">
            CodeBlock Manifesto
          </h1>

          {/* Original paragraph */}
          <p className="mt-6 max-w-4xl text-lg sm:text-xl font-site_1st_paragraph text-gray-200">
            We believe that every neighborhood deserves a thriving tech community where people can
            connect, learn, and grow together. The goal: a world of empowered neighborhoods, each
            with a thriving tech community. We believe every neighborhood, each empowered with its
            own local community of tech enthusiasts, is powerful—and a world filled with empowered
            neighborhoods is powerful. With the right tools and support, anyone can create a thriving,
            sustainable tech community in their neighborhood.
          </p>

          {/* Left‑aligned, side‑by‑side CTAs */}
          <div className="mt-8 flex gap-4">
            <a
              href={GOOGLE_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
            >
              Sign up
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* 2) OUR VALUES — PEACH (typographic + accent rails; no cards) */}
      <section className="bg-[#FBE8D8] text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">// Our Values</h2>
          <p className="mt-3 max-w-3xl text-gray-700">
            With the right tools and support, anyone can create a sustainable, welcoming tech community.
          </p>

          <ul className="mt-10 space-y-6">
            {[
              { icon: Users, title: 'Community over competition', desc: 'We lift each other and build real relationships.' },
              { icon: Handshake, title: 'Shared ownership', desc: 'Leadership and decisions are distributed.' },
              { icon: BookOpen, title: 'Learning together', desc: 'Collective growth strengthens everyone.' },
              { icon: BadgeCheck, title: 'Action over planning', desc: 'Start small, iterate, learn by doing.' },
            ].map((v, i) => (
              <li key={i} className="group relative pl-5">
                <span className="absolute left-0 top-2 bottom-2 w-1 bg-site_navy/70 rounded-md group-hover:bg-site_navy transition-colors" />
                <div className="flex gap-3 items-start">
                  <v.icon className="w-6 h-6 mt-0.5 text-site_navy shrink-0" />
                  <div>
                    <p className="font-semibold tracking-tight group-hover:underline decoration-site_navy/60 decoration-2 underline-offset-4">
                      {v.title}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">{v.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Micro‑CTA line */}
          <div className="mt-10">
            <a
              href={GOOGLE_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-site_navy border-b-2 border-site_navy/40 hover:border-site_navy"
            >
              I want to start this in my neighborhood →
            </a>
          </div>
        </div>
      </section>

      {/* 3) BENEFITS — WHITE (imperative, hypey statements; no cards) */}
      <section className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">// Benefits</h2>

          <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {[
              { icon: Layers, title: 'Build something real', desc: 'Ship projects with a crew that has your back.' },
              { icon: BadgeCheck, title: 'Make your portfolio pop', desc: 'Show work that opens doors to jobs & clients.' },
              { icon: Users, title: 'Find your people', desc: 'Collaborate across skill levels—beginners to pros.' },
              { icon: Sparkles, title: 'Explore without pressure', desc: 'Try new stacks through play & experiments.' },
            ].map((b, i) => (
              <li key={i} className="flex gap-3 items-start">
                <b.icon className="w-6 h-6 mt-0.5 text-site_orange shrink-0" />
                <div>
                  <p className="font-semibold tracking-tight">{b.title}</p>
                  <p className="text-sm text-gray-700 mt-1">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Action strip */}
          <div className="mt-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#FBE8D8] text-gray-900 border border-gray-300">
              <span className="text-sm font-semibold">Ready to build with us?</span>
              <a
                href={GOOGLE_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-site_navy underline underline-offset-4"
              >
                Join the next meetup
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4) THREE‑PHASE APPROACH — BLUE (timeline) */}
      <section className="bg-site_navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">// The Three‑Phase Approach</h2>

          <div className="mt-10 relative">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/20" />
            <TimelineItem
              badge="Phase 1 • Month 1"
              title="Initialization — Create a welcoming space"
              items={['Set up Discord/Slack', 'Host a 2‑hour mini‑hackathon', 'Join or form a stewarding committee']}
              detailsTitle="First Hackathon Format"
              details={['Welcome & intros (5m)', 'Ideate 3‑5 projects (5‑10m)', 'Team up & build (1.5h)', 'Presentations (10m) → closing & networking']}
              side="left"
            />
            <TimelineItem
              badge="Phase 2 • Months 2–3"
              title="Scaling Up — Add structure for sustained growth"
              items={['Bi‑weekly office hours & workshops', 'Q&A with senior engineers/SMEs', 'Rotate hosting, social, moderation', 'Form committees (marketing, moderation, ops)']}
              note="Critical transition: when committees form, founders step back—trust the collective."
              side="right"
            />
            <TimelineItem
              badge="Phase 3 • Months 6–12"
              title="Growth — Create pathways for professional development"
              items={['Project teams for local nonprofits/small biz', '3–6 month collaborative training (agile + agreed stacks)', 'Partner with BIDs, unions, local expos', 'Develop sponsors & community partnerships']}
              side="left"
              last
            />
          </div>
        </div>
      </section>

      {/* 5) PRINCIPLES — PEACH (bold line‑list; no cards) */}
      <section className="bg-[#FBE8D8] text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">// Principles for Success</h2>
        <ul className="mt-8 space-y-4">
            {[
              { title: 'Start Where You Are', desc: 'Use local schools, libraries, and community centers. Partner with existing orgs.' },
              { title: 'Embrace Radical Hospitality', desc: 'Beginner‑friendly events with clear agendas and many ways to contribute.' },
              { title: 'Distribute Leadership Early', desc: 'Identify leaders from day one, then step back.' },
              { title: 'Focus on Local Value', desc: 'Solve real problems for real neighbors.' },
              { title: 'Measure Connection, Not Just Code', desc: 'Track relationships, skills, and local wins.' },
              { title: 'Actionable Momentum', desc: 'Plan the next event within two weeks.' },
            ].map((p, i) => (
              <li key={i} className="leading-snug">
                <span className="font-semibold">{p.title}</span>
                <span className="block text-sm text-gray-700 mt-1">{p.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6) CHECKLIST — WHITE (STACKED + CENTERED NOTEPADS) */}
      <section className="bg-white text-gray-900" aria-labelledby="checklist-heading">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <h2 id="checklist-heading" className="font-site_header text-3xl sm:text-4xl font-bold">// Getting Started Checklist</h2>

          <div className="mt-10 max-w-3xl mx-auto flex flex-col gap-8 items-stretch">
            {[
              { week: 'Week 1', items: ['Choose your communication platform', 'Identify venue for first event', 'Draft event description & agenda'] },
              { week: 'Week 2', items: ['Secure venue & set date', 'Create promo materials', 'Reach out through local networks'] },
              { week: 'Week 3', items: ['Promote via social/forums/boards', 'Prep materials & supplies', 'Plan follow‑up engagement'] },
              { week: 'Week 4', items: ['Host first event & collect feedback', 'Immediate follow‑up online', 'Begin planning the second event'] },
            ].map((b, i) => (
              <Notepad key={i} title={b.week} items={b.items} />
            ))}
          </div>

          <p className="mt-10 text-sm text-gray-600">
            This manifesto is released under Creative Commons. Adapt it for your neighborhood—share and remix freely.
          </p>

          {/* left‑aligned CTAs */}
          <div className="mt-8 flex gap-4">
            <a
              href={GOOGLE_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-site_navy text-white font-medium hover:opacity-90 transition"
            >
              Sign up (Google Form)
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
            >
              Get in touch
            </a>
          </div>

          {/* CONTACT */}
          <section id="contact" className="mt-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Mail className="w-5 h-5 text-site_orange" />
                Contact
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:team@flushingtech.org"
                  className="px-4 py-2 rounded-md bg-site_navy text-white hover:opacity-90 transition"
                >
                  Email Us
                </a>
                <a
                  href={GOOGLE_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 transition"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

/* ---------- UI Partials ---------- */

function TimelineItem({
  badge,
  title,
  items,
  detailsTitle,
  details,
  note,
  side = 'left',
  last = false,
}: {
  badge: string;
  title: string;
  items: string[];
  detailsTitle?: string;
  details?: string[];
  note?: string;
  side?: 'left' | 'right';
  last?: boolean;
}) {
  const isLeft = side === 'left';
  return (
    <div className={`relative flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'} mb-12`}>
      {/* timeline dot */}
      <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -top-1">
        <div className="w-3 h-3 rounded-full bg-peach ring-4 ring-white/20" />
      </div>

      {/* content block */}
      <div className={`w-full sm:w-[48%] p-0 ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
        <div className="inline-flex items-center gap-2 text-sm text-gray-200">
          <Target className="w-4 h-4 text-peach" />
          {badge}
        </div>
        <h3 className="mt-2 font-semibold text-white">{title}</h3>

        <ul className="mt-3 space-y-1.5 text-gray-200 list-disc pl-5">
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>

        {detailsTitle && details && (
          <div className="mt-4">
            <p className="font-medium text-white">{detailsTitle}</p>
            <ol className="mt-2 space-y-1 list-decimal pl-5 text-gray-200">
              {details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ol>
          </div>
        )}

        {note && <p className="mt-3 text-sm text-gray-300">{note}</p>}
        {!last && <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />}
      </div>
    </div>
  );
}

function Notepad({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="relative rounded-xl border border-gray-300 p-0 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(#fdfdfd, #ffffff),
          repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent 36px,
            rgba(14, 165, 233, 0.16) 36px,
            rgba(14, 165, 233, 0.16) 37px
          )
        `,
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="bg-[#FBE8D8] border-b border-gray-300 px-4 py-3 flex items-center gap-2">
        <CheckSquare className="w-5 h-5 text-site_orange" />
        <span className="font-semibold">{title}</span>
      </div>

      {/* faux ring holes */}
      <div className="absolute left-3 top-14 bottom-3 w-1.5 rounded bg-gray-200" />
      <div className="absolute left-3 top-24 w-1.5 h-1.5 rounded-full bg-gray-300" />
      <div className="absolute left-3 top-40 w-1.5 h-1.5 rounded-full bg-gray-300" />
      <div className="absolute left-3 top-56 w-1.5 h-1.5 rounded-full bg-gray-300" />

      <ul className="relative px-8 py-5 space-y-3">
        {items.map((t, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="mt-2 inline-block w-2 h-2 rounded-full bg-site_orange" />
            <span className="text-gray-700">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
