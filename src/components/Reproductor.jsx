import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Audio } from 'expo-av'

const Reproductor = () => {
  const [audioStatus, setAudioStatus] = useState()
  const [sound, setSound] = useState(new Audio.Sound())

  useEffect(() => {
    (async () => {
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
        } catch (e) {
        }
      }
    })()
  }, [audioStatus])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3A617E',
        opacity: 0.9,
      }}
    >
      <Icon.Button
        onPress={() => setAudioStatus(!audioStatus)}
        name={audioStatus ? 'pause' : 'play'}
        backgroundColor={'transparent'}
        color={'white'}
        size={200}
        padding={10}
        paddingRight={0}
      />
    </View>
  )
}

export default Reproductor
