import React, { useState } from 'react'
import { useCallback } from 'react'

import { Logo, Spinner } from '@/components/common'
import useDebounce from '@/hooks/use-debounce'
import { useRestaurants } from '@/services/restaurants'

import { RestaurantList, SearchItemField } from './components'
import * as S from './styles'

export const RestaurantsScreen = () => {
  const [search, setSearch] = useState('')
  const debouncedValue = useDebounce(search, 400)

  const { data, isLoading } = useRestaurants(debouncedValue)

  const handleRenderList = useCallback(() => {
    if (isLoading) return <Spinner style={{ marginTop: 32 }} />

    if (data?.restaurants?.length === 0) {
      return <S.EmptyMessage>Nenhum restaurante encontrado</S.EmptyMessage>
    }

    return <RestaurantList restaurants={data?.restaurants ?? []} />
  }, [data?.restaurants, isLoading])

  return (
    <S.Container>
      <S.Header>
        <Logo width={26} height={30} />

        <SearchItemField search={search} setSearch={(v) => setSearch(v)} />
      </S.Header>

      <S.ListTitle>Lojas</S.ListTitle>

      {handleRenderList()}
    </S.Container>
  )
}
