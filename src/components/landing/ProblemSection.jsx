import { Clock, AlertCircle, Puzzle } from 'lucide-react'
import { PROBLEMS } from '../../data/features'
import { useScrollAnimationAll } from '../../hooks/useScrollAnimation'

const ICONS = { Clock, AlertCircle, Puzzle }

export default function ProblemSection() {
  useScrollAnimationAll('.problem-reveal')

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 problem-reveal scroll-reveal">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-orange-100 text-accent-orange border border-orange-200">
            教育現場痛點
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-base leading-tight mb-4">
            製作教學影片，為何這麼難？
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            傳統影片製作消耗大量時間與精力，讓老師無法專注於真正重要的事——教學本身。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROBLEMS.map((p, i) => {
            const Icon = ICONS[p.icon]
            return (
              <div
                key={p.stat}
                className="problem-reveal scroll-reveal bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:border-orange-200 transition-all duration-300"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-accent-orange" />
                </div>
                <div className="text-4xl font-bold text-dark-base font-heading mb-2">{p.stat}</div>
                <div className="text-sm font-semibold text-slate-800 mb-3">{p.label}</div>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Arrow to solution */}
        <div className="text-center mt-12 problem-reveal scroll-reveal">
          <div className="inline-flex flex-col items-center gap-2 text-slate-400">
            <div className="w-0.5 h-10 bg-gradient-to-b from-transparent to-accent-orange rounded" />
            <span className="text-sm font-medium text-accent-orange bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full">
              EduCine AI 解決上面所有問題
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
