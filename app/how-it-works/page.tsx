import Link from 'next/link'
import InteractiveDemo from '@/components/InteractiveDemo'

const steps = [
  {
    number: '01',
    title: 'Upload Your Materials',
    description:
      'Submit your resume, transcript, and Statement of Purpose. Our AI reads every line against the standards of your target programs.',
  },
  {
    number: '02',
    title: 'Gap Analysis',
    description:
      'We identify exactly where your application falls short compared to admitted student benchmarks — not generic advice, but profile-specific findings.',
  },
  {
    number: '03',
    title: 'Program & Faculty Match',
    description:
      'Discover the programs and professors whose research aligns with yours. Every recommendation is backed by real admission data.',
  },
  {
    number: '04',
    title: 'Iterative Refinement',
    description:
      'Receive AI-powered SOP rewrites and a week-by-week action plan. Revise until your application is genuinely competitive.',
  },
]

export default function HowItWorksPage() {
  return (
    <main
      className="bg-[#0d1120] text-white min-h-screen"
      style={{ fontFamily: 'var(--font-dm-sans, sans-serif)' }}
    >
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0d1120]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Grad<span className="text-[#f59e0b]">Edge</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/how-it-works" className="text-white transition-colors">How It Works</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <Link
            href="/contact"
            className="bg-[#f59e0b] text-[#0d1120] px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-400 transition-colors"
          >
            Get Early Access
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          How It Works
        </div>
        <h1
          className="text-5xl font-bold mb-5"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          From Upload to{' '}
          <span className="text-[#f59e0b]">Acceptance Strategy</span>
        </h1>
        <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
          Four steps. No guesswork. A precision application strategy built around your specific
          profile and target programs.
        </p>
      </section>

      {/* Steps */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {steps.map((s) => (
            <div
              key={s.number}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-8"
            >
              <span
                className="text-4xl font-extrabold text-[#f59e0b]/20 block mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {s.number}
              </span>
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {s.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="mb-8 text-center">
          <div className="inline-block bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Try It Now
          </div>
          <h2
            className="text-4xl font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            See GradEdge AI in Action
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm">
            Upload your documents below and get an instant mock analysis of your application.
          </p>
        </div>

        <InteractiveDemo />
      </section>
    </main>
  )
}
