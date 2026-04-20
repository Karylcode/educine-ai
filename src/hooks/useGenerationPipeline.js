import { useState, useCallback, useRef } from 'react'
import { PIPELINE_STEPS } from '../data/mockPipeline'

const initialState = () => ({
  status: 'idle',            // idle | running | completed | error
  currentStepIndex: -1,
  steps: PIPELINE_STEPS.map((s) => ({ ...s, status: 'waiting' })),
  completedOutputs: {},
  elapsedMs: 0,
})

export function useGenerationPipeline() {
  const [state, setState] = useState(initialState)
  const abortRef = useRef(false)
  const timerRef = useRef(null)

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

  const start = useCallback(async (params) => {
    abortRef.current = false

    // Inject topic into script output
    const steps = PIPELINE_STEPS.map((s) => {
      if (s.id === 'script' && params?.topic) {
        return {
          ...s,
          status: 'waiting',
          mockOutput: {
            ...s.mockOutput,
            data: { ...s.mockOutput.data, topic: params.topic },
          },
        }
      }
      return { ...s, status: 'waiting' }
    })

    setState({ status: 'running', currentStepIndex: 0, steps, completedOutputs: {}, elapsedMs: 0 })

    const startTime = Date.now()
    timerRef.current = setInterval(() => {
      setState((prev) => ({ ...prev, elapsedMs: Date.now() - startTime }))
    }, 100)

    for (let i = 0; i < steps.length; i++) {
      if (abortRef.current) break

      // Mark running
      setState((prev) => ({
        ...prev,
        currentStepIndex: i,
        steps: prev.steps.map((s, idx) =>
          idx === i ? { ...s, status: 'running' } : s
        ),
      }))

      await sleep(steps[i].duration)
      if (abortRef.current) break

      // Mark done + capture output
      setState((prev) => ({
        ...prev,
        steps: prev.steps.map((s, idx) =>
          idx === i ? { ...s, status: 'done' } : s
        ),
        completedOutputs: {
          ...prev.completedOutputs,
          [steps[i].id]: steps[i].mockOutput,
        },
      }))
    }

    clearInterval(timerRef.current)
    if (!abortRef.current) {
      setState((prev) => ({ ...prev, status: 'completed', currentStepIndex: steps.length }))
    }
  }, [])

  const reset = useCallback(() => {
    abortRef.current = true
    clearInterval(timerRef.current)
    setState(initialState())
  }, [])

  const formatElapsed = (ms) => {
    const s = Math.floor(ms / 1000)
    const m = Math.floor(s / 60)
    const sec = s % 60
    return m > 0 ? `${m}:${String(sec).padStart(2, '0')}` : `${sec}s`
  }

  return { ...state, start, reset, formatElapsed }
}
