import { useState, useEffect } from 'react';

export function useVideoCheck(videoUrl: string) {
  const [hasVideo, setHasVideo] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(true);

  useEffect(() => {
    const checkVideo = async () => {
      try {
        const video = document.createElement('video');
        video.src = videoUrl;

        video.onloadeddata = () => {
          setHasVideo(true);
          setIsChecking(false);
        };

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
