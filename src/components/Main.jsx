import { View, ImageBackground, StyleSheet } from 'react-native'
import Welcome from './Welcome.jsx'
import Reproductor from './Reproductor.jsx'
import SocialNetwork from './SocialNetwork.jsx'

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
  },
})

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode='cover'
        source={require('../assets/1452_generated.jpg')}
        style={styles.imgBackground}
      >
        <Welcome Logo={true} />
        <Reproductor />
        <SocialNetwork />
      </ImageBackground>
    </View>
  )
}

export default Main
