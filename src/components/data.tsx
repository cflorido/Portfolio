import React, { useState, useEffect, useRef } from 'react';
import './Data.css';

const Data: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const ages = Array.from({ length: 22 }, (_, i) => i.toString().padStart(2, '0'));
  const nationalities = ['American', 'Brazilian', 'Mexican', 'Argentine', 'Chilean', 'Peruvian', 'Venezuelan', 'Colombian'];
  const englishLevels = ['Basic', 'Pre-Intermediate', 'Intermediate', 'Upper Intermediate', 'Fluent'];

  const [_currentAge, _setCurrentAge] = useState('21');
  const [_currentNationality, _setCurrentNationality] = useState('Colombian');
  const [_currentLevel, _setCurrentLevel] = useState('Fluent');

  const [ageSlotPosition, setAgeSlotPosition] = useState(0);
  const [nationalitySlotPosition, setNationalitySlotPosition] = useState(0);
  const [levelSlotPosition, setLevelSlotPosition] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startSlotMachineAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const createSlotMachineAnimation = (
    items: string[], 
    finalValue: string,
    setPosition: (pos: number) => void,
    duration: number
  ) => {
    const finalIndex = items.indexOf(finalValue);
    const extendedItems = [...items, ...items, ...items, ...items, ...items];
    const finalPosition = (extendedItems.length - items.length + finalIndex) * -70;
    
    let startTime: number;
    let startPosition = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;

      if (progress < 1) {
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentPosition = startPosition + (finalPosition - startPosition) * easeOut;
        setPosition(currentPosition);
        requestAnimationFrame(animate);
      } else {
        setPosition(finalPosition);
      }
    };

    requestAnimationFrame(animate);
  };

  const startSlotMachineAnimation = () => {
    setIsAnimating(true);

    createSlotMachineAnimation(ages, '21', setAgeSlotPosition, 2000);
    
    setTimeout(() => {
      createSlotMachineAnimation(nationalities, 'Colombian', setNationalitySlotPosition, 2500);
    }, 300);
    
    setTimeout(() => {
      createSlotMachineAnimation(englishLevels, 'Fluent', setLevelSlotPosition, 3000);
    }, 600);

    setTimeout(() => {
      setIsAnimating(false);
    }, 3500);
  };

  const renderSlotItems = (items: string[], position: number, suffix: string = '') => {
    const extendedItems = [...items, ...items, ...items, ...items, ...items];
    
    return (
      <div 
        className="slot-reel" 
        style={{ 
          transform: `translateY(${position}px)`,
          transition: isAnimating ? 'none' : 'transform 0.3s ease'
        }}
      >
        {extendedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="slot-item">
            {item}{suffix}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* SVG con ondas mejoradas en parte superior e inferior */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="wavy-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0.08 
                     C0.1,0.02 0.1,0.14 0.2,0.08
                     C0.3,0.02 0.3,0.14 0.4,0.08
                     C0.5,0.02 0.5,0.14 0.6,0.08
                     C0.7,0.02 0.7,0.14 0.8,0.08
                     C0.9,0.02 0.9,0.14 1,0.08
                     V0.92
                     C0.9,0.98 0.9,0.86 0.8,0.92
                     C0.7,0.98 0.7,0.86 0.6,0.92
                     C0.5,0.98 0.5,0.86 0.4,0.92
                     C0.3,0.98 0.3,0.86 0.2,0.92
                     C0.1,0.98 0.1,0.86 0,0.92
                     Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="Maindata-container" ref={containerRef}>
        <div className="data-container">


          <div className="data-item">
            <h3 className="data-label">My Age</h3>
            <div className="data-value-container slot-container">
              {renderSlotItems(ages, ageSlotPosition, ' years old')}
            </div>
          </div>
                
          <div className="data-item">
            <h3 className="data-label">My nationality</h3>
            <div className="data-value-container slot-container">
              {renderSlotItems(nationalities, nationalitySlotPosition)}
            </div>
          </div>
                
          <div className="data-item">
            <h3 className="data-label">My English Level</h3>
            <div className="data-value-container slot-container">
              {renderSlotItems(englishLevels, levelSlotPosition)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;