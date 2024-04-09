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
      let isScrolling = false;
      let startX;
      let startY;

      const onTouchStart = (e) => {
        if (e.touches.length !== 1) return;
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
        isScrolling = true;
      };

      const onTouchMove = (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const deltaX = startX - e.touches[0].pageX;
        const deltaY = startY - e.touches[0].pageY;

        // Check if the movement is more horizontal than vertical
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Prevent vertical scrolling
          el.style.overflow = 'hidden';
          el.scrollLeft += deltaX;
        } else {
          // Allow vertical scrolling
          el.style.overflow = 'auto';
        }
      };

      const onTouchEnd = () => {
        isScrolling = false;
        el.style.overflow = 'auto'; // Restore default overflow behavior
      };

      el.addEventListener('touchstart', onTouchStart, { passive: true });
      el.addEventListener('touchmove', onTouchMove, { passive: false });
      el.addEventListener('touchend', onTouchEnd);

      return () => {
        el.removeEventListener('touchstart', onTouchStart);
        el.removeEventListener('touchmove', onTouchMove);
        el.removeEventListener('touchend', onTouchEnd);
      };
    }
  }, []);

  return elRef;
}
