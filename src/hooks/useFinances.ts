import { useContext } from 'react'

import { FinancesContext } from '../contexts/FinancesContext'

export function useFinances() {
  const { dataGrafic, setAcoes, setCaixa, setFII, setInternacional, investiments } =
    useContext(FinancesContext)

  return {
    dataGrafic,
    setAcoes,
    setCaixa,
    setFII,
    setInternacional,
    investiments
  }
}
