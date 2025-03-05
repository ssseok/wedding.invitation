import { memo, useLayoutEffect, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface SplashScreenProps {
  fadeOutTime?: number;
}

// 컴포넌트 초기화 과정에서 1회만 필요하므로 컴포넌트 외부에서 참조
const splashScreenElement = document.getElementById(
  'splash-screen',
) as HTMLElement;

const TEXTS = [`○○, ○○ 결혼합니다.`];

// SplashScreen 컴포넌트
function SplashScreen({
  fadeOutTime = 3000,
}: SplashScreenProps): JSX.Element | null {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  // 타이핑 효과
  useEffect(() => {
    if (currentText.length < TEXTS[textIndex].length) {
      const timer = setTimeout(() => {
        setCurrentText((prev) => prev + TEXTS[textIndex][currentText.length]);
      }, 50);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (textIndex < TEXTS.length - 1) {
          setTextIndex((prev) => prev + 1);
          setCurrentText('');
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentText, textIndex]);

  // 레이아웃 이펙트
  useLayoutEffect(() => {
    if (!splashScreenElement) return;

    // 페이드 아웃 타임이 되면 스플래시 스크린 콘텐츠 삭제
    const clearId = setTimeout(() => {
      splashScreenElement.innerHTML = '';
    }, fadeOutTime);

    return () => {
      clearTimeout(clearId);
    };
  }, [fadeOutTime]);

  if (!splashScreenElement) return null;

  return createPortal(
    <div className='fixed inset-0 z-50 backdrop-blur-sm bg-foreground/50 max-w-screen-sm mx-auto w-full h-full bg-cover bg-center bg-no-repeat animate-fade-out opacity-100 delay-3000'>
      <div className='absolute inset-0 flex flex-col items-center justify-center mx-auto gap-4'>
        <Heart />
        <div className='text-background text-xl min-h-[2rem]'>
          {currentText}
          <span className='animate-pulse'>|</span>
        </div>
      </div>
    </div>,
    splashScreenElement,
  );
}

// 컴포넌트 속성이 변경되지 않을 경우 불필요한 리-렌더링 차단
export default memo(SplashScreen);

function Heart() {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[60px] h-[60px] fill-red-500 animate-heart-beat'
      viewBox='-2 -2 28 28'
    >
      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
    </svg>
  );
}
