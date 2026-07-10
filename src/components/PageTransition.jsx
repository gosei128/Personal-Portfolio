import { useEffect, useState } from "react";

/**
 * Wraps page-level content with a fade-slide-up animation on mount.
 * Used around each Route's element for route transition effects.
 */
const PageTransition = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small RAF delay ensures the initial state renders first,
    // then the transition class kicks in on the next frame.
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className="page-transition"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
