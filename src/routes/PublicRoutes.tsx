import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ForgotPassword } from '../screens/ForgotPassword'
import { SignIn } from '../screens/SignIn'
import { SignUp } from '../screens/SignUp'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: string
      SignUp: string
      ForgotPassword: string
    }
  }
}

export function PublicRoutes() {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="SignIn"
        component={SignIn}
      />

      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="SignUp"
        component={SignUp}
      />

      <Stack.Screen
        options={{
          title: '',
          headerStyle: { backgroundColor: 'transparent' },
          headerShadowVisible: false
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </Stack.Navigator>
  )
}
