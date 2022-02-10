import { Picker } from '@react-native-community/picker'
import { TextStyle } from 'react-native'
import styled from 'styled-components/native'

import fonts from '../../../styles/fonts'

export const InputSelectContainer = styled(Picker)`
    height: 100%;
`

export const InputSelectItem: TextStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    fontFamily: fonts.heading,
    fontSize: 24,
    color: '#2c3a4b',
    alignItems: 'center',
    justifyContent: 'center'
}
