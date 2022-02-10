import { Ionicons } from '@expo/vector-icons'
import React from 'react'

import { useFinances } from '../../../hooks/useFinances'
import { Button } from './styles'

export function ButtonAdd() {
    const { setModalFinancesVisible } = useFinances()

    return (
        <Button onPress={() => setModalFinancesVisible(true)}>
            <Ionicons name="add" size={40} color="#ffffff" />
        </Button>
    )
}
