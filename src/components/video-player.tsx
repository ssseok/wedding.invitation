import { useState } from 'react';
import { VolumeOff } from 'lucide-react';
import LoaderLoading from '@/common/components/loader-loading';

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
}

export default function VideoPlayer({ videoUrl, posterUrl }: VideoPlayerProps) {
  const [muted, setMuted] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const onClick = () => {
    setMuted((prev) => !prev);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    console.error('비디오 로딩 중 오류가 발생했습니다:', videoUrl);
  };

  return (
    <div className='relative w-full aspect-4/5 z-30'>
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
          <LoaderLoading />
        </div>
      )}

      {hasError ? (
        <div className='w-full aspect-video flex items-center justify-center bg-gray-100'>
          <p className='text-red-500'>비디오를 불러올 수 없습니다</p>
        </div>
      ) : (
        <div className='absolute top-0 inset-x-0 -z-10 overflow-hidden'>
          <video
            className='w-full inset-0 object-cover aspect-4/5'
            preload='auto'
            loop
            autoPlay
            muted={muted}
            playsInline
            poster={posterUrl}
            onLoadedData={handleLoadedData}
            onError={handleError}
          >
            <source src={videoUrl} type='video/mp4' />
            영상을 호한하지 않는 브라우저입니다.
          </video>
        </div>
      )}
      {muted && (
        <button
          className='absolute top-4 left-4 z-1 flex gap-1 items-center px-2 py-1 rounded-lg text-xs bg-gray-50/90 active:bg-gray-100'
          onClick={onClick}
        >
          <VolumeOff className='w-4 h-4' />
          음소거 해제
        </button>
      )}
    </div>
  );
}
