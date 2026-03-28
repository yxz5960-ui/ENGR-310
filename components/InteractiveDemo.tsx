'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

type Step = 1 | 2 | 3
type Degree = 'masters' | 'phd' | null

interface FileState {
  resume: File | null
  transcript: File | null
  sop: File | null
}

interface ScanLine {
  icon: string
  label: string
  status: 'pending' | 'active' | 'done'
}

const SCAN_LINES: Omit<ScanLine, 'status'>[] = [
  { icon: '🌐', label: 'Browsing program databases...' },
  { icon: '🔍', label: 'Identifying profile gaps...' },
  { icon: '🎯', label: 'Matching to top programs...' },
  { icon: '📊', label: 'Generating your report...' },
]

const PROGRAMS = [
  { name: 'University of Michigan', program: 'Energy Systems Engineering', match: 'Strong Match' },
  { name: 'Georgia Tech', program: 'Mechanical Engineering', match: 'Strong Match' },
  { name: 'Carnegie Mellon', program: 'Mechanical Engineering', match: 'Good Match' },
  { name: 'UC Santa Barbara', program: 'Materials & Mechanical Eng.', match: 'Good Match' },
  { name: 'MIT', program: 'Energy Initiative (MechE)', match: 'Reach' },
] as const

const GAPS = [
  'SOP lacks connection to specific research areas at target programs',
  'No mention of faculty whose work aligns with your background',
  'Research experience is present but impact is not quantified',
  'Statement of purpose opens with background, not a research question',
]

const ACTIONS = [
  'Open your SOP with a specific problem in energy or mechanical systems you want to solve',
  'Name 2–3 faculty per school whose research matches your interests',
  'Add metrics to your research descriptions (e.g. "reduced error by 18%")',
  'Tailor the final paragraph of your SOP to each program\'s stated research priorities',
]

function matchBadge(match: string) {
  if (match === 'Strong Match') return 'bg-green-500/15 text-green-400 border border-green-500/30'
  if (match === 'Good Match') return 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30'
  return 'bg-orange-500/15 text-orange-400 border border-orange-500/30'
}

