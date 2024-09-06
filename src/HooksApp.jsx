import { CounterApp } from './1-useState/CounterApp'
import { CounterWithCustomHook } from './1-useState/CounterWithCustomHook'

export const HooksApp = () => {
  return (
    <div>
      <CounterApp />
      <CounterWithCustomHook />
    </div>
  )
}
