import { memo, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

interface SplashScreenProps {
  fadeOutTime?: number;
}

// 컴포넌트 초기화 과정에서 1회만 필요하므로 컴포넌트 외부에서 참조
const splashScreenElement = document.getElementById(
  'splash-screen',
) as HTMLElement;

// SplashScreen 컴포넌트
function SplashScreen({
  fadeOutTime = 2000,
}: SplashScreenProps): JSX.Element | null {
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
    <div className='fixed inset-0 z-50  bg-[url("/src/assets/wedding.png")] w-full h-full bg-cover bg-center bg-no-repeat animate-fade-out opacity-100 delay-1200'></div>,
    splashScreenElement,
  );
}

// 컴포넌트 속성이 변경되지 않을 경우 불필요한 리-렌더링 차단
export default memo(SplashScreen);
