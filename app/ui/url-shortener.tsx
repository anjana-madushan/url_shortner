'use client'

import { useState } from 'react'

const SHORTENED_URL = "https://snip.ly/abc123"

export default function UrlShortener() {
  const [inputValue, setInputValue] = useState("")
  const [originalUrl, setOriginalUrl] = useState("")

  const isResult = originalUrl !== ""

  function handleShorten() {
    if (!inputValue.trim()) return
    setOriginalUrl(inputValue)
    setInputValue(SHORTENED_URL)
  }

  function handleCopy() {
    navigator.clipboard.writeText(inputValue)
  }

  function handleReset() {
    setOriginalUrl("")
    setInputValue("")
  }

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <div className="flex gap-3">
        <input
          type="url"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Paste your long URL here..."
          readOnly={isResult}
          className="flex-1 bg-white/10 text-white placeholder-slate-500 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
        />
        {isResult ? (
          <button
            onClick={handleCopy}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            Copy
          </button>
        ) : (
          <button
            onClick={handleShorten}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            Shorten
          </button>
        )}
      </div>

      {isResult && (
        <div className="flex flex-col gap-3">
          <p className="text-slate-400 text-sm">
            Original URL:{" "}
            <span className="text-slate-300 break-all">{originalUrl}</span>
          </p>
          <button
            onClick={handleReset}
            className="self-start text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
          >
            Shorten another URL
          </button>
        </div>
      )}
    </div>
  )
}
