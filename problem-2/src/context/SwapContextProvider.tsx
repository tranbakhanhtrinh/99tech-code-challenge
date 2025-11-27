import { useState } from 'react'
import type { ReactNode } from 'react'
import { SwapContext } from './swapContext'

interface SwapInfo {
  fromCoin: string
  toCoin: string
}

interface SwapContextProviderProps {
  children: ReactNode
}

const SwapContextProvider = ({ children }: SwapContextProviderProps) => {
  const [swapInfo, setSwapInfo] = useState<SwapInfo>({
    fromCoin: 'USD',
    toCoin: 'ETH'
  })
  const [source, setSource] = useState('')

  const handleSwapCoin = (prop: string, value: string) => {
    setSwapInfo((prev) => ({
      ...prev,
      [prop]: value
    }))
  }

  const handleFromSource = (source: string) => {
    setSource(source)
  }

  return (
    <SwapContext.Provider
      value={{ swapInfo, handleSwapCoin, source, handleFromSource }}
    >
      {children}
    </SwapContext.Provider>
  )
}

export default SwapContextProvider