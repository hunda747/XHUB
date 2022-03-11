import React from 'react';
import YouTube from 'react-youtube';

class Example extends React.Component {
  render() {
    const opts = {
      height: '250',
      width: '350',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return <YouTube videoId={this.props.url} opts={opts} onPause={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Example;