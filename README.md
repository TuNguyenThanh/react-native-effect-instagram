# react-native-effect-instagram [![npm version](https://badge.fury.io/js/%40tu-nguyen-tech%2Freact-native-effect-instagram.svg)](https://badge.fury.io/js/%40tu-nguyen-tech%2Freact-native-effect-instagram)

[![NPM](https://nodei.co/npm/@tu-nguyen-tech/react-native-effect-instagram.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@tu-nguyen-tech/react-native-effect-instagram/)

A React Native Component various image filters for iOS & Android.

<pre>
<img src="https://github.com/TuNguyenThanh/react-native-effect-instagram/blob/master/Image/example-list.png" alt="react native effect instagram example" width="336" height="600"/>         <img src="https://github.com/TuNguyenThanh/react-native-effect-instagram/blob/master/Image/example-grid.png" alt="react native effect instagram example" width="336" height="600"/>
Example List                                     Example Grid
</pre>


## Status
- iOS & Android:
  - Filter components work as combinable wrappers for standard `Image` and `ImageBackground` components
  - Resulting images are being cached in memory
- react-native:
  - supported versions:

    | react-native     | min Android SDK | min iOS version |
    |------------------|-----------------|-----------------|
    | >=0.57.1         | 17              | 9.0             |
    
## Installation
To use this library, you will need install `react-native-image-filter-kit`, please refer to the [README / Install](https://github.com/iyegoroff/react-native-image-filter-kit#react-native-image-filter-kit).

```
npm install --save @tu-nguyen-tech/react-native-effect-instagram
```
or
```
yarn add @tu-nguyen-tech/react-native-effect-instagram
```

[**don't forget to see how to configure react-native-image-filter-kit**](https://github.com/iyegoroff/react-native-image-filter-kit#react-native-image-filter-kit)

## Usage
```
import FilterInstagram from '@tu-nguyen-tech/react-native-effect-instagram'
```

## Example
```
state = {
  effect: 'Aden'
}

<FilterInstagram
  effect={this.state.effect}
  style={styles.filterInstagram}
  image={{ uri: 'https://tunguyen.tech/media/2019/09/1G2QwxPF2TvWXzRUnA4axoA.jpg' }}
  horizontal
  isShowTextEffect
  textEffect={styles.textEffect}
  effectSelectedStyle={styles.effectSelectedStyle}
  onPressEffectSelected={(effect) => this.setState({ effect })}
/>
```

### Props

| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
|**`image`**|`Object`|Image |`Yes`||
|**`effect`**|`String`|Effect filter image |`Yes`|`Normal`|
|**`onPressEffectSelected`**|`Function`|Function when press effect item. |`Yes`||
|**`isShowTextEffect`**|`Boolean`|Show text effect center |`No`||
|**`imagePreviewProps`**|`Object`|Custom props image preview |`No`||
|**`renderEffect`**|`Function`|Render effect custom|`No`||

### Style
| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
|**`style`**|`Object`|Custom style FilterInstagram component |`No`||
|**`textEffect`**|`Object`|Custom text effect style |`No`||
|**`effectSelectedStyle`**|`Object`|Style when effect selected|`No`||
|**`imagePreviewStyle`**|`Object`|Custom style image preview|`No`||

## License

MIT

`Library made by TuNguyen`

Website: [tunguyen.tech](https:tunguyen.tech/)
