import { Counter } from 'entities/Counter'
import './styles/index.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <Counter />
    </QueryClientProvider>
)
