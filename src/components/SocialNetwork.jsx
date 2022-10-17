import {
  View,
  FlatList,
  Linking,
  StyleSheet,
  Dimensions,
} from 'react-native'
import socials from '../data/socials.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexGlow: 1,
    justifyContent: 'center',
    height: 80,
  },
  icon: {
    height: 60,
    margin: 10,
    backgroundColor: '#3A617E',
    borderRadius: 50,
  },
})

const SocialNetwork = () => {
  const windowWidth = Math.round(Dimensions.get('window').width)
  const separatorSocial = (windowWidth - 20 - 60 * 4 - 10 * 8) / 6

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={socials}
        ItemSeparatorComponent={() => (
          <View style={{ margin: separatorSocial }} />
        )}
        renderItem={({ item: social }) => (
          <View style={styles.icon}>
            <Icon.Button
              name={social.id}
              onPress={() => {
                Linking.openURL(social.link)
              }}
              backgroundColor={'transparent'}
              size={40}
              padding={10}
              paddingRight={0}
            />
          </View>
        )}
      />
    </View>
  )
}

export default SocialNetwork
