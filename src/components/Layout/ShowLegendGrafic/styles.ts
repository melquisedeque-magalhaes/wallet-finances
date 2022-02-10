import styled from 'styled-components/native'

type ColorLegendType = {
    color: string
}

export const Container = styled.View`
    width: 100%;
    height: auto;
    margin-top: 16px;

    align-items: center;
    justify-content: center;
`

export const ContentLegend = styled.TouchableOpacity`
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding: 8px;
    border-width: 3px;
    border-color: #2c3a4b;
    border-radius: 10px;
    margin-top: 8px;
`

export const ColorLegend = styled.View<ColorLegendType>`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background: ${({ color }) => color};
    margin-right: 16px;
`

export const TextLegend = styled.Text`
    color: #2c3a4b;
    font-weight: bold;
    font-size: 16px;
    width: 250px;
    flex-direction: row;
`

export const PorcentLegend = styled.Text`
    color: #2c3a4b;
    font-weight: bold;
    font-size: 16px;
    width: 50px;
    flex-direction: row;
`
