import LottieView from 'lottie-react-native'

import WalletAnimation from '../../assets/flying-wallet-money.json'
import { Container } from './styles'

interface SplashScreenProps {
  setLoaded: (state: boolean) => void
}

export function SplashScreen({ setLoaded }: SplashScreenProps) {
  return (
    <Container>
      <LottieView
        source={WalletAnimation}
        autoPlay
        loop={false}
        resizeMode="center"
        onAnimationFinish={() => {
          setLoaded(false)
        }}
      />
    </Container>
  )
}
