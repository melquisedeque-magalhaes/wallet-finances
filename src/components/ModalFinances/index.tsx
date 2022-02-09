import { Ionicons } from '@expo/vector-icons'
import firestore from '@react-native-firebase/firestore'
import { useState } from 'react'
import { Modal } from 'react-native'
import Toast from 'react-native-toast-message'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useFinances } from '../../hooks/useFinances'
import { Button } from '../Button'
import { Input } from '../Input'
import { InputMoney } from '../InputMoney'
import { InputSelect } from '../InputSelect'
import { Label } from '../Label'
import {
    ContentModal,
    Title,
    ButtonCloseModal,
    ContentFormInput,
    Footer,
    ContentFormInputSelect
} from './styles'

interface ModalFinancesProps {
    setModalVisible: (state: boolean) => void
    modalVisible: boolean
}

export function ModalFinances({ modalVisible, setModalVisible }: ModalFinancesProps) {
    const { setAcoes, setCaixa, setFII, setInternacional, setInvestimentTotal } = useFinances()
    const { user } = useAuthentication()

    const [valueFinances, setValueFinances] = useState(0)
    const [typeFinances, setTypeFinances] = useState('')

    function handleAddFinances() {
        firestore()

        firestore()
            .collection('investiments')
            .add({
                userId: user.uid,
                value: valueFinances,
                type: typeFinances,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                setAcoes(0)
                setCaixa(0)
                setFII(0)
                setInternacional(0)
                setValueFinances(0)
                setInvestimentTotal(0)
                setTypeFinances('')

                Toast.show({
                    type: 'success',
                    text1: 'Finanças adicionadas com Sucesso!'
                })
            })
            .catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: 'Ops Algo deu errado!'
                })

                console.log(err)
            })

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
                    <InputMoney
                        keyboardType="numbers-and-punctuation"
                        value={valueFinances}
                        onChangeValue={setValueFinances}
                        prefix="R$"
                        delimiter="."
                        separator=","
                        precision={2}
                        minValue={0}
                        // placeholder="Valor do investimento"
                    />
                </ContentFormInput>

                <ContentFormInputSelect>
                    <Label>Tipo do investimento</Label>

                    <InputSelect value={typeFinances} setValue={setTypeFinances} />
                </ContentFormInputSelect>

                <Footer>
                    <Button handleSubmit={handleAddFinances}>Salvar</Button>
                </Footer>
            </ContentModal>
        </Modal>
    )
}
