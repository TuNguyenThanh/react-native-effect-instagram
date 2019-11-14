import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')
const borderRadius = 3
const smallMargin = 5
const baseMargin = smallMargin * 2
const doubleBaseMargin = baseMargin * 2

export default StyleSheet.create({
  imageFilter: {
    width: ((width - (baseMargin * 2)) / 3) - doubleBaseMargin,
    height: ((width - (baseMargin * 2)) / 3) - doubleBaseMargin,
    marginRight: baseMargin,
    marginBottom: baseMargin,
    borderRadius: borderRadius,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatListImage: {
    flex: 1
  },
  contentContainerStyle: {
    marginLeft: smallMargin,
    alignItems: 'center'
  },
  imageSelected: {
    borderRadius: borderRadius,
    borderWidth: smallMargin,
    borderColor: '#000'
  },
  textEffect: {
    fontSize: 14,
    color: '#000'
  }
})
