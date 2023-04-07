import React, { useEffect, useRef, useState } from 'react';
import videoSrc from '../../assets/video/screen1.mp4';
import styles from './Screen1.module.css';
import { IconButton, useMediaQuery } from '@mui/material';
import { VolumeOff, VolumeUp } from '@mui/icons-material';

const Screen1 = () => {
  const videoRef = useRef(null); // 비디오 요소에 대한 참조
  const [isMuted, setIsMuted] = useState(true); // 비디오 음소거 상태
  const isMobile = useMediaQuery('(max-width:600px)'); // 기기가 모바일인지 확인

  // 창 크기 조정을 처리하는 useEffect
  useEffect(() => {
    const handleResize = () => {
      const video = videoRef.current;
      // 가로 세로 비율에 따라 비디오 너비 또는 높이를 100%로 설정
      video.style[
        video.videoWidth / video.videoHeight <
        window.innerWidth / window.innerHeight
          ? 'width'
          : 'height'
      ] = '100%';
    };

    window.addEventListener('resize', handleResize); // 창 크기 조정을 위한 이벤트 리스너 추가
    handleResize(); // 초기에 handleResize 호출

    // 컴포넌트가 마운트 해제될 때 이벤트 리스너 정리
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 음소거 버튼 클릭 처리 함수
  const handleMuteClick = () => {
    const video = videoRef.current;
    video.muted = !isMuted; // 비디오 음소거 상태 토글
    setIsMuted(!isMuted); // isMuted 상태 업데이트
  };

  return (
    <div className={styles.screen}>
      {/* 비디오 요소t */}
      <video
        ref={videoRef}
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={() => {
          const video = videoRef.current;
          video.style.opacity = 1; // metadata가 로드되면 동영상의 불투명도를 1로 설정
          // metadata가 로드되면 handleResize()를 호출하여 비디오 크기 조정
          const handleResize = () => {
            video.style[
              video.videoWidth / video.videoHeight <
              window.innerWidth / window.innerHeight
                ? 'width'
                : 'height'
            ] = '100%';
          };
          handleResize();
        }}
      >
        {/* 비디오 소스 */}
        <source src={videoSrc} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
      {/* 음소거 버튼, 모바일 기기가 아닌 경우에만 표시 */}
      {!isMobile && (
        <IconButton className={styles.volumeButton} onClick={handleMuteClick}>
          {isMuted ? <VolumeOff /> : <VolumeUp />}
        </IconButton>
      )}
    </div>
  );
};

export default Screen1;
