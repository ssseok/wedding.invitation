import { Button } from '@/common/components/ui/button';
import { Volume2, VolumeX, Play } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface BackgroundMusicProps {
  hasVideo: boolean;
}

export default function BackgroundMusic({ hasVideo }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasUserInteraction, setHasUserInteraction] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 컴포넌트 마운트 시 로컬 스토리지에서 사용자 상호작용 상태 복원
  useEffect(() => {
    const savedInteraction = localStorage.getItem('hasUserInteraction');
    if (savedInteraction === 'true') {
      setHasUserInteraction(true);
    }
  }, []);

  // 비디오 상태가 변경될 때마다 음악 상태 업데이트
  useEffect(() => {
    if (!audioRef.current) return;

    if (hasVideo) {
      // 비디오가 있으면 음악 정지
      audioRef.current.pause();
      setIsPlaying(false);
    } else if (hasUserInteraction) {
      // 비디오가 없고 사용자 상호작용이 있으면 음악 재생 시도
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // 재생 성공
            setIsPlaying(true);
          })
          .catch((error) => {
            // 재생 실패 (자동 재생 정책 등으로 인해)
            console.error('자동 재생 실패:', error);
            setIsPlaying(false);
          });
      }
    }
  }, [hasVideo, hasUserInteraction]);

  const handleInitialPlay = () => {
    setHasUserInteraction(true);
    // 로컬 스토리지에 사용자 상호작용 상태 저장
    localStorage.setItem('hasUserInteraction', 'true');

    if (audioRef.current) {
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
      {/* 배경음악 컨트롤 */}
      <div className='fixed top-0 left-0 right-0 z-40'>
        <div className='max-w-screen-sm mx-auto relative'>
          <div className='absolute top-4 right-4'>
            {!hasUserInteraction ? (
              <Button
                variant='secondary'
                size='sm'
                className='rounded-full bg-white/80 hover:bg-white/90 shadow-sm'
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
                {isPlaying ? (
                  <Volume2 className='w-4 h-4' />
                ) : (
                  <VolumeX className='w-4 h-4' />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* 배경 음악 */}
      <audio ref={audioRef} loop preload='auto' src='/music/here-with-me.mp3' />
    </>
  );
}
