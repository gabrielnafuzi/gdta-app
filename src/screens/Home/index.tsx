import React, { useState } from 'react'

import { ActivityIndicator } from 'react-native'

import { useTheme } from 'styled-components'

import { Logo } from '@/components/common'
import useDebounce from '@/hooks/use-debounce'
import { useRestaurants } from '@/services/restaurants'

import { RestaurantList, SearchItemField } from './components'
import * as S from './styles'

export const HomeScreen = () => {
  const [search, setSearch] = useState('')
  const debouncedValue = useDebounce(search, 700)

  const { data, isLoading } = useRestaurants(debouncedValue)

  const theme = useTheme()

  return (
    <S.Container>
      <S.Header>
        <Logo width={26} height={30} />

        <SearchItemField search={search} setSearch={(v) => setSearch(v)} />
      </S.Header>

      <S.ListTitle>Lojas</S.ListTitle>

      {isLoading ? (
        <ActivityIndicator
          color={theme.colors.primary}
          size={36}
          style={{ marginTop: 16 }}
        />
      ) : (
        <RestaurantList restaurants={data?.restaurants ?? []} />
      )}
    </S.Container>
  )
}
