import { useEffect, useRef } from 'react';

function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element: HTMLElement | Window = window,
) {
  // Create a ref that stores handler
  const savedHandler = useRef<(event: WindowEventMap[K]) => void>();
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      // Create event listener that calls handler function stored in ref
      const eventListener = (event: WindowEventMap[K]) => {
        if (savedHandler.current) {
          savedHandler.current(event);
        }
      };

      // Add event listener
      element.addEventListener(eventName, eventListener as EventListener);
      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener as EventListener);
      };
    },
    [eventName, element], // Re-run if eventName or element changes
  );
}

export { useEventListener };
