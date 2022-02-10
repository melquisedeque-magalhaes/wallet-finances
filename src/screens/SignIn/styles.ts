import styled from 'styled-components/native'

import fonts from '../../styles/fonts'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`
export const Context = styled.View`
    margin-left: 24px;
    margin-right: 24px;
`

export const ContainerTitle = styled.View`
    margin-top: 120px;
    margin-bottom: 40px;
`

export const Title = styled.Text`
    font-weight: 600;
    font-size: 33px;
    color: #394452;
    font-family: ${fonts.heading};
`

export const TitleStyled = styled.Text`
    font-weight: 600;
    font-size: 33px;
    color: #6d5ffd;
    font-family: ${fonts.heading};
`

export const ContentFormInput = styled.View`
    height: 100px;
    justify-content: space-around;
`

export const Footer = styled.View`
    margin-top: 32px;
`

export const TextStyles = styled.Text`
    font-weight: 600;
    font-size: 16px;
    color: #6d5ffd;
    font-family: ${fonts.heading};
    text-align: center;
`

export const TextNormal = styled.Text`
    font-weight: 600;
    font-size: 16px;
    color: #858c94;
    font-family: ${fonts.heading};
    text-align: center;
`

export const ButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px;
    margin-top: 16px;
`
