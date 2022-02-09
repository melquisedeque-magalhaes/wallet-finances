import React from 'react'
import { TextInputProps } from 'react-native'

import { InputStyles } from './styles'

export function Input(props: TextInputProps) {
    return <InputStyles {...props} />
}
