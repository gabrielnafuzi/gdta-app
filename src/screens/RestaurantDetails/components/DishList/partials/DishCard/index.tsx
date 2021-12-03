import React from 'react'

import { Dish } from '@/services/restaurants'
import { formatToBrl } from '@/utils'

import * as S from './styles'

export type DishCardProps = {
  dish: Dish
  isLastItem?: boolean
}

export const DishCard = ({ dish, isLastItem = false }: DishCardProps) => {
  return (
    <S.Container isLastItem={isLastItem}>
      <S.Content>
        <S.Title>{dish.name}</S.Title>

        <S.Description>{dish.description}</S.Description>

        <S.Price>A partir de {formatToBrl(dish.price)}</S.Price>
      </S.Content>

      <S.Image source={{ uri: dish.image }} />
    </S.Container>
  )
}
