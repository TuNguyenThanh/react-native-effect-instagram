import { Dimensions, StyleSheet } from 'react-native'
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  imagePreview: {
    width,
    height: width
  },
  wrapEffect: {
    flex: 1
  }
})
