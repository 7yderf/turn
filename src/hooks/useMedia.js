import { useEffect, useState } from "react";

export default function useMedia(mediaQuery = null) {
  const [device, setDevice] = useState(false);
  const media = matchMedia(mediaQuery ?? "(min-width: 0px)");

  useEffect(() => {
    const listener = (event) => {
      setDevice(event.matches);
    };

    setDevice(media.matches);

    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [media]);

  return device;
}
