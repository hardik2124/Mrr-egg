import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.5,
        
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
};

export default useLenisScroll;
