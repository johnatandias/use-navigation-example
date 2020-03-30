import React, { useEffect } from "react";
import css from "./Softkey.module.css";

interface SoftkeyProps {
  left?: string,
  center?: string,
  right?: string,
  onKeyLeft?: (event: KeyboardEvent) => void,
  onKeyCenter?: (event: KeyboardEvent) => void,
  onKeyRight?: (event: KeyboardEvent) => void
};

export const Softkey: React.FC<SoftkeyProps> = ({
  left,
  onKeyLeft,
  center,
  onKeyCenter,
  right,
  onKeyRight
}) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowLeft": // Debug on browser only
      case "SoftLeft":
        return onKeyLeft && onKeyLeft(event);
      case "Enter":
        return onKeyCenter && onKeyCenter(event);
      case "SoftRight":
      case "ArrowRight": // Debug on browser only
        return onKeyRight && onKeyRight(event);
      default:
        return;
    }
  };

  return (
    <div className={css.softkey}>
      <label className={css.left}>{left}</label>
      <label className={css.center}>{center}</label>
      <label className={css.right}>{right}</label>
    </div>
  );
};
