import { Clapperboard, Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
            <Clapperboard size={14} className="text-accent-cyan" />
          </div>
          <span className="font-heading font-bold text-white">
            EduCine <span className="text-accent-cyan">AI</span>
          </span>
        </div>

        <p className="text-sm text-slate-500 text-center">
          v2.0 · Student MVP, Solo Edition · 2026/02 — 2026/09<br />
          基於 RTX 5090 全本地模型之生成式 AI 教育影音平台
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Repository"
            className="text-slate-500 hover:text-white transition-colors cursor-pointer"
          >
            <Code2 size={20} />
          </a>
          <span className="text-xs text-slate-600">Apache 2.0 / MIT 授權</span>
        </div>
      </div>
    </footer>
  )
}
