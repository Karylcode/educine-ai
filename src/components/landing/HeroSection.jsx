import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, ChevronDown, Sparkles } from 'lucide-react'
import AnimatedCounter from '../shared/AnimatedCounter'
import GlowButton from '../shared/GlowButton'

const TOPICS = ['光合作用', '台灣歷史', '牛頓運動定律', '三角函數', '細胞分裂', '地球自轉']

export default function HeroSection() {
  const [topicIdx, setTopicIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setTopicIdx((i) => (i + 1) % TOPICS.length)
        setFade(true)
      }, 300)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-hero bg-grid">
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent animate-scan" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-cyan/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan text-sm font-medium">
            <Sparkles size={14} />
            全本地 AI · 零 API 費用 · 離線可用
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-2">
            輸入「
            <span
              className="text-gradient-cyan inline-block min-w-[4ch] transition-opacity duration-300"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {TOPICS[topicIdx]}
            </span>
            」
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
            自動產出教學影片
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg lg:max-w-none mx-auto">
            EduCine AI 整合 LLM 劇本 → 分鏡圖像 → TTS 旁白 → 動態影片 → 嘴型同步，
            讓國中小教師在 <strong className="text-white">10 分鐘內</strong> 產出一支完整 1080p 教學影片。
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <GlowButton to="/demo" variant="primary" size="lg">
              立即體驗 Demo
              <ArrowRight size={18} />
            </GlowButton>
            <GlowButton href="#how-it-works" variant="secondary" size="lg">
              了解運作原理
              <ChevronDown size={18} />
            </GlowButton>
          </div>
        </div>

        {/* Right — mock video player */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm lg:max-w-md animate-float">
            {/* Screen */}
            <div className="rounded-2xl overflow-hidden border-2 border-dark-border shadow-card bg-dark-surface">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-dark-elevated border-b border-dark-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-slate-500 font-mono ml-2">educine_output.mp4 · 1080p</span>
              </div>
              {/* Video area */}
              <div className="relative aspect-video bg-gradient-to-br from-brand-900 via-dark-elevated to-brand-800 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                {/* Play button with pulse-glow */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-accent-orange/90 flex items-center justify-center cursor-pointer hover:bg-accent-orange transition-colors animate-pulse-glow">
                  <Play size={28} className="text-white ml-1" fill="white" />
                </div>
                {/* Corner badge */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-accent-cyan/20 border border-accent-cyan/40 text-accent-cyan text-xs font-mono">
                  1920×1080
                </div>
                {/* Bottom bar */}
                <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-dark-base/90 to-transparent flex items-end px-3 pb-1.5">
                  <div className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full w-1/3 rounded-full bg-accent-orange" />
                  </div>
                  <span className="text-xs text-slate-400 ml-2 font-mono">1:02 / 3:00</span>
                </div>
              </div>
            </div>

            {/* Floating labels */}
            <div className="absolute -top-4 -left-4 px-2.5 py-1 rounded-lg bg-dark-elevated border border-accent-cyan/30 text-accent-cyan text-xs font-semibold shadow-card">
              ✓ 劇本生成完畢
            </div>
            <div className="absolute -bottom-4 -right-4 px-2.5 py-1 rounded-lg bg-dark-elevated border border-accent-green/30 text-accent-green text-xs font-semibold shadow-card">
              ✓ 合成 MP4 完成
            </div>
          </div>
        </div>
      </div>

      {/* KPI strip */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-16 mb-8">
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: 10, suffix: '分鐘', label: '端到端生成時間', prefix: '≤' },
            { value: 5, suffix: '秒', label: '單張分鏡圖生成', prefix: '≤' },
            { value: 60, suffix: '秒', label: 'I2V 影片片段生成', prefix: '≤' },
          ].map((item) => (
            <div key={item.label} className="text-center p-4 rounded-xl bg-dark-surface/70 border-brand backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-gold font-heading">
                {item.prefix}<AnimatedCounter value={item.value} suffix={item.suffix} />
              </div>
              <div className="text-xs text-slate-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
