import React from 'react'
import _ from 'lodash'

// Data Effect
import { EFFECT_OPTIONS, LIST_COMPONENTS } from './DataEffect'

export default class Effect extends React.PureComponent {
  render () {
    const { children, effect } = this.props
    const findIndexEffect = _.findIndex(EFFECT_OPTIONS, (item) => {
      return item.filter === effect
    })
    if (findIndexEffect !== -1) {
      const EFFECT = LIST_COMPONENTS[findIndexEffect]
      if (EFFECT) {
        return <EFFECT image={children} />
      }
    }
    return children
  }
}
