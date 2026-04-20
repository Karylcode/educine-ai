import { CheckCircle2, Cpu, HardDrive } from 'lucide-react'
import { MODELS, HARDWARE } from '../../data/techStack'
import { useScrollAnimationAll } from '../../hooks/useScrollAnimation'
import SectionTitle from '../shared/SectionTitle'
import Badge from '../shared/Badge'

export default function TechStackSection() {
  useScrollAnimationAll('.tech-reveal')

  return (
    <section id="tech" className="py-24 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="tech-reveal scroll-reveal">
          <SectionTitle
            tag="技術架構"
            title="2026 年"
            highlight="前沿模型選型"
            subtitle="所有模型均可在 RTX 5090 本地運行，採 Apache 2.0 / MIT 授權，商用無虞。"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Model table */}
          <div className="tech-reveal scroll-reveal lg:col-span-2 rounded-2xl bg-dark-elevated border-brand overflow-hidden shadow-card">
            <div className="px-5 py-3.5 border-b border-dark-border flex items-center gap-2">
              <span className="text-sm font-semibold text-white">模型清單</span>
              <Badge color="#22c55e">全部商用授權</Badge>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-border">
                    {['模組', '選用模型', '參數量', 'VRAM (Q4)', '授權'].map((h) => (
                      <th key={h} className="px-4 py-2.5 text-left text-xs text-slate-500 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MODELS.map((m, i) => (
                    <tr
                      key={m.module}
                      className="border-b border-dark-border/50 hover:bg-dark-surface/60 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-white whitespace-nowrap">{m.module}</td>
                      <td className="px-4 py-3">
                        <span className="font-mono text-xs" style={{ color: m.color }}>{m.model}</span>
                      </td>
                      <td className="px-4 py-3 text-slate-400 font-mono text-xs">{m.params}</td>
                      <td className="px-4 py-3 text-slate-400 font-mono text-xs">{m.vram}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1 text-accent-green text-xs">
                          <CheckCircle2 size={13} />
                          {m.license}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Hardware card */}
          <div className="tech-reveal scroll-reveal flex flex-col gap-4">
            <div className="rounded-2xl bg-dark-elevated border-brand p-6 shadow-card">
              <div className="flex items-center gap-2 mb-5">
                <Cpu size={18} className="text-accent-cyan" />
                <span className="text-sm font-semibold text-white">硬體規格（已採購）</span>
              </div>
              <div className="text-xs text-slate-400 font-mono mb-4">{HARDWARE.model}</div>
              {[
                { label: 'CPU', value: HARDWARE.cpu },
                { label: 'GPU', value: HARDWARE.gpu },
                { label: 'RAM', value: HARDWARE.ram },
                { label: '儲存', value: HARDWARE.storage },
                { label: 'OS', value: HARDWARE.os },
              ].map((row) => (
                <div key={row.label} className="flex justify-between py-2 border-b border-dark-border/50 last:border-0">
                  <span className="text-xs text-slate-500">{row.label}</span>
                  <span className="text-xs text-white font-medium text-right max-w-[60%]">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Value props */}
            <div className="rounded-2xl bg-brand-800/40 border border-brand-700/50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <HardDrive size={16} className="text-accent-cyan" />
                <span className="text-sm font-semibold text-white">部署策略</span>
              </div>
              {[
                'Windows 原生 + WSL2 Ubuntu',
                'ComfyUI API Mode（視覺模型）',
                'Ollama 常駐服務（LLM）',
                'Gradio UI 單頁應用',
                'SQLite 本地資料庫',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 py-1.5 text-xs text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
