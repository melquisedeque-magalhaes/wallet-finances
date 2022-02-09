import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const ContentModal = styled.View`
    border-radius: 20px;
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding-left: 16px;
    padding-right: 16px;

    align-items: center;
    justify-content: center;

    position: relative;
`

export const ContentFormInput = styled.View`
    height: 100px;
    width: 100%;
    justify-content: space-around;
`

export const ContentFormInputSelect = styled.View`
    height: ${Platform.OS === 'ios' ? '250px' : '100px'};
    width: 100%;
    justify-content: space-around;
`

export const Footer = styled.View`
    margin-top: 32px;
    width: 100%;
`

export const Title = styled.Text`
    color: #6d5ffd;
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 64px;
`

export const ButtonCloseModal = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: transparent;
    border-width: 0px;
    border-color: 0px;
    border-radius: 10px;

    position: absolute;
    top: 32px;
    right: 16px;

    align-items: center;
    justify-content: center;
`
