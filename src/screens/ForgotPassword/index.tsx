import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { KeyboardAvoidingView, Platform, TouchableOpacity, View } from 'react-native'

import { Button } from '../../components/Controllers/Button'
import { Input } from '../../components/Controllers/Input'
import { Label } from '../../components/Controllers/Label'
import { useAuthentication } from '../../hooks/useAuthentication'
import {
    Container,
    ContainerTitle,
    ContentFormInput,
    Context,
    Footer,
    TextNormal,
    Title
} from './styles'

export default function ForgotPassword() {
    const { email, isLoading, handleForgotPassword, setEmail } = useAuthentication()
    const navigator = useNavigation()

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
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled
        >
            <Container>
                <Context>
                    <ContainerTitle>
                        <Title>Recuperação de Senha</Title>
                    </ContainerTitle>

                    <TextNormal>
                        Por favor entre com seu e-mail, e crie uma nova senha no seu e-mail
                    </TextNormal>

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
                            <Button isLoading={isLoading} handleSubmit={handleForgotPassword}>
                                Comfirmar
                            </Button>
                        </Footer>
                    </View>
                </Context>
            </Container>
        </KeyboardAvoidingView>
    )
}
