import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ImageTextBlock.css'; // Optional CSS

const ImgText = ({ img, title}) => {
   const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  
  // Animate image Y position from 0px to -30px
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div ref={ref} className="image-overlay-container">
      <motion.img 
        src={img}
        alt={title}
        className="background-image"
        style={{ y }}
      />
      <div className="overlay-text">
        <h2>{title}</h2>
    
      </div>
    </div>
);
};

export default ImgText;
