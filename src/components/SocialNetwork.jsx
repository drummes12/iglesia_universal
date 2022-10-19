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
    paddingHorizontal: 10,
    flexGlow: 1,
    height: 80,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  icon: {
    margin: 10,
  },
})

const SocialNetwork = () => {
  const windowWidth = Math.round(Dimensions.get('window').width)
  const separatorSocial = (windowWidth - 20 - 50 * 5 - 10 * 10) / 8

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={socials}
        ItemSeparatorComponent={() => <View style={{ margin: separatorSocial}}/>}
        renderItem={({ item: social }) => (
          <View style={styles.icon}>
            <Icon.Button
              name={social.id}
              onPress={() => {
                Linking.openURL(social.link)
              }}
              backgroundColor={'#5A467B'}
              size={30}
              iconStyle={{ marginRight: 0 }}
              borderRadius={ 50 }
            />
          </View>
        )}
      />
    </View>
  )
}

export default SocialNetwork
