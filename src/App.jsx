import { useState } from "react";
import Navbar from "./assets/components/Navbar";

function App() {
  const [isDarkMode, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="dark:bg-dark-mode h-screen transition-colors">
        <Navbar handleToggle={handleToggle} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
