import React, { ReactNode } from 'react'

import { Loading } from '../../Animations/Loading'
import { ButtonStyles, ButtonText } from './styles'

interface ButtonProps {
    children: ReactNode
    handleSubmit?: () => void
    isLoading?: boolean
}

export function Button({ children, handleSubmit, isLoading = false }: ButtonProps) {
    return (
        <ButtonStyles disabled={isLoading} onPress={handleSubmit}>
            {isLoading ? <Loading /> : <ButtonText>{children}</ButtonText>}
        </ButtonStyles>
    )
}
