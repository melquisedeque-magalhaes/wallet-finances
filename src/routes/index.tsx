import { NavigationContainer } from '@react-navigation/native'

import { useAuthentication } from '../hooks/useAuthentication'
import { AuthenticationRoutes } from './AuthenticationRoutes'
import { PublicRoutes } from './PublicRoutes'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: string
      SignUp: string
      ForgotPassword: string
    }
  }
}

export function Routes() {
  const { user } = useAuthentication()

  return (
    <NavigationContainer>{user ? <AuthenticationRoutes /> : <PublicRoutes />}</NavigationContainer>
  )
}
