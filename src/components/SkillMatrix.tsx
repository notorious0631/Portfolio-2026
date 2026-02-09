'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './SkillMatrix.module.css';
import { BarChart2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function SkillMatrix() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.card} ref={containerRef}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <BarChart2 size={14} />
                    Skill Matrix
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.skillList}>
                    {portfolioData.skills.map((skill, index) => (
                        <div key={index} className={styles.skillItem}>
                            <div className={styles.skillInfo}>
                                <span className={styles.skillName}>{skill.name}</span>
                                <span className={styles.skillScore}>{skill.score}%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div
                                    className={`${styles.progressFill} ${skill.color === 'purple' ? styles.purple : ''}`}
                                    style={{
                                        width: isVisible ? `${skill.score}%` : '0%',
                                        transitionDelay: `${index * 0.1}s`
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.toolList}>
                    <div className={styles.toolHeader}>Tools & Technologies</div>
                    <div className={styles.toolGrid}>
                        {portfolioData.tools.map((tool, index) => (
                            <div
                                key={index}
                                className={styles.toolItem}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.matrixVisual}>
                {Array.from({ length: 40 }).map((_, i) => (
                    <div
                        key={i}
                        className={styles.bar}
                        style={{
                            height: isVisible ? `${Math.random() * 100}%` : '0%',
                            transitionDelay: `${i * 0.02}s`,
                            backgroundColor: i > 10 && i < 25 ? 'var(--accent-green)' : i > 25 ? 'var(--accent-pink)' : undefined
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
