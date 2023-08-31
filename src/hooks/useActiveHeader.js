import { useEffect } from "react";
import { useState } from "react";

export default function useActiveHeader() {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isHeaderActive };
}
