import React, { useState, useEffect } from "react";

const TypewriterText = () => {
  const words = ["Excellence", "Agility", "Quality", "Automation"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          // Deleting characters
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          // Typing characters
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            // Pause before deleting
            setIsPaused(true);
          }
        }
      },
      isDeleting ? 100 : isPaused ? 2000 : 150
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words]);

  return (
    <span className="relative text-[#505cfd]">
      {currentText}
      <span className="animate-pulse text-[#505cfd] font-light">|</span>
    </span>
  );
};

export default TypewriterText;
