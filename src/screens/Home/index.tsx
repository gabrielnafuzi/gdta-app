import React, { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'

import { Text } from 'react-native'

import { Logo } from '@/components/common'
import useDebounce from '@/hooks/use-debounce'
import { useRestaurants } from '@/services/restaurants'

import { SearchItemField } from './components'
import * as S from './styles'

export const HomeScreen = () => {
  const [search, setSearch] = useState('')
  const debouncedValue = useDebounce(search, 5600)

  const { data, isLoading, isFetching } = useRestaurants(debouncedValue)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <S.Container>
      <S.Header>
        <Logo width={26} height={30} />

        <SearchItemField
          search={search}
          setSearch={(v) => setSearch(v)}
          onSearch={console.log}
        />
      </S.Header>

      <S.ListContainer>
        <S.ListTitle></S.ListTitle>
      </S.ListContainer>
    </S.Container>
  )
}
