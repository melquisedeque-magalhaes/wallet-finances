import { AppleButton } from '@invertase/react-native-apple-authentication'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

import { Button } from '../../components/Controllers/Button'
import { Input } from '../../components/Controllers/Input'
import { Label } from '../../components/Controllers/Label'
import { useAuthentication } from '../../hooks/useAuthentication'
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

export default function SignUp() {
    const navigator = useNavigation()

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleAppleNewAccount,
        handleNewAccount,
        isLoading
    } = useAuthentication()

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled
        >
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
                            <Button isLoading={isLoading} handleSubmit={handleNewAccount}>
                                Cadastrar
                            </Button>
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
        </KeyboardAvoidingView>
    )
}
