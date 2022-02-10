import React from 'react'
import { ScrollView, StatusBar } from 'react-native'

import { Header } from '../../components/Layout/Header'
import { Container } from './styles'

export function DetailInvestiment() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#6d5ffd" />

            <Container>
                <Header titlePage="Minha Carteira" />

                <ScrollView
                    style={{ flex: 1 }}
                    alwaysBounceVertical
                    scrollEnabled
                    showsVerticalScrollIndicator={false}
                ></ScrollView>
            </Container>
        </>
    )
}
