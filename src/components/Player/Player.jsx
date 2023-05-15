import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

class Player extends Component {
    state = { isVideoLoaded: false };
    
    componentDidUpdate(prevProps) {
        // ТУТ ОБЯЗАТЕЛЬНО ВСЁ ДЕЛАТЬ ЧЕРЕЗ ПРОВЕРКИ!!
        if (prevProps.url !== this.props.url) {
            this.setState({ isVideoLoaded: false });
       }
    }
  render() {
    const { url } = this.props;
      const { isVideoLoaded } = this.state;
      const playerSize = isVideoLoaded ? '100%' : 0;
    return (
        <>
            {/* тут проверка или есть урл для загрузки тогда показываем - загрузка, иначе ничего */}
        {url && !isVideoLoaded && <h2>Loading...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
                        url={url}
                        width={playerSize}
                        height={playerSize}
              controls
              onReady={() => this.setState({ isVideoLoaded: true })}
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}

export default Player;
