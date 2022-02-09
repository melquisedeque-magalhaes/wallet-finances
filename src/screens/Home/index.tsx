import React, { useState } from 'react'
import { ScrollView, StatusBar } from 'react-native'

import { ButtonAdd } from '../../components/ButtonAdd'
import { GraficFinances } from '../../components/GraficFinances'
import { Header } from '../../components/Header'
import { ModalFinances } from '../../components/ModalFinances'
import { ShowLegendGrafig } from '../../components/ShowLegendGrafic'
import { Container, ContentFooter, ContentMain } from './styles'

export function Home() {
    const [modalVisible, setModalVisible] = useState(false)

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
                    <ModalFinances modalVisible={modalVisible} setModalVisible={setModalVisible} />

                    <ButtonAdd setModalVisible={setModalVisible} />
                </ContentFooter>
            </Container>
        </>
    )
}
