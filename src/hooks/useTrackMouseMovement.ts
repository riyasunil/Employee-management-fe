import { useEffect, useState } from "react";

type Position = {
  x: number | null;
  y: number | null;
};

const useTrackMouseMovement = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: null, y : null });

  useEffect(() => {
    const updateMousePosition = (e : MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    console.log(mousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useTrackMouseMovement;
