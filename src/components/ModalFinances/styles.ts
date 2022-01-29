import styled from "styled-components/native";

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
    
    align-items: center;
    justify-content: center;

    position: relative;
`

export const Title = styled.Text`
    color: #6D5FFD;
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

