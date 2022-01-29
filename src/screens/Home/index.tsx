import React, { useState } from 'react'
import { ButtonAdd } from '../../components/ButtonAdd'
import { GraficFinances } from '../../components/GraficFinances'
import { Header } from '../../components/Header'
import { ModalFinances } from '../../components/ModalFinances'
import { Container } from './styles'

export function Home() {
    const [ modalVisible, setModalVisible ] = useState(false)

    return(
        <Container>
            <Header titlePage='Minha Carteira' />
            <GraficFinances />
            <ButtonAdd setModalVisible={setModalVisible} />
            <ModalFinances modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Container>
    )
}