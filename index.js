import React from 'react'
import PropsTypes from 'prop-types'
import { View, Image } from 'react-native'

import ListEffect from './ListEffect'
import Effect from './Effect'

// Style
import styles from './Styles'

export default class FilterInstagram extends React.PureComponent {
  static propTypes = {
    image: PropsTypes.object.isRequired,
    effect: PropsTypes.string.isRequired,
    onPressEffectSelected: PropsTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    const { image } = this.props
    this.state = {
      image,
      effect: null
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.effect !== prevState.effect) {
      return { effect: nextProps.effect }
    }
    return null
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevState.effect !== this.state.effect) {
      const { effect } = this.props
      this.setState({ effect })
    }
  }

  onPressEffectSelected = (effect) => {
    let onPress = this.props.onPressEffectSelected
    typeof onPress === 'function' && onPress(effect)
  }

  render () {
    const { effect, image } = this.state
    const { style, imagePreviewStyle, imagePreviewProps, renderImagePreview, numColumns } = this.props
    return (
      <View style={[styles.mainContainer, style]}>
        <Effect effect={effect}>
          {
            renderImagePreview ?
              renderImagePreview() :
              <Image
                style={[styles.imagePreview, imagePreviewStyle]}
                source={image}
                {...imagePreviewProps}
              />
          }
        </Effect>
        <View style={styles.wrapEffect}>
          <ListEffect
            effectDefault={effect || 'Normal'}
            imageDefault={image}
            effectSelected={this.onPressEffectSelected}
            {...this.props}
            horizontal={!numColumns}
          />
        </View>
      </View>
    )
  }
}
