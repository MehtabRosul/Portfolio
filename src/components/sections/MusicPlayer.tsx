import React, { useState, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [trackIndex, setTrackIndex] = useState(0);

  const tracks = [
    "https://cdn.pixabay.com/download/audio/2023/07/30/audio_e0908e8569.mp3?filename=good-night-lofi-cozy-chill-music-160166.mp3",
    "https://cdn.pixabay.com/download/audio/2024/11/26/audio_3140bc3184.mp3?filename=energetic-fun-summer-pop-party-intro-269175.mp3",
    "https://cdn.pixabay.com/download/audio/2024/11/26/audio_dced686588.mp3?filename=world-war-iii-268932.mp3",
    "https://cdn.pixabay.com/download/audio/2024/10/17/audio_7462983593.mp3?filename=information-corporate-advertising-music-252179.mp3",
    "https://cdn.pixabay.com/download/audio/2022/02/15/audio_1e79dbf2b9.mp3?filename=into-the-night-uk-drill-music-20928.mp3",
  ];

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(event.target.value);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleNextTrack = () => {
    const nextTrack = trackIndex + 1 < tracks.length ? trackIndex + 1 : 0;
    setTrackIndex(nextTrack);
  };

  const handlePreviousTrack = () => {
    const prevTrack = trackIndex - 1 >= 0 ? trackIndex - 1 : tracks.length - 1;
    setTrackIndex(prevTrack);
  };

  return (
    <div className="music-player bg-transparent flex flex-col items-center justify-center p-3 rounded-xl shadow-xl">
      <audio
        ref={audioRef}
        src={tracks[trackIndex]}
        onTimeUpdate={handleTimeUpdate}
        autoPlay={isPlaying}
      />
      <div className="controls flex items-center justify-between w-full">
        <button
          className="control-button"
          onClick={handlePreviousTrack}
        >
          &lt; Prev
        </button>

        <button className="play-pause" onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <button
          className="control-button"
          onClick={handleNextTrack}
        >
          Next &gt;
        </button>
      </div>

      <input
        className="seeker"
        type="range"
        min="0"
        max={audioRef.current?.duration || 100}
        value={currentTime}
        step="0.1"
        onChange={handleSeek}
      />
    </div>
  );
};

export default MusicPlayer;
