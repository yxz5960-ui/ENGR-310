'use client'

import { useState } from 'react'

interface FormState {
  name: string
  email: string
}

export default function EmailCapture() {
  const [form, setForm] = useState<FormState>({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    /* TODO: replace with Supabase insert */
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white/5 border border-[#f59e0b]/40 rounded-2xl p-10 text-center flex flex-col items-center justify-center min-h-[320px]">
        <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-full flex items-center justify-center text-3xl mb-4">
          🎉
        </div>
        <h3
          className="text-2xl font-bold text-[#f59e0b] mb-2"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          You&apos;re on the list!
        </h3>
        <p className="text-white/50 text-sm max-w-xs">
          We&apos;ll reach out shortly with your free analysis details and early access invite.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
      <div className="mb-6">
        <span className="inline-block bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
          Free for Early Members
        </span>
        <h3
          className="text-2xl font-bold mb-1"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Reserve Your Spot
        </h3>
        <p className="text-white/50 text-sm">
          Get a free profile analysis when we launch.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs text-white/40 uppercase tracking-wider mb-1.5"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#f59e0b]/50 focus:bg-white/8 transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs text-white/40 uppercase tracking-wider mb-1.5"
          >
            University Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@university.edu"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#f59e0b]/50 focus:bg-white/8 transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#f59e0b] text-[#0d1120] py-3.5 rounded-xl font-semibold text-sm hover:bg-amber-400 active:scale-[0.98] transition-all mt-2"
        >
          Get Early Access →
        </button>
      </form>

      <p className="text-white/25 text-xs text-center mt-4">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  )
}
