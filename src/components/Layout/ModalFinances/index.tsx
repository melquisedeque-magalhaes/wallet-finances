import { Ionicons } from '@expo/vector-icons'
import { Modal } from 'react-native'

import { useFinances } from '../../../hooks/useFinances'
import { Button } from '../../Controllers/Button'
import { InputMoney } from '../../Controllers/InputMoney'
import { InputSelect } from '../../Controllers/InputSelect'
import { Label } from '../../Controllers/Label'
import {
    ContentModal,
    Title,
    ButtonCloseModal,
    ContentFormInput,
    Footer,
    ContentFormInputSelect
} from './styles'

export function ModalFinances() {
    const {
        modalFinancesVisible,
        setModalFinancesVisible,
        isLoading,
        valueFinances,
        setValueFinances,
        typeFinances,
        setTypeFinances,
        handleAddFinances
    } = useFinances()

    return (
        <Modal animationType="slide" visible={modalFinancesVisible}>
            <ContentModal>
                <ButtonCloseModal onPress={() => setModalFinancesVisible(false)}>
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
                    />
                </ContentFormInput>

                <ContentFormInputSelect>
                    <Label>Tipo do investimento</Label>

                    <InputSelect value={typeFinances} setValue={setTypeFinances} />
                </ContentFormInputSelect>

                <Footer>
                    <Button isLoading={isLoading} handleSubmit={handleAddFinances}>
                        Salvar
                    </Button>
                </Footer>
            </ContentModal>
        </Modal>
    )
}
