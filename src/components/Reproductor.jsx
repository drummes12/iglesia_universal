import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 200,
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
        style={{...styles.imageContainer, padding: 30,}}
      >
        <LinearGradient
          colors={['transparent', 'rgba(255, 255, 255, 0.7)']}
          style={styles.imageContainer}
        >
          <Icon.Button
            onPress={() => setAudioStatus(!audioStatus)}
            name={audioStatus ? 'pause' : 'play'}
            backgroundColor={'transparent'}
            color={'white'}
            size={70}
            iconStyle={{ marginRight: 0, padding: 30 }}
            borderRadius={200}
          />
        </LinearGradient>
      </LinearGradient>
    </View>
  )
}

export default Reproductor
