import UrlShortener from "./ui/url-shortener"

const cards = [
  {
    step: "1",
    title: "Paste your URL",
    description: "Copy and paste any long URL into the input field above.",
  },
  {
    step: "2",
    title: "Click Shorten",
    description: "Hit the Shorten button to instantly generate your short link.",
  },
  {
    step: "3",
    title: "Share anywhere",
    description: "Copy your short link and share it on any platform you like.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950">
      <header className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <div className="flex items-center gap-1">
          <span className="text-white text-xl font-bold">Snip</span>
          <span className="text-indigo-400 text-xl font-bold">.ly</span>
        </div>
        <p className="text-sm text-slate-400 hidden sm:block">
          Shorten. Share. Simple.
        </p>
      </header>

      <main className="flex flex-col items-center px-4 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-3">
          Shorten your links
        </h1>
        <p className="text-slate-400 text-center mb-10 max-w-md">
          Paste a long URL and get a clean, shareable short link in seconds.
        </p>

        <UrlShortener />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-3xl w-full">
          {cards.map((card) => (
            <div
              key={card.step}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold mb-4">
                {card.step}
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
