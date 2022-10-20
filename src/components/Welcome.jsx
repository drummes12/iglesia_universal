import { Image, StyleSheet } from 'react-native'
import Constans from 'expo-constants'
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 200,
    marginTop: Constans.statusBarHeight,
    resizeMode: 'contain',
  },
})

const Welcome = () => {
  const [fontsLoaded] = useFonts({
    'arial': require('../../assets/fonts/arial.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Image
      source={require('../../assets/logo_ra.png')}
      style={styles.logo}
    />
  )
}

export default Welcome
