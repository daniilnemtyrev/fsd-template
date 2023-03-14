export interface Counter {
    value: number
}

export interface CounterState {
    counter: Counter
    isLoading: boolean
    errors: string[]
    increment: () => void
    decrement: () => void
}
