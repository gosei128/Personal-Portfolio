import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that uses Intersection Observer to trigger
 * a fade-slide-up animation when an element scrolls into view.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1) to trigger. Default 0.15
 * @param {string} options.rootMargin - Root margin for observer. Default "0px 0px -50px 0px"
 * @param {boolean} options.triggerOnce - Only trigger once. Default true
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
const useFadeSlideUp = ({
  threshold = 0.15,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export default useFadeSlideUp;
