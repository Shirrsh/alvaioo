
import React, { useEffect, useRef } from 'react';
import { LottiePlayerProps } from '../types';

declare global {
  interface Window {
    lottie: any;
  }
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ src, className, loop = true, autoplay = true, ariaLabel = "Animation" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: any = null;
    if (containerRef.current && window.lottie) {
      anim = window.lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: loop,
        autoplay: autoplay,
        path: src,
      });
    }
    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [src, loop, autoplay]);

  return <div ref={containerRef} className={className} role="img" aria-label={ariaLabel}></div>;
};

export default LottiePlayer;
