import React, { useCallback, useRef } from 'react'

import { Animated, RefreshControl } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { Restaurant } from '@/services/restaurants/types'

import { RestaurantCard } from './partials'

type RestaurantListProps = {
  restaurants: Restaurant[]
  isRefreshing?: boolean
  onRefresh?: () => void
}

export const RestaurantList = ({
  restaurants,
  isRefreshing = false,
  onRefresh
}: RestaurantListProps) => {
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
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={['#f3603f4d', '#f3603fb3', '#f3603f']}
        />
      }
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
