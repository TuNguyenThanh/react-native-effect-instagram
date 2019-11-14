import React from 'react'
import { ImageBackground, TouchableOpacity, FlatList, Text } from 'react-native'
import _ from 'lodash'

// Components
import Effect from './Effect'

// Style
import styles from './Styles/ListEffectStyle'

// Data Effect
import { EFFECT_OPTIONS } from './DataEffect'

export default class ListEffect extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      listEffect: []
    }
  }

  async componentDidMount () {
    try {
      let listEffect = []
      const { effectDefault } = this.props
      const findIndexEffectDefault = _.findIndex(EFFECT_OPTIONS, (effect) => {
        return effect.filter === effectDefault
      })
      if (findIndexEffectDefault !== -1) {
        await EFFECT_OPTIONS.map((item, index) => {
          listEffect.push(Object.assign({}, item, { isSelected: findIndexEffectDefault === index }))
        })
        this.setState({ listEffect })
      }
    } catch (error) {
      console.log(error)
    }
  }

  renderImageFilter = ({ item, index }) => {
    const { imageDefault } = this.props
    const {
      isShowTextEffect, textEffectStyle,
      effectStyle, effectSelectedStyle
    } = this.props
    return (
      <TouchableOpacity
        key={'keyImgFilter' + index}
        onPress={this.onPressFilter.bind(this, item.filter, index)}
      >
        <Effect effect={item.filter}>
          <ImageBackground
            style={[[styles.imageFilter, effectStyle], item.isSelected && [styles.imageSelected, effectSelectedStyle]]}
            source={{ uri: imageDefault.uri }}
          >
            {
              isShowTextEffect &&
              <Text style={[styles.textEffect, textEffectStyle]} numberOfLines={1}>{item.filter}</Text>
            }
          </ImageBackground>
        </Effect>
      </TouchableOpacity>
    )
  }

  onPressFilter = (filterOption, index) => {
    let { listEffect } = this.state
    const findIndexSelected = _.findIndex(listEffect, (filter) => {
      return filter.isSelected === true
    })
    if (findIndexSelected !== -1) {
      listEffect[findIndexSelected].isSelected = false
    }
    listEffect[index].isSelected = true
    this.setState({ listEffect }, () => {
      const onPress = this.props.effectSelected
      typeof onPress === 'function' && onPress(filterOption)
    })
  }

  renderEffect = ({ item, index }) => {
    const { renderEffect } = this.props
    return (
      <Effect effect={item.filter}>
        {renderEffect({ effect: item.filter, index })}
      </Effect>
    )
  }

  render () {
    const { listEffect } = this.state
    const { listEffectStyle, contentListEffectStyle, renderEffect } = this.props
    return (
      <FlatList
        data={listEffect}
        contentContainerStyle={[styles.contentContainerStyle, contentListEffectStyle]}
        style={[styles.flatListImage, listEffectStyle]}
        keyExtractor={(item, index) => index.toString()}
        extraData={this.state}
        renderItem={renderEffect ? this.renderEffect : this.renderImageFilter}
        {...this.props}
      />
    )
  }
}
