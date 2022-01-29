import { Ionicons } from '@expo/vector-icons'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import {
  Container,
  ContainerTitle,
  ContentFormInput,
  Context,
  Footer,
  TextNormal,
  Title
} from './styles'

export function ForgotPassword() {
  const navigator = useNavigation()

  const [email, setEmail] = useState<string>('')

  function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Toast.show({
          type: 'success',
          text1: 'E-mail enviado',
          text2: 'Enviamos um e-mail para você criar uma nova senha!'
        })
      )
      .catch(() =>
        Toast.show({
          type: 'error',
          text1: 'E-mail não encontrado!'
        })
      )
  }

  useLayoutEffect(() => {
    navigator.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#394452" />
        </TouchableOpacity>
      )
    })
  }, [navigator])

  return (
    <Container>
      <Context>
        <ContainerTitle>
          <Title>Recuperação de Senha</Title>
        </ContainerTitle>

        <TextNormal>Por favor entre com seu e-mail, e crie uma nova senha no seu e-mail</TextNormal>

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

          <Footer>
            <Button handleSubmit={handleForgotPassword}>Comfirmar</Button>
          </Footer>
        </View>
      </Context>
    </Container>
  )
}
