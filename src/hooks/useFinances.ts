import { useContext } from 'react'

import { FinancesContext } from '../contexts/FinancesContext'

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
        setInvestimentTotal
    } = useContext(FinancesContext)

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
        setInvestimentTotal
    }
}
