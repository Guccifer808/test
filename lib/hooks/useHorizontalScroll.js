// import { useRef, useEffect } from "react";

// export function useHorizontalScroll() {
//   const elRef = useRef();
//   useEffect(() => {
//     const el = elRef.current;
//     if (el) {
//       const onWheel = (e) => {
//         if (e.deltaY == 0) return;
//         e.preventDefault();
//         el.scrollTo({
//           left: el.scrollLeft + e.deltaY,
//           behavior: "smooth",
//         });
//       };
//       el.addEventListener("wheel", onWheel);
//       return () => el.removeEventListener("wheel", onWheel);
//     }
//   }, []);
//   return elRef;
// }

import { useRef, useEffect } from 'react';

export function useHorizontalScroll() {
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;

    if (el) {
      let startX;
      let startY;
      let scrollLeftStart;

      const onTouchStart = (e) => {
        if (e.touches.length !== 1) return;
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
        scrollLeftStart = el.scrollLeft;
      };

      const onTouchMove = (e) => {
        e.preventDefault();
        const deltaX = startX - e.touches[0].pageX;
        const deltaY = startY - e.touches[0].pageY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Horizontal swipe
          const scrollLeftDelta = scrollLeftStart + deltaX;
          el.scrollTo({ left: scrollLeftDelta });
        }
      };

      el.addEventListener('touchstart', onTouchStart, { passive: true });
      el.addEventListener('touchmove', onTouchMove, { passive: false });

      return () => {
        el.removeEventListener('touchstart', onTouchStart);
        el.removeEventListener('touchmove', onTouchMove);
      };
    }
  }, []);

  return elRef;
}
