import { useState } from "react";

export default function useToggleValue() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return {
    toggle,
    setToggle,
    handleToggle,
  };
}
