'use client';

import { BadgeCheck, Rocket, Users, BookOpen, Handshake, Layers, Sparkles, Target, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CodeblockManifestoPage() {
  return (
    <main className="w-full">
      {/* HERO — Peach */}
      <section className="bg-[#FBE8D8] text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-gray-300/70 bg-white/70 text-sm">
            <Sparkles className="w-4 h-4 text-site_orange" />
            <span className="font-medium">CodeBlock Manifesto</span>
          </div>

          <h1 className="font-site_header text-4xl sm:text-5xl font-bold leading-tight">
            communities <span className="text-site_orange">&</span> <span className="text-site_navy">neighborhood tech</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-site_1st_paragraph text-gray-700">
            We believe that every neighborhood deserves a thriving tech community where people can connect,
            learn, and grow together. The goal: a world of empowered neighborhoods, each with a vibrant local tech scene.
          </p>
        </div>
      </section>

      {/* OUR VALUES — White */}
      <section className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">// Our Values</h2>
          <p className="mt-4 max-w-3xl text-gray-700">
            With the right tools and support, anyone can create a sustainable, welcoming tech community.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Community over competition', desc: "We build relationships and lift each other." },
              { icon: Handshake, title: 'Shared ownership', desc: "Leadership & decisions are distributed." },
              { icon: BookOpen, title: 'Learning together', desc: "Collective growth strengthens everyone." },
              { icon: Rocket, title: 'Action > planning', desc: "Start small, iterate, learn by doing." },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <c.icon className="w-7 h-7 text-site_navy" />
                <h3 className="mt-4 font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS — Navy */}
      <section className="bg-site_navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">// Benefits</h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, title: 'Upskill by building', desc: 'Learn new tech on real projects with peers.' },
              { icon: BadgeCheck, title: 'Portfolio that opens doors', desc: 'Ship tangible work you can showcase.' },
              { icon: Users, title: 'Connect across skill levels', desc: 'Beginners to pros, all welcome.' },
              { icon: Sparkles, title: 'Low-pressure exploration', desc: 'Play, experiment, enjoy tech.' },
            ].map((b, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <b.icon className="w-7 h-7 text-peach" />
                <h3 className="mt-4 font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE-PHASE APPROACH — Peach */}
      <section className="bg-[#FBE8D8] text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">// The Three‑Phase Approach</h2>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {/* Phase 1 */}
            <div className="rounded-2xl border border-gray-300 bg-white shadow-sm p-6">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                <Target className="w-4 h-4 text-site_orange" /> Phase 1: Initialization (Month 1)
              </div>
              <h3 className="mt-3 font-semibold">Create a welcoming space</h3>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                <li>Set up Discord/Slack</li>
                <li>Host your first 2‑hour mini‑hackathon</li>
                <li>Join/form a stewarding committee</li>
              </ul>
              <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
                <p className="font-medium">First Hackathon Format:</p>
                <ol className="mt-2 space-y-1 list-decimal pl-5 text-gray-700">
                  <li>Welcome & intros (5m)</li>
                  <li>Ideate 3‑5 projects (5‑10m)</li>
                  <li>Team up & build (1.5h)</li>
                  <li>Presentations (10m) → closing & networking</li>
                </ol>
                <p className="mt-3 text-sm text-gray-600">
                  Invite all roles. Encourage prep (Git/IDE/design). Focus on connection over competition. Follow up online and plan the next event within two weeks.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="rounded-2xl border border-gray-300 bg-white shadow-sm p-6">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                <Target className="w-4 h-4 text-site_orange" /> Phase 2: Scaling Up (Months 2‑3)
              </div>
              <h3 className="mt-3 font-semibold">Add structure for sustained growth</h3>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                <li>Bi‑weekly office hours & workshops</li>
                <li>Q&A with senior engineers/SMEs</li>
                <li>Rotate hosting, social, moderation</li>
                <li>Form committees (marketing, moderation, ops)</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Critical transition: when committees form, founders step back and become equal members—trust the collective.
              </p>
            </div>

            {/* Phase 3 (full width on mobile) */}
            <div className="lg:col-span-2 rounded-2xl border border-gray-300 bg-white shadow-sm p-6">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                <Target className="w-4 h-4 text-site_orange" /> Phase 3: Growth (Months 6‑12)
              </div>
              <h3 className="mt-3 font-semibold">Create pathways for professional development</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-gray-700 list-disc pl-5">
                <li>Project teams for local nonprofits/small biz</li>
                <li>3‑6 month collaborative training (agile + agreed stacks)</li>
                <li>Partner with BIDs, unions, local expos</li>
                <li>Develop sponsors & community partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES — White */}
      <section className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">// Principles for Success</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Start Where You Are', desc: 'Use local schools, libraries, community centers. Partner with existing orgs.' },
              { title: 'Radical Hospitality', desc: 'Make events beginner‑friendly with clear agendas and many ways to contribute.' },
              { title: 'Distribute Leadership Early', desc: 'Identify leaders from day one, then step back.' },
              { title: 'Focus on Local Value', desc: 'Solve real problems for real neighbors.' },
              { title: 'Measure Connection', desc: 'Track relationships, skills, and local wins—not just code.' },
              { title: 'Actionable Momentum', desc: 'Plan the immediate next event within two weeks.' },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST — Navy */}
      <section className="bg-site_navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
          <h2 className="font-site_header text-3xl sm:text-4xl font-bold">// Getting Started Checklist</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {
                week: 'Week 1',
                items: [
                  'Choose your communication platform',
                  'Identify a venue for the first event',
                  'Draft event description & agenda',
                ],
              },
              {
                week: 'Week 2',
                items: [
                  'Secure venue & set date',
                  'Create promo materials',
                  'Reach out through local networks',
                ],
              },
              {
                week: 'Week 3',
                items: [
                  'Promote via social, forums, community boards',
                  'Prep materials & supplies',
                  'Plan follow‑up engagement',
                ],
              },
              {
                week: 'Week 4',
                items: [
                  'Host first event & collect feedback',
                  'Schedule immediate follow‑up online',
                  'Begin planning the second event',
                ],
              },
            ].map((block, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="inline-flex items-center gap-2 text-peach">
                  <CheckSquare className="w-5 h-5" />
                  <p className="font-semibold">{block.week}</p>
                </div>
                <ul className="mt-4 space-y-2 text-gray-200">
                  {block.items.map((it, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-peach" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90">
              <a href="https://www.meetup.com/flushing-tech" target="_blank">Join a Meetup</a>
            </Button>
          </div>
        </div>
      </section>

      {/* LICENSE / FOOTNOTE — White */}
      <section className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
          <p className="text-sm text-gray-600">
            This manifesto is released under Creative Commons and may be adapted for local use. Share, modify, and make it your own.
          </p>
        </div>
      </section>
    </main>
  );
}
