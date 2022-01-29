import React, { ReactNode } from 'react'

import { ButtonStyles, ButtonText } from './styles'

interface ButtonProps {
  children: ReactNode
  handleSubmit?: () => void
}

export function Button({ children, handleSubmit }: ButtonProps) {
  return (
    <ButtonStyles onPress={handleSubmit}>
      <ButtonText>{children}</ButtonText>
    </ButtonStyles>
  )
}
