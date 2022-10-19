import { Image, Dimensions, StyleSheet, Text } from 'react-native'
import Constans from 'expo-constants'
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  textLogo: {
    fontSize: 100,
    color: 'rgb(90, 70, 123)',
    fontWeight: 'bold',
    lineHeight: 55,
    letterSpacing: -10,
    paddingTop: 60,
    margin: 20,
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
    <Text style={{...styles.textLogo, fontFamily: 'arial' }}>
      red{'\n'} aleluya
    </Text>
  )
}

export default Welcome
