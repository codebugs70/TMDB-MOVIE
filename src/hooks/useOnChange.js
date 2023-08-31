import { useState } from "react";

export default function useOnChange() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return {
    query,
    handleChange,
    setQuery,
  };
}
