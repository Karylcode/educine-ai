import { Shield, Cpu, Captions, BookOpen, Download, BadgeCheck } from 'lucide-react'
import { FEATURES } from '../../data/features'
import { useScrollAnimationAll } from '../../hooks/useScrollAnimation'
import SectionTitle from '../shared/SectionTitle'

const ICONS = { Shield, Cpu, Captions, BookOpen, Download, BadgeCheck }

export default function FeaturesSection() {
  useScrollAnimationAll('.feat-reveal')

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="feat-reveal scroll-reveal">
          <SectionTitle
            tag="核心功能"
            title="為教育現場設計的"
            highlight="完整解決方案"
            subtitle="不只是一個 AI 工具，而是一套從備課到產出的完整教學影片生成平台。"
            light
          />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((feat, i) => {
            const Icon = ICONS[feat.icon]
            const isLarge = feat.size === 'large'
            const isMedium = feat.size === 'medium'

            return (
              <div
                key={feat.id}
                className={`feat-reveal scroll-reveal group rounded-2xl p-6 bg-white border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-default ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : isMedium ? 'md:col-span-1' : ''
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feat.color}15` }}
                >
                  <Icon size={22} style={{ color: feat.color }} />
                </div>
                <h3 className="font-heading font-semibold text-dark-base mb-2 text-lg leading-snug">
                  {feat.title}
                </h3>
                <p className={`text-slate-500 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}>
                  {feat.desc}
                </p>
                {isLarge && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Apache 2.0 授權', '離線可用', '個資保護', '零雲端費用'].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
