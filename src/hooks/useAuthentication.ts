import { appleAuth } from '@invertase/react-native-apple-authentication'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'

export function useAuthentication() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(setUser)

        return subscribe
    }, [])

    function handleForgotPassword() {
        setIsLoading(true)
        if (email.trim() === '') {
            Toast.show({
                type: 'error',
                text1: 'Por favor preencha todos os campos !'
            })

            setIsLoading(false)

            return
        }

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

        setIsLoading(false)
    }

    function handleLogin() {
        setIsLoading(true)

        if (email.trim() === '' || password.trim() === '') {
            Toast.show({
                type: 'error',
                text1: 'Por favor preencha todos os campos !'
            })

            setIsLoading(false)

            return
        }

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

        setIsLoading(false)
    }

    function handleNewAccount() {
        setIsLoading(true)
        if (email.trim() === '' || password.trim() === '') {
            Toast.show({
                type: 'error',
                text1: 'Por favor preencha todos os campos !'
            })

            setIsLoading(false)
            return
        }

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
                        type: 'error',
                        text1: 'Esse E-mail ja estar sendo usado!'
                    })
                }

                if (error.code === 'auth/invalid-email') {
                    Toast.show({
                        type: 'error',
                        text1: 'As informações estão incorretas!'
                    })
                }
            })

        setIsLoading(false)
    }

    async function handleAppleNewAccount() {
        try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
            })

            if (!appleAuthRequestResponse.identityToken) {
                Toast.show({
                    type: 'error',
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

    return {
        user,
        isLoading,
        setEmail,
        email,
        handleForgotPassword,
        setPassword,
        password,
        handleLogin,
        handleNewAccount,
        handleAppleNewAccount
    }
}
