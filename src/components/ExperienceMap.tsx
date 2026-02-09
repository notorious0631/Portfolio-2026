'use client';

import styles from './ExperienceMap.module.css';
import { Globe } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useState } from 'react';

export default function ExperienceMap() {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const handleClick = () => {
        setIsEnlarged(!isEnlarged);
    };

    return (
        <>
            {isEnlarged && <div className={styles.overlay} onClick={handleClick} />}
            <div
                className={`${styles.card} ${isEnlarged ? styles.enlarged : ''}`}
                onClick={handleClick}
            >
                <div className={styles.header}>
                    <Globe size={14} />
                    <span className={styles.title}>My Experience</span>
                </div>

                <div className={styles.mapContainer}>
                    {/* Abstract Dot Map */}
                    <svg className={styles.mapSvg} viewBox="0 0 800 400">
                        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="#333" />
                        </pattern>
                        <rect width="800" height="400" fill="url(#dots)" />

                        {/* Connection Line */}
                        <path
                            d="M 200 200 Q 400 100 600 250"
                            className={styles.pathLine}
                        />
                    </svg>
                </div>

                {/* Locations */}
                {portfolioData.experience.map((exp, index) => (
                    <div key={index} className={styles.location} style={{ top: exp.y, left: exp.x }}>
                        <div className={styles.locationDot} style={index === 1 ? { background: 'var(--accent-purple)', boxShadow: '0 0 10px var(--accent-purple)' } : {}} />
                        <span>{exp.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
}
