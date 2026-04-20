import { useScrollAnimationAll } from '../../hooks/useScrollAnimation'
import SectionTitle from '../shared/SectionTitle'
import AnimatedCounter from '../shared/AnimatedCounter'

const KPIS = [
  { label: '劇本生成', value: 15, suffix: '秒', traditional: '約 2 小時', color: '#0ea5e9' },
  { label: '分鏡圖生成', value: 5, suffix: '秒/張', traditional: '約 30 分鐘', color: '#8b5cf6' },
  { label: 'I2V 影片片段', value: 60, suffix: '秒', traditional: '無法自動化', color: '#f59e0b' },
  { label: '端到端總流程', value: 10, suffix: '分鐘', traditional: '8 小時+', color: '#f97316' },
]

export default function PerformanceSection() {
  useScrollAnimationAll('.perf-reveal')

  return (
    <section className="py-24 bg-dark-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="perf-reveal scroll-reveal">
          <SectionTitle
            tag="效能指標 KPI"
            title="速度對比"
            highlight="傳統 vs AI"
            subtitle="相同品質的教學影片，EduCine AI 讓製作時間從小時縮短到分鐘。"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {KPIS.map((kpi, i) => (
            <div
              key={kpi.label}
              className="perf-reveal scroll-reveal rounded-2xl p-6 bg-dark-surface border-brand shadow-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-xs text-slate-500 mb-4 font-medium">{kpi.label}</div>

              {/* Traditional bar (red/gray) */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-slate-500">傳統方式</span>
                  <span className="text-xs text-slate-500">{kpi.traditional}</span>
                </div>
                <div className="h-2 rounded-full bg-dark-elevated overflow-hidden">
                  <div className="h-full w-full rounded-full bg-slate-600/50" />
                </div>
              </div>

              {/* EduCine bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-medium" style={{ color: kpi.color }}>EduCine AI</span>
                  <span className="text-xs font-mono font-bold" style={{ color: kpi.color }}>
                    ≤{kpi.value}{kpi.suffix}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-dark-elevated overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: '20%', backgroundColor: kpi.color }}
                  />
                </div>
              </div>

              {/* Big number */}
              <div className="text-3xl font-bold font-heading" style={{ color: kpi.color }}>
                ≤<AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
              </div>
            </div>
          ))}
        </div>

        {/* Availability KPI */}
        <div className="perf-reveal scroll-reveal mt-8 flex flex-col sm:flex-row gap-4">
          {[
            { label: 'Demo 日可穩定產出影片數', value: 5, suffix: '支', prefix: '≥', note: '不同學科' },
            { label: '系統可用率（Demo 日）', value: 95, suffix: '%', prefix: '≥', note: 'uptime' },
            { label: '旁白語音取樣率', value: 48, suffix: 'kHz', prefix: '', note: 'VoxCPM2' },
          ].map((item) => (
            <div key={item.label} className="flex-1 rounded-xl bg-dark-surface border-brand p-5 text-center">
              <div className="text-3xl font-bold text-white font-heading mb-1">
                {item.prefix}<AnimatedCounter value={item.value} suffix={item.suffix} />
              </div>
              <div className="text-sm text-slate-400">{item.label}</div>
              <div className="text-xs text-slate-600 mt-0.5">{item.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
