import { Ionicons } from '@expo/vector-icons'
import firestore from '@react-native-firebase/firestore'
import { useState } from 'react'
import { Modal } from 'react-native'
import Toast from 'react-native-toast-message'

import { useFinances } from '../../hooks/useFinances'
import { Button } from '../Button'
import { Input } from '../Input'
import { Label } from '../Label'
import { ContentModal, Title, ButtonCloseModal, ContentFormInput, Footer } from './styles'

interface ModalFinancesProps {
  setModalVisible: (state: boolean) => void
  modalVisible: boolean
}

export function ModalFinances({ modalVisible, setModalVisible }: ModalFinancesProps) {
  const { setAcoes, setCaixa, setFII, setInternacional } = useFinances()

  const [valueFinances, setValueFinances] = useState('')
  const [typeFinances, setTypeFinances] = useState('')

  function handleAddFinances() {
    firestore()
      .collection('investiment')
      .add({
        value: valueFinances,
        type: typeFinances,
        created_at: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        setAcoes(0)
        setCaixa(0)
        setFII(0)
        setInternacional(0)
        setValueFinances('')
        setTypeFinances('')

        Toast.show({
          type: 'success',
          text1: 'Finanças adicionadas com Sucesso!'
        })
      })
      .catch(() =>
        Toast.show({
          type: 'error',
          text1: 'Ops Algo deu errado!'
        })
      )

    setModalVisible(false)
  }

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <ContentModal>
        <ButtonCloseModal onPress={() => setModalVisible(false)}>
          <Ionicons name="close" size={40} color="#666" />
        </ButtonCloseModal>

        <Title>Adicionar Finanças</Title>

        <ContentFormInput>
          <Label>Valor do investimento</Label>
          <Input
            keyboardType="numbers-and-punctuation"
            value={valueFinances}
            onChangeText={(text) => setValueFinances(text)}
            placeholder="Valor do investimento"
          />
        </ContentFormInput>

        <ContentFormInput>
          <Label>Tipo do investimento</Label>
          <Input
            value={typeFinances}
            onChangeText={(text) => setTypeFinances(text)}
            placeholder="Tipo do investimento"
          />
        </ContentFormInput>

        <Footer>
          <Button handleSubmit={handleAddFinances}>Salvar</Button>
        </Footer>
      </ContentModal>
    </Modal>
  )
}
