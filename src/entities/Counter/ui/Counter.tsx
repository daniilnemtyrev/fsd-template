import { memo } from 'react'
import { useCounterStore } from '../model/store'
import cls from './Counter.module.scss'

export const Counter = memo(() => {
    const counterValue = useCounterStore((state) => state.counter.value)
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)

    return (
        <div className={cls.counter}>
            <h1>Zustand example</h1>
            <h1>{counterValue}</h1>
            <button type="button" onClick={increment}>
                +
            </button>
            <button type="button" onClick={decrement}>
                -
            </button>
        </div>
    )
})
