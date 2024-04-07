import React, { useRef, useState } from 'react';

export default function CoolPeaceImageSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPauseVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSeek = (time) => {
    videoRef.current.currentTime = time;
  };

  return (
    <section>
      <section className="flex-row mx-auto">
        <div className="text-center text-lg font-medium">
          <div className='my-3'>데스크탑 및 테블릿</div>
          <img className="mx-auto mb-20" src='/Coolpeace-Desktop.png' alt='Coolpeace-Desktop' width="500" height="300" />
        </div>
        <div className="text-center text-lg font-medium">
          <div className='my-3'>모바일</div>
          <img className='mx-auto mb-20' src='/Coolpeace-Mobile.png' alt='Coolpeace-Mobile' width="300" height="500" />
        </div>
      </section>
      <div className="text-center text-lg font-medium">
      <div className='my-3'>동영상</div>
      <div className="mx-auto" style={{ width: '90%', textAlign: 'center' }}>
          <video ref={videoRef} loop muted onTimeUpdate={handleTimeUpdate} style={{ width: '100%' }}>
            <source src="/Coolpeace-Video.mp4" type="video/mp4" />
          </video>
        </div>
      <div>
        <button onClick={handlePlayPauseVideo}>{isPlaying ? '일시 정지' : '재생'}</button>
        <div>현재 시간: {currentTime.toFixed(0)} 초</div>
        <input type="range" min="0" max={videoRef.current ? videoRef.current.duration : 0} step="0.01" value={currentTime} onChange={(e) => handleSeek(parseFloat(e.target.value))} />
      </div>
      </div>
    </section>
  );
};
