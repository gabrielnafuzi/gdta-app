import React, { useCallback } from 'react'

import { ImageBackground } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import { RFValue } from 'react-native-responsive-fontsize'

import { BackButton, Rate } from '@/components'
import { getRandomMockValue } from '@/mocks'

import {
  RestaurantDetailsDeliveryPrice,
  RestaurantDetailsDeliveryTime
} from './partials'
import * as S from './styles'

const image = {
  uri: 'https://media-cdn.tripadvisor.com/media/photo-p/11/62/5a/95/brasileirinho-delivery.jpg'
}

export const RestaurantDetailsHeader = () => {
  const navigation = useNavigation()

  const handleNavigateToRestaurants = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <ImageBackground
      source={image}
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
            Brasileirinho Delivery - Uberaba
          </S.Title>
          <S.Category>{getRandomMockValue('category')}</S.Category>

          <S.DetailsContainer>
            <Rate
              rate="4,3"
              quantity={239}
              textColor="white"
              style={{ marginRight: RFValue(22) }}
            />

            <RestaurantDetailsDeliveryTime
              deliveryTime="20 - 30 min"
              style={{ marginRight: RFValue(22) }}
            />

            <RestaurantDetailsDeliveryPrice
              deliveryPrice={getRandomMockValue('price')}
            />
          </S.DetailsContainer>
        </S.Content>
      </S.Container>
    </ImageBackground>
  )
}
