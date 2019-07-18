# media-player-react
react 媒体组件

### Usage

```bash
npm install media-player-react --save
# or
yarn add media-player-react
```

```js
import React, { Component } from 'react'
import {MediaPlayer} from 'media-player-react'

class App extends Component {
  render () {
    return <MediaPlayer url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'/>
  }
}
```

<!-- Demo page: [`https://cookpete.com/react-player`](https://cookpete.com/react-player) -->

### Props

Prop | Description | Default
---- | ----------- | -------
`url` | The url of a video or song to play
<!-- `playing` | Set to `true` or `false` to pause or play the media | `false`
`loop` | Set to `true` or `false` to loop the media | `false`
`controls` | Set to `true` or `false` to display native player controls<br />&nbsp; ◦ &nbsp;Vimeo, Twitch and Wistia player will always display controls | `false`
`light` | Set to `true` to show just the video thumbnail, which loads the full player on click<br />&nbsp; ◦ &nbsp;Pass in an image URL to override the preview image | `false`
`volume` | Set the volume of the player, between `0` and `1`<br/>&nbsp; ◦ &nbsp;`null` uses default volume on all players [`#357`](https://github.com/CookPete/react-player/issues/357) | `null`
`muted` | Mutes the player<br/>&nbsp; ◦ &nbsp;Only works if `volume` is set | `false`
`playbackRate` | Set the playback rate of the player<br />&nbsp; ◦ &nbsp;Only supported by YouTube, Wistia, and file paths | `1`
`width` | Set the width of the player | `640px`
`height` | Set the height of the player | `360px`
`style` | Add [inline styles](https://facebook.github.io/react/tips/inline-styles.html) to the root element | `{}`
`progressInterval` | The time between `onProgress` callbacks, in milliseconds | `1000`
`playsinline` | Applies the `playsinline` attribute where supported | `false`
`pip` | Set to `true` or `false` to enable or disable [picture-in-picture mode](https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture) | `false`
`wrapper` | Element or component to use as the container element | `div`
`config` | Override options for the various players, see [config prop](#config-prop) -->