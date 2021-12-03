import React from 'react'

import LogoSvg from '@assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { SvgProps } from 'react-native-svg'

type LogoProps = {
  width?: number
  height?: number
} & Omit<SvgProps, 'width' | 'height'>

export const Logo = ({ width = 50, height = 58 }: LogoProps) => (
  <LogoSvg width={RFValue(width)} height={RFValue(height)} />
)
