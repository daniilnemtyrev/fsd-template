import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { CounterState } from './types/counterTypes'

export const useCounterStore = create<CounterState>()(
    immer(
        devtools((set) => ({
            counter: { value: 0 },
            isLoading: false,
            errors: [],
            increment: () =>
                set((state) => {
                    state.counter.value += 1
                }),
            decrement: () =>
                set((state) => {
                    state.counter.value -= 1
                }),
        }))
    )
)
