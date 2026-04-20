import { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer'
import { Mic, Play, Download } from 'lucide-react'

function ScriptOutput({ data }) {
  return (
    <div className="flex flex-col gap-3">
      {data.topic && (
        <div className="px-3 py-2 rounded-lg bg-brand-800/50 border border-brand-700/50 text-xs text-accent-cyan font-mono">
          主題：{data.topic}
        </div>
      )}
      {data.segments.map((seg) => (
        <div key={seg.index} className="rounded-xl bg-dark-elevated border-brand p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center text-xs text-white font-bold flex-shrink-0">
              {seg.index}
            </span>
            <span className="text-sm font-semibold text-white">{seg.title}</span>
            <span className="ml-auto text-xs text-slate-600 font-mono">{seg.duration}</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-2">{seg.narration}</p>
          <div className="text-xs text-slate-600 italic">🎬 {seg.scene}</div>
        </div>
      ))}
    </div>
  )
}

function StoryboardOutput({ data }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {data.images.map((img) => (
        <div key={img.index} className="rounded-xl overflow-hidden border-brand aspect-video relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient}`} />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
            <div className="text-xs text-white/80">分鏡 {img.index}</div>
            <div className="text-xs text-slate-400 truncate">{img.desc}</div>
          </div>
          <div className="absolute top-2 right-2 text-xs bg-dark-surface/70 text-accent-cyan px-1.5 py-0.5 rounded font-mono">
            1280×720
          </div>
        </div>
      ))}
    </div>
  )
}

