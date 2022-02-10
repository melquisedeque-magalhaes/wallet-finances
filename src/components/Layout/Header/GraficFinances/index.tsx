import React from 'react'
import { Text } from 'react-native'
import { PieChart } from 'react-native-svg-charts'

import { useFinances } from '../../../../hooks/useFinances'
import { Container } from './styles'

export function GraficFinances() {
    const { dataGrafic, investiments } = useFinances()

    if (investiments) {
        return (
            <Container>
                <PieChart style={{ height: 200, width: 200 }} data={dataGrafic} />
            </Container>
        )
    } else {
        return <Text>Sem valores informados</Text>
    }
}
