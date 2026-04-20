import { useState, useEffect } from 'react'
import StepCard from './StepCard'
import { Clock, CheckCircle2 } from 'lucide-react'

export default function PipelineProgress({ steps, status, currentStepIndex, completedOutputs, elapsedMs, formatElapsed }) {
  const [activeOutput, setActiveOutput] = useState(null)

  // Auto-select the latest done step for preview
  useEffect(() => {
    const lastDone = [...steps].reverse().find((s) => s.status === 'done')
    if (lastDone) setActiveOutput(lastDone.id)
  }, [steps])

  const doneCount = steps.filter((s) => s.status === 'done').length

  return (
    <div className="h-full flex flex-col bg-dark-surface rounded-2xl border-brand p-5 shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-sm font-semibold text-white">生成流水線</div>
          <div className="text-xs text-slate-500">{doneCount} / {steps.length} 步驟完成</div>
        </div>
        {status === 'running' && (
          <div className="flex items-center gap-1.5 text-accent-cyan text-xs font-mono">
            <Clock size={13} />
            {formatElapsed(elapsedMs)}
          </div>
        )}
        {status === 'completed' && (
          <div className="flex items-center gap-1.5 text-accent-green text-xs font-semibold">
            <CheckCircle2 size={14} />
            全部完成！
          </div>
        )}
      </div>

      {/* Progress bar (overall) */}
      <div className="mb-5 h-1.5 rounded-full bg-dark-elevated overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan transition-all duration-500"
          style={{ width: `${(doneCount / steps.length) * 100}%` }}
        />
      </div>

      {/* Step cards */}
      <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
        {steps.map((step, i) => (
          <StepCard
            key={step.id}
            step={step}
            isActive={activeOutput === step.id}
            onClick={() => completedOutputs[step.id] && setActiveOutput(step.id)}
          />
        ))}
      </div>

      {/* Idle hint */}
      {status === 'idle' && (
        <div className="mt-4 text-center text-xs text-slate-600 py-3">
          輸入主題後點擊「一鍵生成」開始
        </div>
      )}

      {/* Active output indicator */}
      {activeOutput && completedOutputs[activeOutput] && (
        <div className="mt-4 pt-3 border-t border-dark-border text-xs text-slate-500 text-center">
          右側顯示「{steps.find((s) => s.id === activeOutput)?.label}」的輸出結果
        </div>
      )}
    </div>
  )
}
