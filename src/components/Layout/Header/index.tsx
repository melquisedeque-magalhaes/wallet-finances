import { Ionicons } from '@expo/vector-icons'
import auth from '@react-native-firebase/auth'
import React from 'react'

import { ButtonContainer, Container, Title } from './styles'

interface HeaderProps {
  titlePage: string
}

export function Header({ titlePage }: HeaderProps) {
  function handleLogout() {
    auth().signOut()
  }

  return (
    <Container>
      <Title>{titlePage}</Title>

      <ButtonContainer onPress={handleLogout}>
        <Ionicons name="log-out" size={32} color="#6d5ffd" />
      </ButtonContainer>
    </Container>
  )
}
