import { Component } from 'react';
import videos from '../Videos.json';
import Player from './Player/Player';
import { VideoList } from './VideoList/VideoList';
class VideoPlayer extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };
  render() {
    return (
      <div>
        <h1>Selected video : {this.state.selectedVideo}</h1>
            <VideoList videos={videos} onSelect={this.selectVideo} />
            <Player url={this.state.selectedVideo}/>
      </div>
    );
  }
}

export default VideoPlayer;
