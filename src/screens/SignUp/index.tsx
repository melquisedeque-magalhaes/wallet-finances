import { AppleButton, appleAuth } from '@invertase/react-native-apple-authentication'
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
  ButtonContainerSocial,
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
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: 'Error',
            text1: 'Esse E-mail ja estar sendo usado!'
          })
        }

        if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: 'Error',
            text1: 'As informações estão incorretas!'
          })
        }
      })
  }

  async function handleAppleNewAccount() {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
      })

      if (!appleAuthRequestResponse.identityToken) {
        Toast.show({
          type: 'Error',
          text1: 'As informações estão incorretas!'
        })
      }

      const { identityToken, nonce } = appleAuthRequestResponse
      const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce)
      return auth().signInWithCredential(appleCredential)
    } catch (err) {
      console.log(err)
    }
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

        <ButtonContainerSocial>
          <AppleButton
            buttonStyle={AppleButton.Style.BLACK}
            buttonType={AppleButton.Type.SIGN_UP}
            style={{
              width: 160,
              height: 45
            }}
            onPress={() => handleAppleNewAccount()}
          />
        </ButtonContainerSocial>
      </Context>
    </Container>
  )
}
