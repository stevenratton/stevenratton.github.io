import React, { useEffect, useRef } from "react";
import './cursor.scss';

const Cursor = () => {
  const cursorRef = useRef(null); // Référence au div du curseur

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove); // Nettoyage
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;
