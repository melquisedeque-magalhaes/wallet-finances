import styled from 'styled-components/native'

export const Container = styled.View`
  height: 200px;
  background: #6d5ffd;
  width: 100%;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 10px;
`
