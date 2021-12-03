import React, { useCallback, useState } from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import * as S from './styles'

type SearchItemFieldProps = {
  search: string
  setSearch: (search: string) => void
}

export const SearchItemField = ({
  search,
  setSearch
}: SearchItemFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const theme = useTheme()

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <S.Container isFocused={isFocused}>
      <S.IconContainer>
        <MaterialIcons name="search" size={24} color={theme.colors.primary} />
      </S.IconContainer>

      <S.InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder="Item ou loja"
        value={search}
        onChangeText={setSearch}
      />
    </S.Container>
  )
}
