import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold
} from '@expo-google-fonts/source-sans-pro'
import AppLoading from 'expo-app-loading'
import React from 'react'
import { StatusBar } from 'react-native'
import Toast from 'react-native-toast-message'

import { FinancesProvider } from './contexts/FinancesContext'
import { Routes } from './routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    SourceSansPro_600SemiBold,
    SourceSansPro_400Regular
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <FinancesProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Routes />
      <Toast />
    </FinancesProvider>
  )
}
