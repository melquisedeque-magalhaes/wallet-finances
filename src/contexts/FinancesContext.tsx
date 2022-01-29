import firestore from '@react-native-firebase/firestore'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface FinancesProviderProps {
  children: ReactNode
}

interface InvestimentProps {
  id: string
  value: string
  type: string
}

type DataGrafic = {
  key: number
  value: number
  svg: {
    fill: string
  }
}

interface FinancesContextProps {
  dataGrafic: DataGrafic[]
  setFII: (state: number) => void
  setAcoes: (state: number) => void
  setCaixa: (state: number) => void
  setInternacional: (state: number) => void
  investiments: InvestimentProps[]
}

export const FinancesContext = createContext({} as FinancesContextProps)

export function FinancesProvider({ children }: FinancesProviderProps) {
  const [investiments, setInvestiments] = useState<InvestimentProps[]>()

  const [FII, setFII] = useState<number>(0)
  const [acoes, setAcoes] = useState<number>(0)
  const [caixa, setCaixa] = useState<number>(0)
  const [internacional, setInternacional] = useState<number>(0)

  useEffect(() => {
    const subcription = firestore()
      .collection('investiment')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as InvestimentProps[]

        setInvestiments(data)
      })

    return () => subcription()
  }, [])

  useEffect(() => {
    if (investiments) {
      investiments.map((investiment) => {
        if (investiment.type === 'FII') {
          setFII((oldValue) => oldValue + Number(investiment.value))
        }
        if (investiment.type === 'Acoes') {
          setAcoes((oldValue) => oldValue + Number(investiment.value))
        }
        if (investiment.type === 'Caixa') {
          setCaixa((oldValue) => oldValue + Number(investiment.value))
        }
        if (investiment.type === 'Internacional') {
          setInternacional((oldValue) => oldValue + Number(investiment.value))
        }
      })
    }
  }, [investiments])

  const dataGrafic = [
    { key: 1, value: FII, svg: { fill: '#FF1943' } },
    { key: 2, value: acoes, svg: { fill: '#FFB800' } },
    { key: 3, value: caixa, svg: { fill: '#1767FF' } },
    { key: 4, value: internacional, svg: { fill: '#6E5FFD' } }
  ]

  return (
    <FinancesContext.Provider
      value={{
        dataGrafic,
        setAcoes,
        setCaixa,
        setInternacional,
        setFII,
        investiments
      }}
    >
      {children}
    </FinancesContext.Provider>
  )
}
