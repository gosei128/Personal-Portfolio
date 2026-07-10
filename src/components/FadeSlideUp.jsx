import useFadeSlideUp from "./hook/useFadeSlideUp";

/**
 * Wrapper component for scroll-triggered fade-slide-up animations.
 * Wrap any section content with this to animate it into view on scroll.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {number} props.delay - Stagger delay in ms. Default 0
 * @param {number} props.duration - Animation duration in ms. Default 600
 * @param {number} props.distance - Slide distance in px. Default 40
 * @param {string} props.className - Additional classes
 */
const FadeSlideUp = ({
  children,
  delay = 0,
  duration = 600,
  distance = 40,
  className = "",
}) => {
  const { ref, isVisible } = useFadeSlideUp({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default FadeSlideUp;
