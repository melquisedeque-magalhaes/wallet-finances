import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import Toast from 'react-native-toast-message'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import {
  ButtonContainer,
  Container,
  ContainerTitle,
  ContentFormInput,
  Context,
  Footer,
  TextNormal,
  TextStyles,
  Title,
  TitleStyled
} from './styles'

export function SignIn() {
  const navigator = useNavigation()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleLogin() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        Toast.show({
          type: 'success',
          text1: 'Login com Sucesso!'
        })
      )
      .catch(() =>
        Toast.show({
          type: 'error',
          text1: 'As informações estão incorretas!'
        })
      )
  }

  return (
    <Container>
      <Context>
        <ContainerTitle>
          <Title>Entrar no</Title>
          <TitleStyled>Wallet Finances</TitleStyled>
        </ContainerTitle>

        <View>
          <ContentFormInput>
            <Label>E-mail</Label>
            <Input
              autoCorrect={false}
              autoComplete="off"
              placeholder="E-mail"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </ContentFormInput>

          <ContentFormInput>
            <Label>Senha</Label>
            <Input
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </ContentFormInput>

          <Footer>
            <Button handleSubmit={handleLogin}>Entrar</Button>
          </Footer>
        </View>

        <View>
          <ButtonContainer>
            <TextStyles>Esqueceu a Senha ?</TextStyles>
          </ButtonContainer>

          <ButtonContainer onPress={() => navigator.navigate('SignUp', 'SignUp')}>
            <TextNormal>Não tem conta ?</TextNormal>
            <TextStyles>Cadastre-se</TextStyles>
          </ButtonContainer>
        </View>
      </Context>
    </Container>
  )
}
