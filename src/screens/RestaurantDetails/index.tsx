import React from 'react'

import { Text } from 'react-native'

import { useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import { Spinner } from '@/components'
import { getRandomMockValue } from '@/mocks'
import { RestaurantDetailsRouteProp } from '@/routes/app.routes'
import { useRestaurant } from '@/services/restaurants'

import { DishList, RestaurantDetailsHeader } from './components'
import * as S from './styles'

export const RestaurantDetails = () => {
  const route = useRoute<RestaurantDetailsRouteProp>()
  const { restaurantId } = route.params

  const { data, isLoading } = useRestaurant(restaurantId)

  return (
    <S.Container>
      <StatusBar style="light" />

      <RestaurantDetailsHeader
        name={data?.restaurant?.name ?? '...'}
        image={data?.restaurant?.image_url ?? '...'}
        category={getRandomMockValue('category')}
        rate={data?.restaurant?.rate ?? '...'}
        rateAmount={data?.restaurant?.rate_amount ?? 0}
        deliveryTime={data?.restaurant?.delivery_time ?? '...'}
        deliveryFee={getRandomMockValue('deliveryFee')}
      />

      <S.BodyContainer>
        {isLoading ? (
          <Spinner style={{ marginTop: 42 }} />
        ) : (
          <DishList dishes={data?.restaurant?.dishes ?? []} />
        )}
      </S.BodyContainer>
    </S.Container>
  )
}
