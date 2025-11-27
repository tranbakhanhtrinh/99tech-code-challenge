import clsx from 'clsx'
import Input from '@/components/Input'
import { useState } from 'react'

type Props = {
  coinList: string[]
  setCoinName: (val: string) => void
}

const ListItem = ({ coinList, setCoinName }: Props) => {
  const [search, setSearch] = useState('')
  const handleSetCoinName = (val: string) => setCoinName(val)
  const handleSearch = (e: EventTarget & HTMLInputElement) => {
    const { value } = e
    setSearch(value)
  }
  const list = coinList.filter((l) =>
    l.toLowerCase().includes(search.toLowerCase())
  ) 

  const renderedList = list.map((coin) => (
    <div
      key={coin}
      className='list-item'
      onClick={() => handleSetCoinName(coin)}
    >
      <img
        src={`/tokens/${coin}.svg`}
        alt={coin}
        width={24}
        height={24}
      />
      <p className='w-[78px] font-bold'>{coin}</p>
    </div>
  ))
  return (
    <div className='bg-white'>
      <Input
        type='search'
        className='border-black border-solid border rounded-md mb-4 py-2'
        setState={(e) => handleSearch(e)}
        state={search}
      />
      <div className={clsx('custom-scrollbar')}>{renderedList}</div>
    </div>
  )
}

export default ListItem

