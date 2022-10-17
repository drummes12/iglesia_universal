import { Image, Dimensions, StyleSheet } from 'react-native'
import Constans from 'expo-constants'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  imgWelcome: {
    marginLeft: 25,
    marginTop: Constans.statusBarHeight,
    width: windowWidth - 50,
    height: windowHeight,
    resizeMode: 'contain',
  },
  imgLogo: {
    marginLeft: 25,
    marginTop: Constans.statusBarHeight,
    width: windowWidth - 50,
    height: 150,
    resizeMode: 'contain',
  }
})

const Welcome = (props) => {
  const Logo =
    '../../assets/logo.png';
  const logoStyles = [
    styles.imgWelcome,
    props.Logo && styles.imgLogo
  ]
  return (
    <Image
      source={require(Logo)}
      style={logoStyles}
    />
  )
}

export default Welcome