function Spinner() {
  return (
    <svg
      className="w-4 h-4 animate-spin text-[#f59e0b]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  )
}

function GreenCheck() {
  return <span className="text-green-400 text-sm font-bold">✓</span>
}

export default function InteractiveDemo() {
  const [step, setStep] = useState<Step>(1)
  const [major, setMajor] = useState<string>('')
  const [degree, setDegree] = useState<Degree>(null)
  const [files, setFiles] = useState<FileState>({ resume: null, transcript: null, sop: null })
  const [scanLines, setScanLines] = useState<ScanLine[]>(
    SCAN_LINES.map((l) => ({ ...l, status: 'pending' }))
  )
  const [progress, setProgress] = useState<number>(0)
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const canSubmit = major.trim() !== '' && degree !== null && files.resume !== null && files.transcript !== null && files.sop !== null

  function handleFile(key: keyof FileState) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] ?? null
      setFiles((prev) => ({ ...prev, [key]: file }))
    }
  }

  function clearTimeouts() {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }

  useEffect(() => {
    return () => clearTimeouts()
  }, [])

  function startScan() {
    setStep(2)
    setScanLines(SCAN_LINES.map((l) => ({ ...l, status: 'pending' })))
    setProgress(0)
    clearTimeouts()

    // Progress bar: animate to 100% over 6000ms
    const startTime = Date.now()
    const totalDuration = 6000
    function tick() {
      const elapsed = Date.now() - startTime
      const pct = Math.min((elapsed / totalDuration) * 100, 100)
      setProgress(pct)
      if (pct < 100) {
        const t = setTimeout(tick, 30)
        timeoutsRef.current.push(t)
      }
    }
    tick()

    // Scanning lines sequence
    const schedule: { at: number; active: number; done: number | null }[] = [
      { at: 0,    active: 0, done: null },
      { at: 1500, active: 1, done: 0 },
      { at: 3000, active: 2, done: 1 },
      { at: 4500, active: 3, done: 2 },
    ]

    schedule.forEach(({ at, active, done }) => {
      const t = setTimeout(() => {
        setScanLines((prev) =>
          prev.map((line, i) => {
            if (i === active) return { ...line, status: 'active' }
            if (i === done) return { ...line, status: 'done' }
            return line
          })
        )
      }, at)
      timeoutsRef.current.push(t)
    })

    // Mark last line done and go to results
    const t = setTimeout(() => {
      setScanLines((prev) => prev.map((line) => ({ ...line, status: 'done' })))
      setProgress(100)
      setTimeout(() => setStep(3), 400)
    }, 6000)
    timeoutsRef.current.push(t)
  }

  function reset() {
    clearTimeouts()
    setStep(1)
    setMajor('')
    setDegree(null)
    setFiles({ resume: null, transcript: null, sop: null })
    setScanLines(SCAN_LINES.map((l) => ({ ...l, status: 'pending' })))
    setProgress(0)
  }

  return (
    <div className="bg-[#0d1120] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
      {/* ── STEP 1: INPUT ── */}
      {step === 1 && (
        <div className="p-8 md:p-12 transition-opacity duration-300">
          <div className="max-w-xl mx-auto space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#f59e0b] font-semibold mb-1">
                Step 1 of 3
              </p>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Tell us about your application
              </h3>
            </div>

            {/* Major */}
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                Your Major
              </label>
              <input
                type="text"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                placeholder="e.g. Mechanical Engineering, Energy Systems"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#f59e0b]/50 transition-all"
              />
            </div>

            {/* Degree toggle */}
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                Degree Goal
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(['masters', 'phd'] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDegree(d)}
                    className={`py-3.5 rounded-xl font-semibold text-sm transition-all border ${
                      degree === d
                        ? 'bg-[#f59e0b] text-[#0d1120] border-[#f59e0b]'
                        : 'bg-transparent text-white border-white/20 hover:border-white/40'
                    }`}
                  >
                    {d === 'masters' ? "Master's" : 'PhD'}
                  </button>
                ))}
              </div>
            </div>

            {/* File uploads */}
            <div className="space-y-3">
              <label className="block text-xs text-white/40 uppercase tracking-wider">
                Upload Documents
              </label>
              {(
                [
                  { key: 'resume', icon: '📄', label: 'Upload Resume' },
                  { key: 'transcript', icon: '📊', label: 'Upload Transcript' },
                  { key: 'sop', icon: '✍️', label: 'Upload Statement of Purpose' },
                ] as const
              ).map(({ key, icon, label }) => (
                <label
                  key={key}
                  className={`flex items-center gap-4 border-2 border-dashed rounded-xl px-5 py-4 cursor-pointer transition-all ${
                    files[key]
                      ? 'border-green-500/50 bg-green-500/5'
                      : 'border-white/15 hover:border-[#f59e0b]/50 bg-white/[0.02]'
                  }`}
                >
                  <span className="text-2xl">{files[key] ? '✅' : icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${files[key] ? 'text-green-400' : 'text-white/60'}`}>
                      {files[key] ? files[key]!.name : label}
                    </p>
                    {!files[key] && (
                      <p className="text-xs text-white/25 mt-0.5">PDF, DOC, or DOCX</p>
                    )}
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFile(key)}
                  />
                </label>
              ))}
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={startScan}
              disabled={!canSubmit}
              className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
                canSubmit
                  ? 'bg-[#f59e0b] text-[#0d1120] hover:bg-amber-400 cursor-pointer opacity-100'
                  : 'bg-[#f59e0b] text-[#0d1120] cursor-not-allowed opacity-50'
              }`}
            >
              Analyze My Application →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 2: SCANNING ── */}
      {step === 2 && (
        <div className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[480px] transition-opacity duration-300">
          {/* Progress bar */}
          <div className="w-full max-w-md mb-12">
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#f59e0b] rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="max-w-md w-full space-y-5">
            <p
              className="text-2xl font-bold text-white mb-8 text-center"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Analyzing your application…
            </p>
            {scanLines.map((line, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 transition-opacity duration-500 ${
                  line.status === 'pending' ? 'opacity-25' : 'opacity-100'
                }`}
              >
                <span className="text-xl w-7 text-center">{line.icon}</span>
                <span className={`flex-1 text-sm ${line.status === 'done' ? 'text-white/60' : 'text-white'}`}>
                  {line.label}
                </span>
                <span className="w-5 flex items-center justify-center">
                  {line.status === 'active' && <Spinner />}
                  {line.status === 'done' && <GreenCheck />}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── STEP 3: RESULTS ── */}
      {step === 3 && (
        <div className="p-8 md:p-12 transition-opacity duration-300">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#f59e0b] font-semibold mb-1">
                Analysis Complete
              </p>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Your Application Report
              </h3>
            </div>
            <button
              onClick={reset}
              className="text-xs text-white/40 hover:text-white/70 transition-colors underline underline-offset-4 self-start sm:self-auto"
            >
              ← Analyze Another Application
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* Score */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <div className="flex items-end gap-2 mb-3">
                  <span
                    className="text-6xl font-extrabold text-[#f59e0b]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    71
                  </span>
                  <span className="text-white/40 text-xl mb-2">/100</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: '71%' }} />
                </div>
                <p className="text-white/50 text-sm">Application Strength Score</p>
              </div>

              {/* Program matches */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Top Program Matches
                </h4>
                <div className="space-y-3">
                  {PROGRAMS.map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center justify-between gap-3 bg-white/[0.03] rounded-xl px-4 py-3"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white truncate">{p.name}</p>
                        <p className="text-xs text-white/40 truncate">{p.program}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${matchBadge(p.match)}`}>
                        {p.match}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/30 italic mt-4">
                  Matches generated based on your major, degree goal, and uploaded materials.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              {/* Gaps */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                  <span className="text-orange-400">⚠</span> Gaps Identified
                </h4>
                <ul className="space-y-2.5">
                  {GAPS.map((gap) => (
                    <li key={gap} className="flex items-start gap-2.5 text-sm text-orange-300/80">
                      <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                      {gap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                  <span className="text-[#f59e0b]">✦</span> Recommended Actions
                </h4>
                <ul className="space-y-2.5">
                  {ACTIONS.map((action) => (
                    <li key={action} className="flex items-start gap-2.5 text-sm text-green-300/80">
                      <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Locked faculty preview */}
              <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-6 overflow-hidden">
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Faculty Match Report
                </h4>
                {/* Blurred fake rows */}
                <div className="space-y-3 blur-sm select-none pointer-events-none" aria-hidden>
                  {['Prof. Sarah Chen — Energy Storage & Thermal Systems', 'Dr. Marcus Webb — Turbomachinery & Fluid Dynamics'].map((name) => (
                    <div key={name} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0" />
                      <p className="text-sm text-white/70">{name}</p>
                    </div>
                  ))}
                </div>
                {/* Frosted overlay */}
                <div className="absolute inset-0 bg-[#0d1120]/80 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4 rounded-2xl">
                  <span className="text-3xl">🔒</span>
                  <p className="text-sm font-semibold text-white text-center px-4">
                    Faculty Match Report — Unlock with Full Analysis
                  </p>
                  <Link
                    href="/contact"
                    className="bg-[#f59e0b] text-[#0d1120] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-amber-400 transition-colors"
                  >
                    Get My Full Report →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width CTA */}
          <div className="mt-8 border border-[#f59e0b]/30 bg-[#f59e0b]/5 rounded-2xl p-7 text-center">
            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-2xl mx-auto">
              This is a preview. Your full GradEdge report includes a complete SOP rewrite,
              ranked school list, faculty outreach emails, and a week-by-week action plan.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#f59e0b] text-[#0d1120] px-10 py-3.5 rounded-full font-bold text-sm hover:bg-amber-400 transition-colors"
            >
              Start My Full Analysis →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
