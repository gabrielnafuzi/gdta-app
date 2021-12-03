import React, { useCallback, useRef } from 'react'

import { Animated } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { Restaurant } from '@/services/restaurants/types'

import { RestaurantCard } from './partials'

type RestaurantListProps = {
  restaurants: Restaurant[]
}

export const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  const scrollY = useRef(new Animated.Value(0)).current
  const ITEM_SIZE = 90

  const getScaleAndOpacity = useCallback(
    (index: number) => {
      const itemSizeTimesIndex = ITEM_SIZE * index
      const itemSizeTimesIndexPlusFive = ITEM_SIZE * (index + 5)

      const inputRange = [-1, 0, itemSizeTimesIndex, itemSizeTimesIndexPlusFive]

      const scale = scrollY.interpolate({
        inputRange,
        outputRange: [1, 1, 1, 0]
      })

      const opacityInputRange = [
        -1,
        0,
        itemSizeTimesIndex,
        itemSizeTimesIndexPlusFive
      ]

      const opacity = scrollY.interpolate({
        inputRange: opacityInputRange,
        outputRange: [1, 1, 1, 0]
      })

      return { scale, opacity }
    },
    [scrollY]
  )

  return (
    <Animated.FlatList
      contentContainerStyle={{ paddingTop: RFValue(16) }}
      style={{ flex: 1, width: '100%' }}
      data={restaurants}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      keyExtractor={({ id }) => id}
      renderItem={({ item, index }) => {
        const { scale, opacity } = getScaleAndOpacity(index)

        return (
          <RestaurantCard restaurant={item} scale={scale} opacity={opacity} />
        )
      }}
    />
  )
}
