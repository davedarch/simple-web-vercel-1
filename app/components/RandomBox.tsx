"use client";

import { useState, useEffect } from 'react';

const RandomBox = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  const generateRandomPosition = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    return { x, y };
  };

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setPosition(generateRandomPosition());
      setIsVisible(true);
    }, 500);
  };

  useEffect(() => {
    setPosition(generateRandomPosition());
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="absolute w-20 h-20 bg-blue-500 cursor-pointer"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onClick={handleClick}
    />
  );
};

export default RandomBox;
