import Link from 'next/link'

export default function AboutPage() {
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
            <Link href="/about" className="text-white transition-colors">About</Link>
            <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
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

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="inline-block bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            About GradEdge AI
          </div>
          <h1
            className="text-5xl font-bold mb-5"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Why We Built This
          </h1>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            GradEdge AI was built by engineers who lived through the graduate application process
            firsthand — and saw exactly where talented students were losing out.
          </p>
        </div>

        {/* Pitch Video */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-14 bg-black">
          <video
            src="/videos/pitch.mp4"
            title="GradEdge AI — 30 Second Pitch"
            controls
            playsInline
            className="w-full h-full"
          />
        </div>

        {/* Body copy */}
        <div className="space-y-6 text-white/60 leading-relaxed text-base max-w-2xl mx-auto">
          <p>
            Too many engineering students with strong research backgrounds and competitive GPAs
            receive rejections from programs they were genuinely qualified for — not because of
            their credentials, but because of how their applications were positioned.
          </p>
          <p>
            GradEdge AI closes that gap. We combine admission trend data, faculty research
            matching, and AI-driven SOP feedback to give every applicant the same strategic
            advantage that previously only came from expensive private consulting.
          </p>
          <p>
            Our focus is narrow and intentional: energy systems and mechanical engineering
            graduate programs at the most competitive institutions in the country. Depth over
            breadth, precision over guesswork.
          </p>
        </div>

        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-block bg-[#f59e0b] text-[#0d1120] px-10 py-4 rounded-full font-bold hover:bg-amber-400 transition-colors"
          >
            Get Your Free Analysis
          </Link>
        </div>
      </section>
    </main>
  )
}
