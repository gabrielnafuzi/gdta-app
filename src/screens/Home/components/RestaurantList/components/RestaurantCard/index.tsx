import React from 'react'

import { Animated } from 'react-native'

import { Rate } from '@/components/common'
import { getRandomMockValue } from '@/mocks'
import { Restaurant } from '@/services/restaurants/hooks/use-restaurants/types'

import * as S from './styles'

type RestaurantCardProps = {
  restaurant: Restaurant
  scale: Animated.AnimatedInterpolation
  opacity: Animated.AnimatedInterpolation
}

export const RestaurantCard = ({
  restaurant,
  scale,
  opacity
}: RestaurantCardProps) => {
  return (
    <Animated.View
      style={[
        { opacity, transform: [{ scale }] },
        { flex: 1, paddingHorizontal: 2 }
      ]}
    >
      <S.Container activeOpacity={0.6}>
        <S.Image
          source={{
            uri: restaurant.image_url
          }}
        />

        <S.Content>
          <S.Title>{restaurant.name}</S.Title>

          <S.DetailsContainer>
            <Rate rate={restaurant.rate} />
            <S.DotSeparator />
            <S.DetailText>{getRandomMockValue('category')}</S.DetailText>
            <S.DotSeparator />
            <S.DetailText>{getRandomMockValue('distance')}</S.DetailText>
          </S.DetailsContainer>

          <S.DetailsContainer>
            <S.DetailText>{restaurant.delivery_time}</S.DetailText>
            <S.DotSeparator />
            <S.DetailText color="green">
              {getRandomMockValue('price')}
            </S.DetailText>
          </S.DetailsContainer>
        </S.Content>
      </S.Container>
    </Animated.View>
  )
}
