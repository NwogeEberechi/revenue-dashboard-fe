import { extendTheme } from '@chakra-ui/react'

import { config } from './config'
import { colors } from './foundations/colors'
import { fonts, fontSizes, fontWeights, lineHeights } from './foundations/typography'
import { globalStyles } from './styles/global'

export const theme = extendTheme({
  config,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  styles: globalStyles,
})
