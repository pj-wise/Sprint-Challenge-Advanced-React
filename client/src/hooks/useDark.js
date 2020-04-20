import React, { useState, useEffect } from "react";

export const useDark = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    dark
      ? document.body.classList.add("toggle-dark")
      : document.body.classList.remove("toggle-dark");
  }, [dark]);

  return [dark, setDark];
};
