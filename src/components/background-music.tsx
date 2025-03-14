import { Button } from '@/common/components/ui/button';
import { Volume2, VolumeX, Play } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface BackgroundMusicProps {
  hasVideo: boolean;
}

export default function BackgroundMusic({ hasVideo }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasUserInteraction, setHasUserInteraction] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const savedInteraction = localStorage.getItem('hasUserInteraction');
    if (savedInteraction === 'true') {
      setHasUserInteraction(true);
    }
  }, [hasUserInteraction, hasVideo]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (hasVideo) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);

      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            console.log('음소거 상태로 자동 재생 성공');

            if (hasUserInteraction) {
              audioRef.current!.muted = false;
              setIsMuted(false);
            }
          })
          .catch((error) => {
            console.error('자동 재생 실패:', error);
            setIsPlaying(false);
          });
      }
    }
  }, [hasVideo, hasUserInteraction]);

  const handleInitialPlay = () => {
    setHasUserInteraction(true);
    localStorage.setItem('hasUserInteraction', 'true');

    if (audioRef.current) {
      audioRef.current.muted = false;
      setIsMuted(false);

      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('재생 실패:', error);
            setIsPlaying(false);
          });
      }
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.muted = false;
      setIsMuted(false);

      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('재생 실패:', error);
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-40'>
        <div className='max-w-screen-sm mx-auto relative'>
          <div className='absolute top-4 right-4'>
            {!hasUserInteraction ? (
              <Button
                variant='secondary'
                size='sm'
                className='rounded-full bg-white/80 hover:bg-white/90 shadow-sm animate-pulse z-50'
                onClick={handleInitialPlay}
              >
                <Play className='w-4 h-4' />
              </Button>
            ) : (
              <Button
                variant='secondary'
                size='sm'
                className='rounded-full bg-white/80 hover:bg-white/90 shadow-sm'
                onClick={toggleAudio}
              >
                {isPlaying && !isMuted ? (
                  <Volume2 className='w-4 h-4' />
                ) : (
                  <VolumeX className='w-4 h-4' />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>

      <audio ref={audioRef} loop preload='auto' src='/music/here-with-me.mp3' />
    </>
  );
}
