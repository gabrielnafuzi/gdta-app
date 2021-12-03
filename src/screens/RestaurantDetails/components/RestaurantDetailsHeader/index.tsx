import React, { useCallback } from 'react'

import { ImageBackground } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import { RFValue } from 'react-native-responsive-fontsize'

import { BackButton, Rate } from '@/components'

import {
  RestaurantDetailsDeliveryFee,
  RestaurantDetailsDeliveryTime
} from './partials'
import * as S from './styles'

type RestaurantDetailsHeaderProps = {
  category: string
  deliveryFee: string
  deliveryTime: string
  image: string
  name: string
  rate: string
  rateAmount: number
}

export const RestaurantDetailsHeader = ({
  category,
  deliveryFee,
  deliveryTime,
  image,
  name,
  rate,
  rateAmount
}: RestaurantDetailsHeaderProps) => {
  const navigation = useNavigation()

  const handleNavigateToRestaurants = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <ImageBackground
      source={{ uri: image }}
      resizeMode="cover"
      blurRadius={4}
      style={{ width: '100%', height: RFValue(220) }}
    >
      <S.Container style={{ paddingTop: Constants.statusBarHeight }}>
        <BackButton
          style={{ marginTop: RFValue(16) }}
          onPress={handleNavigateToRestaurants}
        />

        <S.Content>
          <S.Title ellipsizeMode="tail" numberOfLines={1}>
            {name}
          </S.Title>
          <S.Category>{category}</S.Category>

          <S.DetailsContainer>
            <Rate
              rate={rate}
              quantity={rateAmount}
              textColor="white"
              style={{ marginRight: RFValue(22) }}
            />

            <RestaurantDetailsDeliveryTime
              deliveryTime={deliveryTime}
              style={{ marginRight: RFValue(22) }}
            />

            <RestaurantDetailsDeliveryFee deliveryFee={deliveryFee} />
          </S.DetailsContainer>
        </S.Content>
      </S.Container>
    </ImageBackground>
  )
}
