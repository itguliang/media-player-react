import React, { Component } from 'react';
import './style.css';

class MediaPlayer extends Component {
  render() {
    return (
      <div className="video-container">
        <video src={this.props.url} controls="controls">
           your browser does not support the video tag
        </video>
      </div>
    );
  }
}

export default MediaPlayer;