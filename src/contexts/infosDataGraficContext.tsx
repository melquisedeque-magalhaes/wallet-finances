// import React, { createContext, ReactNode, useEffect, useState } from "react";
// // import AsyncStorage from '@react-native-async-storage/async-storage'
// import { v4 as uuidV4 } from 'uuid'

// interface infosDataGraficProviderProps {
//     children: ReactNode;
// }

// type DataType = {
//     key: string;
//     value: number;
//     svg: {
//         fill: string;
//     }
//     type: string
// }

// interface saveInfosGraficProps {
//     values: string;
//     types: string;
// }

// interface infosDataGraficContextProps {
//     dataInfosGrafic: DataType [] | undefined;
//     getInfosGrafic: () => void;
//     saveInfosGrafic: ({ types, values }: saveInfosGraficProps) => void;
// }

// export const InfosDataGraficContext = createContext({} as infosDataGraficContextProps)

// export function InfosDataGraficProvider({ children }: infosDataGraficProviderProps) {

//     const [dataInfosGrafic, setDataInfosGrafic] = useState<DataType [] | undefined>()
//     const [ acoes, setAcoes ] = useState<DataType | undefined>()
//     const [ acoesValue, setAcoesValue ] = useState(0)
//     const [ FIIValue, setFIIValue ] = useState(0)
//     const [ FII, setFII ] = useState<DataType | undefined>()
//     // const [valueGrafic, setValueGrafic] = useState<string []>()
//     // const [typeGrafic, setTypeGrafic] = useState<string []>()

//     async function getInfosGrafic() {

//         const keys = await AsyncStorage.getAllKeys()
//         const values = await AsyncStorage.multiGet(keys)

//         if(!values[0])
//             return

//         const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

//         // console.log(values)

//         values[0].map(types => {
//             if(types === 'Acoes'){
//                 dataInfosGrafic?.map((data) => {
//                     if(data.type === 'Acoes'){
//                         values[1].map((value) => {
//                             const valueConvert = Number(value)

//                             const valueTotal = valueConvert + data.value
                
//                             setAcoesValue(valueTotal)
                            
//                         })
   
//                     }else {
//                         values[1].map((value) => {
//                             const valueConvert = Number(value)
                
//                             setFIIValue(valueConvert)
                            
//                         })
//                     }

//                 })  
                
//                 const data = {
//                     key: uuidV4(), 
//                     type: 'Acoes',
//                     value: acoesValue, 
//                     svg: { 
//                         fill: randomColor() 
//                     } 
//                 }

//                 setAcoes(data)
//             }

//             if(types === 'FII'){

//                 dataInfosGrafic?.map((data) => {
//                     if(data.type === 'FII'){
//                         values[1].map((value) => {
//                             const valueConvert = Number(value)

//                             const valueTotal = valueConvert + data.value
                
//                             setFIIValue(valueTotal)
                            
//                         })
   
//                     }else {
//                         values[1].map((value) => {
//                             const valueConvert = Number(value)
                
//                             setFIIValue(valueConvert)
                            
//                         })
//                     }
//                 })  
                
//                 const data = {
//                     key: uuidV4(), 
//                     type: 'FII',
//                     value: FIIValue, 
//                     svg: { 
//                         fill: randomColor() 
//                     } 
//                 }

//                 setFII(data)
//             }

//             function valuesEntriesArray() {
//                 const array = []

//                 if(acoes !== undefined)
//                     array.push(acoes)

//                 if(FII !== undefined)
//                     array.push(FII)

//                 return array
//             }

//             // console.log(valuesEntriesArray())

//             setDataInfosGrafic(valuesEntriesArray())
            
//         })  
//     }

//     async function saveInfosGrafic({ values, types }: saveInfosGraficProps) {
//         const typesInfos = await AsyncStorage.getItem('typeFinances')
//         const valuesInfos = await AsyncStorage.getItem('valueFinances')

//         const typesArray = [ typesInfos, types ]
//         const valuesArray = [ valuesInfos, values ]

//         await AsyncStorage.setItem('typeFinances', JSON.stringify(typesArray))
//         await AsyncStorage.setItem('valueFinances', JSON.stringify(valuesArray))
//     }

//     useEffect(() =>  {
//         getInfosGrafic()
//     }, [])

//     return(
//         <InfosDataGraficContext.Provider 
//             value={{ 
//                 getInfosGrafic, 
//                 dataInfosGrafic, 
//                 saveInfosGrafic 
//             }}
//         >
//             {children}
//         </InfosDataGraficContext.Provider>
//     )
// }