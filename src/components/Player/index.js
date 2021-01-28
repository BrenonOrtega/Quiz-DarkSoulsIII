import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Song from '../../assets/audio/song.mp3';

const Container = styled.div`
  width:100px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Player() {
  const audioTrack = useRef();
  const [song, setSong] = useState(true);

  function handlePlay() {
    setSong(false);
    audioTrack.current.play();
  }

  function handleSongPause() {
    audioTrack.current.pause();
    setSong(true);
  }

  return (
    <Container onLoad={handlePlay}>
      <audio ref= { audioTrack } src={ Song } track="Dark Souls OST"/>
      {song && (
      <button type="button" onClick={handlePlay}>
        Try Me!
      </button>
      )}

      {!song && (
      <button type="button" onClick={handleSongPause}>
        Pause
      </button>
      )}
    </Container>
  );
}

export default Player;
