import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'

import { api } from '@/services/api'
import { Restaurant } from '@/services/restaurants'

export const getRestaurantById = async (id: string) => {
  const { data } = await api.get<Restaurant>(`/restaurants/${id}`)

  return { restaurant: data }
}

export const useRestaurant = (id: string, options: UseQueryOptions = {}) => {
  return useQuery(['restaurant', id], () => getRestaurantById(id), {
    staleTime: 60 * 1000, // 1 minute
    ...options
  }) as UseQueryResult<{ restaurant: Restaurant }, unknown>
}
