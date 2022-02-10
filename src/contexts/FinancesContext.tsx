import firestore from '@react-native-firebase/firestore'
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

import { useAuthentication } from '../hooks/useAuthentication'

interface FinancesProviderProps {
    children: ReactNode
}

interface InvestimentProps {
    id: string
    value: number
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
    FII: number
    acoes: number
    internacional: number
    caixa: number
    investimentTotal: number
    setInvestimentTotal: (state: number) => void
    setModalFinancesVisible: Dispatch<SetStateAction<boolean>>
    modalFinancesVisible: boolean
}

export const FinancesContext = createContext({} as FinancesContextProps)

export function FinancesProvider({ children }: FinancesProviderProps) {
    const { user } = useAuthentication()
    const [investiments, setInvestiments] = useState<InvestimentProps[]>()

    const [FII, setFII] = useState<number>(0)
    const [acoes, setAcoes] = useState<number>(0)
    const [caixa, setCaixa] = useState<number>(0)
    const [internacional, setInternacional] = useState<number>(0)
    const [investimentTotal, setInvestimentTotal] = useState<number>(0)

    const [modalFinancesVisible, setModalFinancesVisible] = useState(false)

    useEffect(() => {
        if (user?.uid) {
            const subcription = firestore()
                .collection('investiments')
                .where('userId', '==', user.uid)
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
        }
    }, [user?.uid])

    useEffect(() => {
        if (investiments) {
            investiments.map((investiment) => {
                if (investiment.type === 'FII') {
                    setFII((oldValue) => oldValue + investiment.value)
                }
                if (investiment.type === 'Acoes') {
                    setAcoes((oldValue) => oldValue + investiment.value)
                }
                if (investiment.type === 'Caixa') {
                    setCaixa((oldValue) => oldValue + investiment.value)
                }
                if (investiment.type === 'Internacional') {
                    setInternacional((oldValue) => oldValue + investiment.value)
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

    useEffect(() => {
        setInvestimentTotal(FII + acoes + caixa + internacional)
    }, [FII, acoes, caixa, internacional])

    return (
        <FinancesContext.Provider
            value={{
                dataGrafic,
                setAcoes,
                setCaixa,
                setInternacional,
                setFII,
                investiments,
                FII,
                acoes,
                internacional,
                caixa,
                investimentTotal,
                setInvestimentTotal,
                modalFinancesVisible,
                setModalFinancesVisible
            }}
        >
            {children}
        </FinancesContext.Provider>
    )
}
