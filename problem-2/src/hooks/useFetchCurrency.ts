import { api } from '@/helper/axios'
import { useQuery } from '@tanstack/react-query'

const fetchCurrency = async () => {
  try {
    return await api.get(`/prices.json`).then((res) => res.data)
  } catch (error) {
    throw new Error('Fail to fetch currency.', error as Error);
  }
}

export const useFetchCurrency = () =>
  useQuery({
    queryKey: ['currency'],
    queryFn: fetchCurrency,
    refetchOnWindowFocus: false
  })

