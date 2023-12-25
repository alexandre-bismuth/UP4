import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, BtnDimension, ImgDimension, padding, handlePress, text}) => {
  return (
    <TouchableOpacity style={styles.btnContainer(BtnDimension, padding)} onPress={handlePress}>
      <Image 
        source = {iconUrl}
        resizeMode = "cover"
        style = {styles.btnImg(ImgDimension)}
      />
      {text && < Text style={styles.btnText()}>{text}</Text>}
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn