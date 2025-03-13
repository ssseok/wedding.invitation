import { useState, useEffect } from 'react';

export function useVideoCheck(videoUrl: string) {
  const [hasVideo, setHasVideo] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(true);

  useEffect(() => {
    const checkVideo = async () => {
      try {
        // HEAD 요청 대신 실제 비디오 요소로 체크
        const video = document.createElement('video');
        video.src = videoUrl;

        // 비디오 로드 이벤트 처리
        video.onloadeddata = () => {
          setHasVideo(true);
          setIsChecking(false);
        };

        // 에러 처리
        video.onerror = () => {
          setHasVideo(false);
          setIsChecking(false);
        };
      } catch (error) {
        console.error('Video check error:', error);
        setHasVideo(false);
        setIsChecking(false);
      }
    };

    checkVideo();
  }, [videoUrl]);

  return { hasVideo, isChecking };
}
