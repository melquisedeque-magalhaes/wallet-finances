import React from 'react';
import { PieChart } from 'react-native-svg-charts'
import { Container } from "./styles";
import { Text } from "react-native";
// import { useInfosDataGrafic } from '../../hooks/useInfosDataGrafic';



export function GraficFinances(){
    // const { dataInfosGrafic } = useInfosDataGrafic()

    

    
    // const data = [
    //     { key: 1, value: 25, svg: { fill: '#FF1943' } },
    //     { key: 2, value: 25, svg: { fill: '#FFB800' } },
    //     { key: 3, value: 25, svg: { fill: '#1767FF' } },
    //     { key: 4, value: 25, svg: { fill: '#6E5FFD' } },
    // ]

    // if(!!dataInfosGrafic?.length){

        // return(
        //     <Container>
        //         <PieChart 
        //             style={{ height: 200, width: 200 }}
        //             data={dataInfosGrafic}
        //         />
        //     </Container>
        // )
    // }else {

        return(
            <Text>Sem valores informados</Text>
        )
    // }
    
}