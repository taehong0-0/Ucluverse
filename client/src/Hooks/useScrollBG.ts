import { useRef, useEffect, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { theme } from '../Recoil/Theme';

export const useScrollBG  = (bg : string = 'default', duration : number = 1, delay : number = 0, thresholdIdx : number = 0.5) => {
    const DOM = useRef<any>(); // ref type 형식 넣어야함 (scrollinfo)
    const setThemeColor = useSetRecoilState(theme);

    const moveScroll = useCallback(
      ([entry]) => {
        if (entry.isIntersecting) {
            setThemeColor(bg);
        };
      },
      [delay, duration],
    );
  
    useEffect(() => {
      let observer : IntersectionObserver;
      const { current } = DOM;
  
      if (current) {
        observer = new IntersectionObserver(moveScroll, { threshold: thresholdIdx }); // threshold (노출율)
        observer.observe(current);
      }
  
      return () => observer && observer.disconnect();
    }, [moveScroll]);
  
    return {
      ref: DOM,
    };
}

export default useScrollBG;