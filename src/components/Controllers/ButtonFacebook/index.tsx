import { Ionicons } from '@expo/vector-icons'
import React from 'react'

import { ButtonStyles, ButtonText } from './styles'

interface ButtonProps {
  handleSubmit?: () => void
}

export function ButtonFacebook({ handleSubmit }: ButtonProps) {
  return (
    <ButtonStyles onPress={handleSubmit}>
      <Ionicons size={20} color="#fff" name="logo-facebook" />
      <ButtonText>Continue com Facebook</ButtonText>
    </ButtonStyles>
  )
}
