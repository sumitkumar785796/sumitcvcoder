"use client";

import React, { useState, useEffect } from "react";

const words = ["Web Designer", "Web Developer", "FrontEnd Developer", "BackEnd Developer"];

const TypingEffect = () => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const nextStep = () => {
            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            } else {
                setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
            }
        };

        const timer = setTimeout(nextStep, typingSpeed);
        setText(currentWord.substring(0, charIndex));

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex]);

    return <h3 style={{color:"white"}} >{text} <span className="blinking-cursor">|</span></h3>;
};

export default TypingEffect;
