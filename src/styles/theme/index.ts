import { RFValue } from 'react-native-responsive-fontsize'
export const theme = {
  border: {
    radius: {
      lg: '8px',
      md: '6px',
      sm: '4px'
    }
  },
  fonts: {
    primary400: 'Poppins_400Regular',
    primary500: 'Poppins_500Medium'
  },
  colors: {
    black: '#181725',
    gray: '#7C7C7C',
    grayLight: '#E5E5E5',
    green: '#53B175',
    orange: '#E7A74E',
    primary: '#F3603F',
    white: '#FFFFFF',
    grayOpacity: 'rgba(124, 124, 124, 0.85)'
  },
  spacings: {
    xxsmall: `${RFValue(2)}px` as '2px',
    xsmall: `${RFValue(4)}px` as '4px',
    small: `${RFValue(8)}px` as '8px',
    medium: `${RFValue(16)}px` as '16px',
    large: `${RFValue(24)}px` as '24px',
    xxlarge: `${RFValue(48)}px` as '48px'
  }
} as const
