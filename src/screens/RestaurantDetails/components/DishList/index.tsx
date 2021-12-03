import React from 'react'

import { FlatList } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { Dish } from '@/services/restaurants'

import { DishCard } from './partials'

type DishListProps = {
  dishes: Dish[]
}

export const DishList = ({ dishes }: DishListProps) => {
  return (
    <FlatList
      contentContainerStyle={{
        paddingVertical: RFValue(12),
        paddingHorizontal: RFValue(24)
      }}
      data={dishes}
      keyExtractor={({ id }) => id}
      renderItem={({ item, index }) => (
        <DishCard dish={item} isLastItem={index === dishes.length - 1} />
      )}
    />
  )
}
