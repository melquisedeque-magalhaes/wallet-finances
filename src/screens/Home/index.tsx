import React, { useState } from 'react'
import { StatusBar } from 'react-native'

import { ButtonAdd } from '../../components/ButtonAdd'
import { GraficFinances } from '../../components/GraficFinances'
import { Header } from '../../components/Header'
import { ModalFinances } from '../../components/ModalFinances'
import { Container, Content } from './styles'

export function Home() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#6d5ffd" />
      <Header titlePage="Minha Carteira" />
      <Content>
        <GraficFinances />
        <ButtonAdd setModalVisible={setModalVisible} />
        <ModalFinances modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </Content>
    </Container>
  )
}
