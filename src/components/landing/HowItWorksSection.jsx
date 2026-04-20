import { FileText, Image, Mic, Video, UserCheck, Captions, Film, ChevronRight } from 'lucide-react'
import { useScrollAnimationAll } from '../../hooks/useScrollAnimation'
import SectionTitle from '../shared/SectionTitle'

const ICONS = { FileText, Image, Mic, Video, UserCheck, Captions, Film }

const STEPS = [
  { icon: 'FileText', label: '輸入主題', sublabel: '年級 / 風格 / 時長', kpi: null,     color: '#60a5fa' },
  { icon: 'FileText', label: 'LLM 劇本',  sublabel: 'Qwen 3.5-14B',       kpi: '≤15秒', color: '#0ea5e9' },
  { icon: 'Image',    label: 'T2I 分鏡圖', sublabel: 'Qwen-Image-Lightning', kpi: '≤5秒/張', color: '#8b5cf6' },
  { icon: 'Mic',      label: 'TTS 旁白',  sublabel: 'VoxCPM2 48kHz',       kpi: '≤10秒', color: '#06b6d4' },
  { icon: 'Video',    label: 'I2V 影片',   sublabel: 'Wan 2.2-A14B',        kpi: '≤60秒', color: '#f59e0b' },
  { icon: 'UserCheck',label: 'Lip Sync',  sublabel: 'MuseTalk 30fps',       kpi: '~20秒', color: '#ec4899' },
  { icon: 'Film',     label: '合成 MP4',   sublabel: 'MoviePy + FFmpeg',    kpi: '~10秒', color: '#f97316' },
]

export default function HowItWorksSection() {
  useScrollAnimationAll('.step-reveal')

  return (
    <section id="how-it-works" className="py-24 bg-dark-base overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="step-reveal scroll-reveal">
          <SectionTitle
            tag="運作原理"
            title="一條龍 AI 生成流程"
            highlight="7 個步驟"
            subtitle="從主題關鍵字到完整 1080p MP4，每個環節都由 2026 年最新 SOTA 模型驅動。"
          />
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start gap-2 mt-4">
          {STEPS.map((step, i) => {
            const Icon = ICONS[step.icon]
            const isLast = i === STEPS.length - 1
            return (
              <div key={step.label} className="flex items-start flex-1">
                <div
                  className="step-reveal scroll-reveal flex flex-col items-center text-center"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-card"
                    style={{ backgroundColor: `${step.color}22`, border: `2px solid ${step.color}55` }}
                  >
                    <Icon size={20} style={{ color: step.color }} />
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5">{step.label}</div>
                  <div className="text-xs text-slate-500 mb-1.5">{step.sublabel}</div>
                  {step.kpi && (
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${step.color}18`, color: step.color, border: `1px solid ${step.color}40` }}
                    >
                      {step.kpi}
                    </span>
                  )}
                </div>
                {!isLast && (
                  <div className="flex items-center mt-5 mx-1 text-slate-600">
                    <ChevronRight size={16} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden flex flex-col gap-4 mt-4">
          {STEPS.map((step, i) => {
            const Icon = ICONS[step.icon]
            return (
              <div
                key={step.label}
                className="step-reveal scroll-reveal flex items-center gap-4 p-4 rounded-xl bg-dark-surface border-brand"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: `${step.color}22`, border: `2px solid ${step.color}55` }}
                >
                  <Icon size={18} style={{ color: step.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">{step.label}</div>
                  <div className="text-xs text-slate-500">{step.sublabel}</div>
                </div>
                {step.kpi && (
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: `${step.color}18`, color: step.color, border: `1px solid ${step.color}40` }}
                  >
                    {step.kpi}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* Total time */}
        <div className="step-reveal scroll-reveal text-center mt-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-dark-surface border-cyan">
            <span className="text-slate-400 text-sm">全流程時間</span>
            <span className="text-2xl font-bold text-gradient-gold font-heading">≤ 10 分鐘</span>
            <span className="text-slate-400 text-sm">（3 分鐘成品影片）</span>
          </div>
        </div>
      </div>
    </section>
  )
}
