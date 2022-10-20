import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient'
import { Audio } from 'expo-av'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(90, 70, 123)',
  },
  imageContainer: {
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 200,
  },
  textAlbum: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
  },
  textContainer: {
    margin: 20,
    width: '40%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
  },
  textTitle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  barState: {
    marginVertical: 10,
    width: '80%',
    height: 2,
    backgroundColor: 'white',
  },
  skipContainer: {
    borderRadius: 200,
    borderColor: 'white',
    borderWidth: 2,
    marginHorizontal: 10,
  },
  playContainer: {
    borderRadius: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 0,
    margin: 10,
  },
})

const Reproductor = () => {
  const [audioStatus, setAudioStatus] = useState()
  const [sound, setSound] = useState(new Audio.Sound())

  useEffect(() => {
    ;(async () => {
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false
      })
      
      if (audioStatus) {
        await sound.loadAsync({
          uri: 'https://iuniversal-colive.logicideas.media/iUniversal-radio/radio.stream/playlist.m3u8',
        })
        setSound(sound)
        try {
          await sound.playAsync()
        } catch (e) {
          console.error(`❌ ${e}`)
        }
      } else {
        try {
          await sound.stopAsync()
          await sound.unloadAsync()
        } catch (e) {}
      }
    })()
  }, [audioStatus])

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['transparent', 'rgba(255, 255, 255, 0.4)']}
        style={styles.imageContainer}
      >
        <LinearGradient
          colors={['transparent', 'rgba(255, 255, 255, 0.7)']}
          style={styles.imageContainer}
        >
          <Icon.Button
            name='music'
            backgroundColor={'transparent'}
            color={'white'}
            size={70}
            iconStyle={{ marginRight: 0 }}
            borderRadius={200}
          />
        </LinearGradient>
      </LinearGradient>
      <Text style={styles.textAlbum}>• Album •</Text>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>SONG TITLE</Text>
      </View>
      <View style={styles.barState}></View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon2.Button
          backgroundColor={'transparent'}
          name='refresh'
          color={'white'}
          size={20}
          iconStyle={{ marginRight: 20 }}
        />
        <View style={styles.skipContainer}>
          <Icon.Button
            backgroundColor={'transparent'}
            name='skip-previous'
            color={'white'}
            size={20}
            iconStyle={{ marginRight: 0 }}
          />
        </View>
        <LinearGradient
          colors={['transparent', 'rgba(255, 255, 255, 0.4)']}
          style={styles.playContainer}
        >
          <LinearGradient
            colors={['transparent', 'rgba(255, 255, 255, 0.7)']}
            style={styles.playContainer}
          >
            <Icon.Button
              onPress={() => setAudioStatus(!audioStatus)}
              name={audioStatus ? 'pause' : 'play'}
              backgroundColor={'transparent'}
              color={'white'}
              size={40}
              iconStyle={{ marginRight: 0 }}
              borderRadius={200}
            />
          </LinearGradient>
        </LinearGradient>
        <View style={styles.skipContainer}>
          <Icon.Button
            backgroundColor={'transparent'}
            name='skip-next'
            color={'white'}
            size={20}
            iconStyle={{ marginRight: 0 }}
          />
        </View>
        <Icon2.Button
          backgroundColor={'transparent'}
          name='random'
          color={'white'}
          size={20}
          iconStyle={{ marginRight: 20 }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>SINGER</Text>
      </View>
    </View>
  )
}

export default Reproductor
