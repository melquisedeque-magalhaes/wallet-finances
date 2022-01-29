import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
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

export function SignUp() {
  const navigator = useNavigation()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleNewAccount() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() =>
        Toast.show({
          type: 'success',
          text1: 'Conta criada com sucesso!'
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
          <Title>Cadastrar no</Title>
          <TitleStyled>Wallet Finances</TitleStyled>
        </ContainerTitle>

        <View>
          <ContentFormInput>
            <Label>E-mail</Label>
            <Input
              autoCorrect={false}
              autoComplete="off"
              placeholder="e-mail"
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
            <Button handleSubmit={handleNewAccount}>Cadastrar</Button>
          </Footer>
        </View>

        <View>
          <ButtonContainer onPress={() => navigator.navigate('SignIn', 'SingIn')}>
            <TextNormal>Ja tem conta ?</TextNormal>
            <TextStyles>Entrar</TextStyles>
          </ButtonContainer>
        </View>
      </Context>
    </Container>
  )
}
