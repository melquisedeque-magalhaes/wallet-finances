import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useEffect, useState } from 'react'

export function useAuthentication() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(setUser)

        return subscribe
    }, [])

    return {
        user
    }
}
