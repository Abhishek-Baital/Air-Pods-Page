import React, { useEffect, useState } from 'react';
import './AnimationComponent.css';

function AnimationComponent() {
  const [frameCount] = useState(148);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  const currentFrame = (index) => {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`;
  };

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const updateImage = (index) => {
    const canvas = document.getElementById('hero-lightpass');
    const context = canvas.getContext('2d');
    const img = new Image();
    img.src = currentFrame(index);

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      // Define a specific range for the image scroll
    const imageScrollRange = 0.3; 

    // Calculate the maximum scroll position for the image
    const maxImageScroll = maxScrollTop * imageScrollRange;

    // Determine the frame index based on scroll position
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollTop / maxImageScroll * frameCount)
    );

      // Hide the text when you reach the end of the image
    if (frameIndex === frameCount - 1) {
      setShowText(false);
    } else {
      setShowText(true);
    }

      setCurrentIndex(frameIndex + 1);
    };

    window.addEventListener('scroll', handleScroll);
    preloadImages();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );

  useEffect(() => {
    updateImage(currentIndex);
  }, );

  return (
    <div>
      <canvas id="hero-lightpass" width={1158} height={770}></canvas>
      <div className={`text-overlay ${showText ? '' : 'hidden'}`}>AirPods Pro</div>
    </div>
  );
}

export default AnimationComponent;
