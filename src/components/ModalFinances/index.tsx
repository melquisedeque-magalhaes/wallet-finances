import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Modal } from 'react-native'

import { Button } from '../Button'
import { Input } from '../Input'
import { ContentModal, Title, ButtonCloseModal } from './styles'
// import { useInfosDataGrafic } from "../../hooks/useInfosDataGrafic";

interface ModalFinancesProps {
  setModalVisible: (state: boolean) => void
  modalVisible: boolean
}

export function ModalFinances({ modalVisible, setModalVisible }: ModalFinancesProps) {
  const [valueFinances, setValueFinances] = useState('')
  const [typeFinances, setTypeFinances] = useState('')

  // const { saveInfosGrafic, getInfosGrafic } = useInfosDataGrafic()

  // async function handleSubmit() {
  //     saveInfosGrafic({ values: valueFinances, types: typeFinances })

  //     getInfosGrafic()

  //     setModalVisible(false)
  // }

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <ContentModal>
        <ButtonCloseModal onPress={() => setModalVisible(false)}>
          <Ionicons name="close" size={40} color="#666" />
        </ButtonCloseModal>

        <Title>Adicionar Finanças</Title>

        <Input
          keyboardType="numeric"
          value={valueFinances}
          onChangeText={(text) => setValueFinances(text)}
          placeholder="Valor do investimento"
        />

        <Input
          value={typeFinances}
          onChangeText={(text) => setTypeFinances(text)}
          placeholder="Tipo do investimento"
        />

        {/* <Button handleSubmit={handleSubmit}>Salvar</Button> */}
      </ContentModal>
    </Modal>
  )
}
