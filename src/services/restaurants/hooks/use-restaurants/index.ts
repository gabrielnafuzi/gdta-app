import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'

import { api } from '@/services/api'

import { Restaurant } from './types'

export const getRestaurants = async (search: string) => {
  const { data } = await api.get<Restaurant[]>('/restaurants', {
    params: {
      search
    }
  })

  return {
    restaurants: data
  }
}

export const useRestaurants = (
  search: string,
  options: UseQueryOptions = {}
) => {
  return useQuery(['restaurants', search], () => getRestaurants(search), {
    ...options
  }) as UseQueryResult<{ restaurants: Restaurant[] }, unknown>
}
