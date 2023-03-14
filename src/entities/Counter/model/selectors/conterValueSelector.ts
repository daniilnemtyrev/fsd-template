import { CounterState } from '../types/counterTypes'

export const counterValueSelector = (state: CounterState) => state.counter.value
