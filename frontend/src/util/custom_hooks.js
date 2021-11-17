import { useEffect } from 'react';

export const useListenForModalClose = (closeModal) => {
  useEffect(() => {
    const checkForEscape = (e) => {
      if (e.keyCode === 27) {
        e.stopImmediatePropagation();
        closeModal();
      }
    };

    document.addEventListener("keydown", checkForEscape, true);
    return () => document.removeEventListener("keydown", checkForEscape, true);
  }, [closeModal]);
}
