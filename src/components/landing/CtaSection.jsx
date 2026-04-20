import { ArrowRight, Code2 } from 'lucide-react'
import GlowButton from '../shared/GlowButton'

export default function CtaSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-hero bg-grid">
      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-accent-orange/30 to-transparent animate-scan" />
      </div>

      {/* Glow orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-brand-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          準備好讓 AI<br />
          <span className="text-gradient-gold">替你備課</span> 了嗎？
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
          親自操作 Demo，感受從輸入「光合作用」到產出完整教學影片的全自動流程。
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <GlowButton to="/demo" variant="primary" size="lg">
            立即試用 Demo
            <ArrowRight size={18} />
          </GlowButton>
          <GlowButton href="https://github.com" variant="ghost" size="lg">
            <Code2 size={18} />
            查看原始碼
          </GlowButton>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          {['零 API 費用', '全本地運行', 'Apache 2.0 授權', '離線可用'].map((b) => (
            <span key={b} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
