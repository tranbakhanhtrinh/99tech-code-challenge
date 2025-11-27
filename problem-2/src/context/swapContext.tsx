import { createContext } from 'react'

type SwapInfo = {
  fromCoin: string
  toCoin: string
}

type SwapContextType = {
  swapInfo: SwapInfo
  source: string
  handleSwapCoin: (prop: string, value: string) => void
  handleFromSource: (source: string) => void
}

const SwapContext = createContext<SwapContextType | null>(null)
export { SwapContext }
