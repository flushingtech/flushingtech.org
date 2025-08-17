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
  process.env.NEXT_PUBLIC_SIGNUP_FORM_URL || 'https://forms.gle/qiMigngcUeexVGoi6';

export default function CodeblockManifestoPage() {
  return (
    <main className="w-full">

      {/* 1) HERO — BLUE */}
      <section className="bg-site_navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20 lg:py-28">

          {/* MASSIVE HEADLINE */}
          <h1 className="font-site_header font-extrabold leading-[0.95] tracking-tight text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-8xl">
            Flushing Tech Manifesto
          </h1>

          {/* Original paragraph */}
            <p className="mt-6 max-w-4xl text-lg sm:text-xl font-site_1st_paragraph text-gray-200">
            We believe that every neighborhood deserves a thriving tech community where people can connect, learn, and grow together.
            </p>
            <p className="mt-4 max-w-4xl text-lg sm:text-xl font-site_1st_paragraph text-gray-200">
            The goal: a world of empowered neighborhoods, each with a thriving tech community.
            </p>
            <p className="mt-4 max-w-4xl text-lg sm:text-xl font-site_1st_paragraph text-gray-200">
            We believe every neighborhood, each empowered with its own local community of tech enthusiasts, is powerful—and a world filled with empowered neighborhoods is powerful.
            </p>
            <p className="mt-4 max-w-4xl text-lg sm:text-xl font-site_1st_paragraph text-gray-200">
            With the right tools and support, anyone can create a thriving, sustainable tech community in their neighborhood.
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
          </div>
        </div>
      </section>

      {/* 2) OUR VALUES — PEACH (typographic + accent rails; no cards) */}
      <section className="bg-[#FBE8D8] text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">{"// We Value"}</h2>

          <ul className="mt-10 space-y-6">
            {[
              {
              icon: Users,
              title: 'Community over competition',
              desc: "We prioritize building relationships and supporting each other's growth over individual achievement",
              },
              {
              icon: Handshake,
              title: 'Shared ownership over centralized control',
              desc: 'We distribute leadership and decision-making across the community',
              },
              {
              icon: BookOpen,
              title: 'Learning together over learning alone',
              desc: 'We believe collective growth strengthens everyone',
              },
              {
              icon: BadgeCheck,
              title: 'Action over planning',
              desc: 'We start small, iterate quickly, and learn by doing',
              },
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
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">{"// Benefits for participants"}</h2>

          <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {[
              {
              icon: Layers,
              title: 'Upskill through hands-on experience',
              desc: 'Learn new technologies and practices by working on real projects with peers',
              },
              {
              icon: BadgeCheck,
              title: 'Build a portfolio that opens doors',
              desc: 'Create tangible work you can showcase to prospective employers and clients',
              },
              {
              icon: Users,
              title: 'Connect across skill levels and backgrounds',
              desc: 'Meet people from diverse experiences, from beginners to seasoned professionals',
              },
              {
              icon: Sparkles,
              title: 'Explore tech in an enjoyable, low-pressure environment',
              desc: 'Discover new areas of technology through play and experimentation',
              },
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
                Join the movement
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4) THREE‑PHASE APPROACH — BLUE (timeline) */}
      <section className="bg-site_navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">{"// The Three‑Phase Approach"}</h2>

            <div className="mt-10 relative">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/20" />
            <TimelineItem
              badge="Phase 1 • Month 1"
              title="Initialization — Create a welcoming space to come together"
              items={[
              'Establish a communication platform (Discord, Slack, or similar)',
              'Host your first hackathon to bring people together.',
              'Join or form an annual stewarding committee with other local organizers',
              ]}
              side="left"
            />
            <TimelineItem
              badge="Phase 2 • Months 2–3"
              title="Scaling Up — Add structure for sustained growth"
              items={[
              'Launch bi-weekly office hours with workshops and open discussions',
              'Host Q&A events with senior engineers and subject matter experts',
              'Invite community members to take on hosting, social media, and moderation roles',
              'Form committees to distribute responsibility across marketing, moderation, and operations',
              ]}
              note="Critical Transition: When committees are formed, founders step back and become equal community members. True community ownership means releasing control and trusting the collective."
              side="right"
            />
            <TimelineItem
              badge="Phase 3 • Months 6–12"
              title="Growth — Create mechanisms for professional development by giving back to the neighborhood"
              items={[
              'Organize project teams to deliver tech solutions for local nonprofits and small businesses',
              'Require completion of collaborative 3-6 month training programs covering agile practices and agreed-upon tech stacks',
              'Connect with Business Improvement Districts, unions, and local expos to find customers',
              'Develop sponsor relationships and community partnerships',
              ]}
              side="left"
              last
            />
            </div>
        </div>
      </section>

      {/* 5) PRINCIPLES — PEACH (bold line‑list; no cards) */}
      <section className="bg-[#FBE8D8] text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">{"// Principles for Success"}</h2>
        <ul className="mt-8 space-y-4">
            {[
              {
              title: 'Start Where You Are',
              desc: 'Every neighborhood has unique assets. Use local schools, libraries, and community centers. Partner with existing organizations rather than competing with them.',
              },
              {
              title: 'Embrace Radical Hospitality',
              desc: 'Make your events accessible to beginners. Provide clear agendas, welcome newcomers explicitly, and create multiple ways for people to contribute.',
              },
              {
              title: 'Distribute Leadership Early',
              desc: 'The health of your community depends on shared ownership. Identify and develop leaders from day one, then step back to let them lead.',
              },
              {
              title: 'Focus on Local Value Creation',
              desc: 'The best way to sustain your community is to solve real problems for real neighbors. Build things that matter to your immediate area.',
              },
              {
              title: 'Measure Connection, Not Just Code',
              desc: "Success isn't just technical output—it's relationships formed, skills developed, and local problems solved.",
              },
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
          <h2 id="checklist-heading" className="font-site_header text-3xl sm:text-4xl font-bold">{"// Getting Started Checklist"}</h2>

          <div className="mt-10 max-w-3xl mx-auto flex flex-col gap-8 items-stretch">
            {[
              {
                week: 'Week 1',
                items: [
                  'Choose your communication platform',
                  'Identify potential venue for first event',
                  'Create basic event description and agenda',
                ],
              },
              {
                week: 'Week 2',
                items: [
                  'Secure venue and set first event date',
                  'Create promotional materials',
                  'Reach out to potential participants through local networks',
                ],
              },
              {
                week: 'Week 3',
                items: [
                  'Promote event through social media, local forums, and community boards',
                  'Prepare materials and supplies for first hackathon',
                  'Plan follow-up engagement strategy',
                ],
              },
              {
                week: 'Week 4',
                items: [
                  'Host first event',
                  'Collect contact information and feedback',
                  'Schedule immediate follow-up online',
                  'Begin planning second event',
                ],
              },
            ].map((b, i) => (
              <Notepad key={i} title={b.week} items={b.items} />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <h2 id="checklist-heading" className="font-site_header text-3xl sm:text-4xl font-bold">{"// Support Materials"}</h2>

          <div className="mt-10 max-w-3xl mx-auto flex flex-col gap-8 items-stretch">
            {[
              {
              week: 'Agenda',
              items: [
                'Welcome and introductions (5 minutes)',
                'Ideation of 3-5 project ideas (5-10 minutes)',
                'Team formation and building phase (1.5 hours)',
                'Presentations and friendly competition (10 minutes)',
                'Closing and networking',
              ],
              }
            ].map((b, i) => (
              <Notepad key={i} title={b.week} items={b.items} />
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto flex flex-col gap-8 items-stretch">
            <Notepad
              title="Venue Request Template"
              list={false}
              items={[
                `Hi [Venue Manager/Contact Name],`,
                `Hope you're doing well! I'm [Your Name], and I've been thinking about how cool it would be to get some local tech folks together right here in [Neighborhood]. You know how it is – there are tons of developers, designers, and tech-curious people around, but we never really have a chance to connect and work on stuff together.`,
                `I'm starting a little tech community called [Community Name], and honestly, [Venue Name] seems like the perfect spot for it. We're not talking about anything fancy – just a casual group of neighbors who want to hack on projects, help each other learn, and maybe build some stuff that actually helps our community.`,
                `Here's what I'm thinking: we'd love to host a 2-hour mini-hackathon once a month (or every couple weeks if it goes well). Nothing too intense – people show up, we brainstorm a few project ideas, team up, build something simple, then share what we made. Very chill, very welcoming to beginners.`,
                `We'd probably need space for 15-30 people, some tables, Wi-Fi, and power outlets. That's about it. We're pretty low-maintenance and always clean up after ourselves.`,
                `The thing is, I think this could be really good for [Venue Name] too. You'd get a bunch of local professionals coming through regularly, people would probably grab food or drinks, and you'd be known as the place that supports homegrown tech talent in [Neighborhood]. Plus, some of these folks end up working on really cool projects – websites for local businesses, apps that solve neighborhood problems, that kind of thing.`,
                `I'm big on starting small and seeing what happens. Maybe we try one event and see how it goes? I'm totally flexible on timing – whatever works best for you. We could even do it during your slower hours if that helps.`,
                `Would you be up for a quick chat about this? I could swing by sometime this week if you're around, or we could just talk on the phone. I'm really excited about the idea of building something meaningful right here in our neighborhood, and I think [Venue Name] would be an awesome partner for it.`,
                `Let me know what you think!`,
                `Thanks,`,
                `[Your Name]`,
                `[Phone Number]`,
                `[Email Address]`,
                `P.S. – I'm planning to get this first event going in the next couple weeks, so no pressure, but it would be amazing to have you on board from the beginning.`,
              ]}
            />
          </div>
        </div>
      </section>

      {/* 1) HERO — BLUE */}
      <section className="bg-site_navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20 lg:py-28">

          {/* Original paragraph */}
            <p className="mt-6 max-w-4xl text-lg sm:text-xl font-site_1st_paragraph text-gray-200">
              Building a neighborhood tech community is not about creating the next Silicon Valley. It's about creating a space where your neighbors can learn, grow, and solve problems together using technology.
            </p>
            <p className="mt-4 max-w-4xl text-lg sm:text-xl font-site_1st_paragraph text-gray-200">
              You don't need to be a natural event organizer. You don't need years of community-building experience.
            </p>
            <p className="mt-4 max-w-4xl text-lg sm:text-xl font-site_1st_paragraph text-gray-200">
              Start small. Include everyone. Share ownership. Create local value.
            </p>
            <p className="mt-4 max-w-4xl text-lg sm:text-xl font-site_1st_paragraph text-gray-200">
              The future of tech is neighborly.
            </p>

          <p className="mt-10 text-sm text-gray-200">
            This manifesto is released under Creative Commons. Adapt it for your neighborhood—share and remix freely.
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
          </div>
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

        {note && <p className="mt-3 text-sm text-gray-300">{note}</p>}
        {!last && <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />}
      </div>
    </div>
  );
}

function Notepad({ title, items, list = true }: { title: string; items: string[]; list?: boolean }) {
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

      <div className="relative px-8 py-5 space-y-3">
        {list === false ? (
          items.map((t, i) => (
            <p key={i} className="flex gap-3 items-start">
              <span className="text-gray-700">{t}</span>
            </p>
          ))
        ) : (
          <ul>
            {items.map((t, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-2 inline-block w-2 h-2 rounded-full bg-site_orange" />
                <span className="text-gray-700">{t}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
