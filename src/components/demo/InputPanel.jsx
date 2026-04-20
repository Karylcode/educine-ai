import { useState } from 'react'
import { Sparkles, BookOpen, Clock, Palette } from 'lucide-react'

const GRADES = ['國小（1-3年級）', '國小（4-6年級）', '國中', '高中']
const STYLES = ['生動活潑', '嚴謹學術', '故事敘述']
const TOPICS_PLACEHOLDER = ['光合作用', '台灣歷史', '牛頓運動定律', '三角函數', '細胞分裂', '地球自轉']

export default function InputPanel({ onGenerate, isRunning, isCompleted }) {
  const [topic, setTopic] = useState('')
  const [grade, setGrade] = useState('國中')
  const [style, setStyle] = useState('生動活潑')
  const [duration, setDuration] = useState(3)

  const placeholderIdx = Math.floor(Date.now() / 3000) % TOPICS_PLACEHOLDER.length
  const placeholder = TOPICS_PLACEHOLDER[placeholderIdx]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!topic.trim() || isRunning) return
    onGenerate({ topic: topic.trim(), grade, style, duration })
  }

  const disabled = isRunning

  return (
    <div className="h-full flex flex-col bg-dark-surface rounded-2xl border-brand p-5 shadow-card">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
          <Sparkles size={15} className="text-accent-cyan" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">設定影片參數</div>
          <div className="text-xs text-slate-500">輸入主題後一鍵生成</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
        {/* Topic */}
        <div>
          <label htmlFor="topic" className="block text-xs font-medium text-slate-400 mb-1.5">
            <BookOpen size={12} className="inline mr-1" />
            教學主題
          </label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={40}
            className="w-full px-3.5 py-2.5 rounded-xl bg-dark-elevated border border-dark-border text-white placeholder-slate-600 text-sm transition-colors focus:outline-none focus:border-accent-cyan disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Grade */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">適用年級</label>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            disabled={disabled}
            className="w-full px-3.5 py-2.5 rounded-xl bg-dark-elevated border border-dark-border text-white text-sm cursor-pointer focus:outline-none focus:border-accent-cyan disabled:opacity-50 appearance-none"
          >
            {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        {/* Style */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-2">
            <Palette size={12} className="inline mr-1" />
            教學風格
          </label>
          <div className="flex gap-2">
            {STYLES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => !disabled && setStyle(s)}
                disabled={disabled}
                className={`flex-1 py-2 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer border disabled:opacity-50 disabled:cursor-not-allowed ${
                  style === s
                    ? 'bg-brand-600 border-brand-600 text-white'
                    : 'bg-dark-elevated border-dark-border text-slate-400 hover:border-brand-600/50 hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Duration slider */}
        <div>
          <label className="flex justify-between text-xs font-medium text-slate-400 mb-2">
            <span><Clock size={12} className="inline mr-1" />影片長度</span>
            <span className="text-accent-cyan font-semibold">{duration} 分鐘</span>
          </label>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={duration}
            onChange={(e) => !disabled && setDuration(Number(e.target.value))}
            disabled={disabled}
            className="w-full accent-accent-cyan cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <div className="flex justify-between text-xs text-slate-600 mt-1">
            <span>1 分鐘</span>
            <span>5 分鐘</span>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Submit */}
        <button
          type="submit"
          disabled={disabled || !topic.trim()}
          className={`w-full py-3.5 rounded-xl font-heading font-semibold text-sm transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange ${
            disabled || !topic.trim()
              ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
              : 'bg-accent-orange text-white glow-orange hover:bg-orange-400 active:scale-95'
          }`}
        >
          {isRunning ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              生成中…
            </span>
          ) : isCompleted ? (
            '重新生成'
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Sparkles size={15} />
              一鍵生成教學影片
            </span>
          )}
        </button>
      </form>
    </div>
  )
}
