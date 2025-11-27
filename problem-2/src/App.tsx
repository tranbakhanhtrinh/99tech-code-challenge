import ExchangeForm from '@/components/ExchangeForm'
import ReactQueryProvider from '@/components/Provider/ReactQueryProvider'
import SwapContextProvider from '@/context/SwapContextProvider'

function App() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-4 sm:p-0'>
      <h1 className='text-white mb-4 text-2xl'>Currency Convert</h1>
      <ReactQueryProvider>
        <SwapContextProvider>
          <ExchangeForm />
        </SwapContextProvider>
      </ReactQueryProvider>
      <div id='portal'></div>
    </main>
  )
}

export default App
