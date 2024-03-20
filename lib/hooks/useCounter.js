import { useEffect, useRef, useState } from 'react';

const useCounter = (initialValue, maxValue, incrementAmount, shouldAnimate) => {
  const [count, setCount] = useState(initialValue);
  const prevCountRef = useRef(initialValue);

  useEffect(() => {
    let animationFrameId;

    const animateCounter = (timestamp) => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animateCounter);
      }

      setCount((prevCount) => {
        const newCount = prevCountRef.current + incrementAmount;
        return newCount <= maxValue ? newCount : maxValue;
      });

      if (prevCountRef.current >= maxValue) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    if (shouldAnimate && prevCountRef.current < maxValue) {
      animationFrameId = requestAnimationFrame(animateCounter);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [maxValue, incrementAmount, shouldAnimate]);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return count;
};

export default useCounter;
