import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    View
} from 'react-native'

import { Button } from '../../components/Controllers/Button'
import { Input } from '../../components/Controllers/Input'
import { Label } from '../../components/Controllers/Label'
import { useAuthentication } from '../../hooks/useAuthentication'
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

export default function SignIn() {
    const navigator = useNavigation()

    const { email, setEmail, password, setPassword, handleLogin, isLoading } = useAuthentication()

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={{ flex: 1 }}
                    >
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
                                        keyboardType="numeric"
                                        placeholder="Senha"
                                        secureTextEntry
                                        value={password}
                                        onChangeText={(text) => setPassword(text)}
                                    />
                                </ContentFormInput>

                                <Footer>
                                    <Button isLoading={isLoading} handleSubmit={handleLogin}>
                                        Entrar
                                    </Button>
                                </Footer>
                            </View>

                            <View>
                                <ButtonContainer
                                    onPress={() =>
                                        navigator.navigate('ForgotPassword', 'ForgotPassword')
                                    }
                                >
                                    <TextStyles>Esqueceu a Senha ?</TextStyles>
                                </ButtonContainer>

                                <ButtonContainer
                                    onPress={() => navigator.navigate('SignUp', 'SignUp')}
                                >
                                    <TextNormal>Não tem conta ?</TextNormal>
                                    <TextStyles>Cadastre-se</TextStyles>
                                </ButtonContainer>
                            </View>
                        </Context>
                    </ScrollView>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
