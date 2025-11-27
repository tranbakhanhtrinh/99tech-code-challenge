import { SwapContext } from '@/context/swapContext'
import { useContext } from 'react'
const useSwapContext = () => {
    const context = useContext(SwapContext)
    if (!context) {
      throw new Error('useSwapContext must be used within a SwapContextProvider')
    }
    return context
  }
  
  export default useSwapContext