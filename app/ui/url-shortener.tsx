'use client'

import { useState } from 'react'

export default function UrlShortener() {
  const [inputValue, setInputValue] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const isResult = originalUrl !== ""

  async function handleShorten() {
    if (!inputValue.trim()) return;
    setIsLoading(true);

    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: inputValue }),
    })

    const { code } = await response.json()

    setOriginalUrl(inputValue);
    setInputValue(`${window.location.origin}/${code}`);
    setIsLoading(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(inputValue)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 5000)
  }

  function handleReset() {
    setOriginalUrl("")
    setInputValue("")
  }

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      {isCopied && (
        <div className="fixed bottom-5 right-5 bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg">
          Copied!
        </div>
      )}
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
            disabled={isLoading}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            {isLoading ? 'Shortening...' : 'Shorten'}
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