function TtsOutput({ data }) {
  return (
    <div className="rounded-xl bg-dark-elevated border-brand p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-full bg-accent-cyan/15 flex items-center justify-center border border-accent-cyan/30">
          <Mic size={26} className="text-accent-cyan" />
        </div>
      </div>
      {/* Fake waveform */}
      <div className="flex items-center justify-center gap-1 mb-5 h-10">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-accent-cyan"
            style={{
              height: `${20 + Math.sin(i * 0.8) * 14 + Math.cos(i * 0.5) * 8}px`,
              opacity: 0.5 + Math.sin(i * 0.3) * 0.4,
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        {[
          ['聲音來源', data.voice],
          ['模型', data.model],
          ['取樣率', data.sampleRate],
          ['總時長', data.totalDuration],
        ].map(([label, val]) => (
          <div key={label} className="bg-dark-surface rounded-lg p-3 text-left">
            <div className="text-xs text-slate-500 mb-0.5">{label}</div>
            <div className="text-xs text-white font-medium">{val}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function I2vOutput({ data }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {data.clips.map((clip) => (
        <div key={clip.index} className="rounded-xl overflow-hidden border-brand aspect-video relative group cursor-pointer">
          <div className={`absolute inset-0 bg-gradient-to-br ${clip.gradient}`} />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Play size={18} className="text-white ml-0.5" fill="white" />
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
            <div className="text-xs text-white/80">{clip.label} · {clip.duration}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function LipsyncOutput({ data }) {
  return (
    <div className="flex gap-3">
      <div className="flex-1 rounded-xl border-brand overflow-hidden">
        <div className={`aspect-square bg-gradient-to-br ${data.before} flex items-center justify-center`}>
          <span className="text-xs text-slate-500 font-medium">原始靜態圖</span>
        </div>
        <div className="p-2 text-center text-xs text-slate-500">Before</div>
      </div>
      <div className="flex items-center text-slate-600 text-xl font-bold">→</div>
      <div className="flex-1 rounded-xl border border-accent-pink/30 overflow-hidden" style={{ borderColor: '#ec489940' }}>
        <div className={`aspect-square bg-gradient-to-br ${data.after} flex items-center justify-center`}>
          <div className="text-center">
            <div className="text-xs text-pink-300 font-medium">嘴型同步完成</div>
            <div className="text-xs text-slate-500 mt-1">{data.fps}</div>
          </div>
        </div>
        <div className="p-2 text-center text-xs text-slate-500">After (MuseTalk)</div>
      </div>
    </div>
  )
}

function SubtitleOutput({ data }) {
  return (
    <div className="rounded-xl bg-dark-elevated border-brand overflow-hidden">
      <div className="px-4 py-2.5 border-b border-dark-border bg-dark-surface text-xs text-slate-500 font-mono">
        subtitle.srt — {data.lines.length} 條字幕
      </div>
      <div className="p-4 flex flex-col gap-2 font-mono text-xs">
        {data.lines.map((line, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-slate-600 flex-shrink-0">{i + 1}</span>
            <span className="text-accent-cyan flex-shrink-0">{line.time}</span>
            <span className="text-white">{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExportOutput({ data }) {
  return (
    <div className="flex flex-col gap-4">
      <VideoPlayer />
      <div className="grid grid-cols-2 gap-2">
        {[
          ['解析度', data.resolution],
          ['幀率', data.fps],
          ['編碼', data.codec],
          ['時長', data.duration],
          ['檔案大小', data.fileSize],
        ].map(([label, val]) => (
          <div key={label} className="bg-dark-elevated rounded-lg p-3 border-brand">
            <div className="text-xs text-slate-500 mb-0.5">{label}</div>
            <div className="text-xs text-white font-semibold font-mono">{val}</div>
          </div>
        ))}
        <button className="bg-accent-orange/15 border border-accent-orange/40 rounded-lg p-3 flex items-center justify-center gap-2 text-accent-orange text-xs font-semibold cursor-pointer hover:bg-accent-orange/25 transition-colors">
          <Download size={14} />
          下載 MP4
        </button>
      </div>
    </div>
  )
}

const OUTPUT_MAP = {
  script: ScriptOutput,
  storyboard: StoryboardOutput,
  tts: TtsOutput,
  i2v: I2vOutput,
  lipsync: LipsyncOutput,
  subtitle: SubtitleOutput,
  export: ExportOutput,
}

export default function OutputPanel({ completedOutputs, steps }) {
  const [activeId, setActiveId] = useState(null)

  // Auto-switch to latest completed
  useEffect(() => {
    const keys = Object.keys(completedOutputs)
    if (keys.length > 0) setActiveId(keys[keys.length - 1])
  }, [completedOutputs])

  const doneSteps = steps.filter((s) => s.status === 'done')
  const activeOutput = activeId ? completedOutputs[activeId] : null
  const OutputComponent = activeOutput ? OUTPUT_MAP[activeOutput.type] : null
  const activeStep = steps.find((s) => s.id === activeId)

  return (
    <div className="h-full flex flex-col bg-dark-surface rounded-2xl border-brand p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm font-semibold text-white">輸出預覽</div>
          <div className="text-xs text-slate-500">點擊左側步驟切換預覽</div>
        </div>
      </div>

      {/* Tab pills for done steps */}
      {doneSteps.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {doneSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveId(step.id)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                activeId === step.id
                  ? 'text-white'
                  : 'bg-dark-elevated text-slate-500 hover:text-white border border-dark-border'
              }`}
              style={
                activeId === step.id
                  ? { backgroundColor: step.color, color: '#fff' }
                  : undefined
              }
            >
              {step.label}
            </button>
          ))}
        </div>
      )}

      {/* Output area */}
      <div className="flex-1 overflow-y-auto">
        {OutputComponent ? (
          <div key={activeId} className="animate-fade-up">
            {activeStep && (
              <div className="text-xs text-slate-500 mb-3 flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: activeStep.color }}
                />
                {activeStep.label} — {activeStep.sublabel}
              </div>
            )}
            <OutputComponent data={activeOutput.data} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-dark-elevated border-brand flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-shimmer rounded-lg" />
            </div>
            <div className="text-sm text-slate-500">等待生成結果…</div>
            <div className="text-xs text-slate-600 mt-1">步驟完成後將自動顯示</div>
          </div>
        )}
      </div>
    </div>
  )
}
