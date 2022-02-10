import React from 'react'
import { ScrollView, StatusBar } from 'react-native'

import { ButtonAdd } from '../../components/Controllers/ButtonAdd'
import { Header } from '../../components/Layout/Header'
import { GraficFinances } from '../../components/Layout/Header/GraficFinances'
import { ModalFinances } from '../../components/Layout/ModalFinances'
import { ShowLegendGrafig } from '../../components/Layout/ShowLegendGrafic'
import { Container, ContentFooter, ContentMain } from './styles'

export function Home() {
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
                >
                    <ContentMain>
                        <GraficFinances />

                        <ShowLegendGrafig />
                    </ContentMain>
                </ScrollView>

                <ContentFooter>
                    <ModalFinances />

                    <ButtonAdd />
                </ContentFooter>
            </Container>
        </>
    )
}
