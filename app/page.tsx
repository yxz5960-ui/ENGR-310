import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

const schools = [
  'MIT',
  'Stanford',
  'Carnegie Mellon',
  'Georgia Tech',
  'UC Berkeley',
  'UT Austin',
  'Michigan',
  'Caltech',
]

const problems = [
  {
    emoji: '🎯',
    title: 'Generic Advice',
    description:
      'Most resources offer one-size-fits-all guidance that ignores your specific research background and target programs. You deserve a strategy as unique as your application.',
  },
  {
    emoji: '🔍',
    title: 'Guessing Your Fit',
    description:
      "Without deep knowledge of faculty research and program culture, you're applying blind. Mismatched applications waste time and silently damage your chances.",
  },
  {
    emoji: '📄',
    title: 'One-Size SOP',
    description:
      "A generic Statement of Purpose won't move the needle at elite engineering programs. Each school demands a tailored narrative that speaks directly to their priorities.",
  },
]

const features = [
  {
    emoji: '📁',
    title: 'Upload & Gap Analysis',
    description:
      'Upload your CV, transcripts, and research experience. Our AI identifies exactly where your profile falls short compared to admitted student benchmarks.',
  },
  {
    emoji: '✍️',
    title: 'SOP Revision Engine',
    description:
      'Get line-by-line feedback on your Statement of Purpose. Our system rewrites weak sections to meet the standards of top-ranked engineering programs.',
  },
  {
    emoji: '🏫',
    title: 'School & Faculty Match',
    description:
      'Discover the programs and professors whose research aligns with yours. Stop guessing — start applying where you genuinely belong.',
  },
  {
    emoji: '📊',
    title: 'Admission Trend Intelligence',
    description:
      'Access historical admission data for energy and mechanical engineering programs. Know exactly what competitive applicants look like at each school.',
  },
  {
    emoji: '🔄',
    title: 'Iterative Refinement',
    description:
      'Submit drafts, receive AI-powered feedback, and iterate until your application is truly competitive. Continuous improvement built into every step.',
  },
  {
    emoji: '🎯',
    title: 'Program-Specific Strategy',
    description:
      "Every school has different priorities. We craft a unique positioning strategy for each program you're targeting, maximizing your acceptance odds.",
  },
]

const checkmarks = [
  'Junior or senior engineering student with research experience',
  'Targeting energy systems or mechanical engineering graduate programs',
  'Aiming for top-10 engineering schools with competitive admissions',
  'Ready to invest serious effort into building a standout application',
]

export default function HomePage() {
  return (
    <main
      className="bg-[#0d1120] text-white min-h-screen"
      style={{ fontFamily: 'var(--font-dm-sans, sans-serif)' }}
    >
      {/* ── NAVBAR ── */}
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
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/how-it-works" className="hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <Link
            href="/contact"
            className="bg-[#f59e0b] text-[#0d1120] px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-400 transition-colors"
          >
            Get Early Access
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        {/* Background glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#f59e0b]/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left — headline + CTAs */}
          <div>
            <div className="inline-block bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              AI-Powered Application Optimization
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Get Into Your
              <br />
              <span className="text-[#f59e0b]">Dream Program.</span>
              <br />
              Not By Luck.
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              GradEdge AI analyzes your academic profile, research background, and target programs
              to build a precision application strategy. Stop guessing — start competing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#f59e0b] text-[#0d1120] px-8 py-4 rounded-full font-semibold text-center hover:bg-amber-400 transition-colors"
              >
                Get Your Free Analysis
              </Link>
              <Link
                href="/how-it-works"
                className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white/5 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Right — email capture */}
          <EmailCapture />
        </div>
      </section>

      {/* ── SCROLLING TICKER ── */}
      <div className="border-y border-white/10 bg-white/[0.03] overflow-hidden py-4">
        <div className="animate-ticker flex whitespace-nowrap w-max">
          {[...schools, ...schools].map((school, i) => (
            <span key={i} className="mx-8 text-white/40 font-semibold text-sm tracking-widest uppercase">
              {school}
              <span className="text-[#f59e0b] mx-6">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── PROBLEM SECTION ── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Strong Engineering Background.
            <br />
            <span className="text-[#f59e0b]">Weak Application.</span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Most engineering students hit the same critical gaps that silently cost them admissions
            to top programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-8"
            >
              <div className="text-4xl mb-5">{p.emoji}</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {p.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-28 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Everything You Need to{' '}
              <span className="text-[#f59e0b]">Compete</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto">
              A complete AI toolkit built specifically for engineering graduate applicants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#0d1120] border border-white/10 rounded-2xl p-8 hover:-translate-y-1 hover:border-[#f59e0b]/30 hover:shadow-[0_8px_40px_rgba(245,158,11,0.08)] transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-xl flex items-center justify-center text-xl mb-5">
                  {f.emoji}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {f.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div className="inline-block bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              Who It&apos;s For
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Built for the{' '}
              <span className="text-[#f59e0b]">Serious</span> Applicant
            </h2>

            <p className="text-white/60 leading-relaxed mb-4">
              GradEdge AI is designed for junior and senior engineering students who have done the
              academic work — research experience, strong coursework, competitive GPA — and are now
              ready to make their application reflect that.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              If you&apos;re targeting energy systems or mechanical engineering programs at
              institutions like MIT, Stanford, or Georgia Tech, this platform gives you the
              strategic edge that generic counseling simply can&apos;t provide.
            </p>

            <ul className="space-y-3">
              {checkmarks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                  <span className="text-[#f59e0b] mt-0.5 flex-shrink-0 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — photo placeholder + badge */}
          <div className="relative">
            <div className="relative rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.03] h-[440px] flex items-center justify-center px-8">
              <div className="text-center">
                <div className="text-white/20 text-4xl mb-4">📷</div>
                <p className="text-white/30 text-sm font-mono leading-relaxed">
                  Add your photo here — replace with
                  <br />
                  <code className="text-[#f59e0b]/50 text-xs">
                    {`<Image src='/images/photo1.jpg' />`}
                  </code>
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#f59e0b] text-[#0d1120] rounded-2xl px-5 py-4 shadow-2xl">
              <div
                className="text-2xl font-extrabold leading-none"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                4.8★
              </div>
              <div className="text-xs font-semibold mt-0.5 opacity-80">Early tester rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="py-28 bg-gradient-to-br from-[#0d1120] via-[#0f1c38] to-[#0d1120] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f59e0b]/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Your Strongest Application
            <br />
            <span className="text-[#f59e0b]">Starts Here</span>
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-xl mx-auto">
            Join hundreds of engineering students building applications that actually get noticed
            by top programs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#f59e0b] text-[#0d1120] px-14 py-5 rounded-full font-bold text-lg hover:bg-amber-400 transition-colors shadow-lg"
          >
            Get Your Free Analysis
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/35 text-sm">
          <span
            className="text-xl font-bold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Grad<span className="text-[#f59e0b]">Edge</span> AI
          </span>
          <span>© {new Date().getFullYear()} GradEdge AI. All rights reserved.</span>
        </div>
      </footer>
    </main>
  )
}
