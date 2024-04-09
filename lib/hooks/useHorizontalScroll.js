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

      const onTouchStart = (e) => {
        if (e.touches.length !== 1) return;
        startX = e.touches[0].pageX - el.offsetLeft;
        isScrolling = true;
      };

      const onTouchMove = (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.touches[0].pageX - el.offsetLeft;
        const delta = startX - x;
        startX = x;
        el.scrollLeft += delta;
      };

      const onTouchEnd = () => {
        isScrolling = false;
      };

      // const onWheel = (e) => {
      //   if (e.deltaY === 0) return;
      //   e.preventDefault();
      //   el.scrollTo({
      //     left: el.scrollLeft + e.deltaY,
      //     behavior: 'smooth',
      //   });
      // };

      el.addEventListener('touchstart', onTouchStart, { passive: true });
      el.addEventListener('touchmove', onTouchMove, { passive: false });
      el.addEventListener('touchend', onTouchEnd);
      // el.addEventListener('wheel', onWheel);

      return () => {
        el.removeEventListener('touchstart', onTouchStart);
        el.removeEventListener('touchmove', onTouchMove);
        el.removeEventListener('touchend', onTouchEnd);
        // el.removeEventListener('wheel', onWheel);
      };
    }
  }, []);

  return elRef;
}
