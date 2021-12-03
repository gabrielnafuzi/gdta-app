import React from 'react'
import { useCallback } from 'react'

import { Animated } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Rate } from '@/components'
import { getRandomMockValue } from '@/mocks'
import { RestaurantDetailsNavigationProp } from '@/routes/app.routes'
import { Restaurant } from '@/services/restaurants/types'

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
  const navigation = useNavigation<RestaurantDetailsNavigationProp>()

  const handleNavigateToRestaurantDetails = useCallback(() => {
    navigation.navigate('RestaurantDetails', { restaurantId: restaurant.id })
  }, [navigation, restaurant.id])

  return (
    <Animated.View
      style={[
        { opacity, transform: [{ scale }] },
        { flex: 1, paddingHorizontal: 2 }
      ]}
    >
      <S.Container
        activeOpacity={0.6}
        onPress={handleNavigateToRestaurantDetails}
      >
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
              {getRandomMockValue('deliveryFee')}
            </S.DetailText>
          </S.DetailsContainer>
        </S.Content>
      </S.Container>
    </Animated.View>
  )
}
