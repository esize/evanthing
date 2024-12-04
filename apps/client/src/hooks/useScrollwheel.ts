import { useEffect } from "react";

interface UseScrollwheelArgs {
  onScrollUp: () => void;
  onScrollDown: () => void;
}

export function useScrollwheel({
  onScrollUp,
  onScrollDown
}: UseScrollwheelArgs) {
  useEffect(() => {
    function scrollwheelHandler(e: globalThis.WheelEvent) {
      if (e.deltaY > 0) {
        onScrollDown();
      } else {
        onScrollUp();
      }
    }

    document.addEventListener("wheel", scrollwheelHandler);

    return () => {
      document.removeEventListener("wheel", scrollwheelHandler);
    };
  }, []);
}