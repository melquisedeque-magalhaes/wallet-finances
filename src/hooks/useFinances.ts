import firestore from '@react-native-firebase/firestore'
import { useContext, useState } from 'react'
import Toast from 'react-native-toast-message'

import { FinancesContext } from '../contexts/FinancesContext'
import { useAuthentication } from './useAuthentication'

export function useFinances() {
    const {
        dataGrafic,
        setAcoes,
        setCaixa,
        setFII,
        setInternacional,
        investiments,
        FII,
        acoes,
        internacional,
        caixa,
        investimentTotal,
        setInvestimentTotal,
        modalFinancesVisible,
        setModalFinancesVisible
    } = useContext(FinancesContext)

    const { user } = useAuthentication()

    const [isLoading, setIsLoading] = useState(false)
    const [valueFinances, setValueFinances] = useState(0)
    const [typeFinances, setTypeFinances] = useState('')

    function handleAddFinances() {
        setIsLoading(true)

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

        setIsLoading(false)

        setModalFinancesVisible(false)
    }

    return {
        dataGrafic,
        setAcoes,
        setCaixa,
        setFII,
        setInternacional,
        investiments,
        FII,
        acoes,
        internacional,
        caixa,
        investimentTotal,
        setInvestimentTotal,
        modalFinancesVisible,
        setModalFinancesVisible,
        isLoading,
        handleAddFinances,
        valueFinances,
        setValueFinances,
        setTypeFinances,
        typeFinances
    }
}
