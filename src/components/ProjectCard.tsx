'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    category: string;
    company?: string;
    imageColor?: string;
    featured?: boolean;
    size?: 'large' | 'medium' | 'small';
    image?: string;
}

export default function ProjectCard({
    title,
    category,
    company = "Bolster",
    imageColor,
    featured,
    size = 'medium',
    image
}: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateXValue = (mouseY / (rect.height / 2)) * -8;
        const rotateYValue = (mouseX / (rect.width / 2)) * 8;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    const sizeClass = size === 'large' ? styles.cardLarge : size === 'small' ? styles.cardSmall : '';

    return (
        <motion.div
            ref={cardRef}
            className={`${styles.card} ${featured ? styles.featured : ''} ${sizeClass}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: isHovered ? 'none' : 'transform 0.5s ease'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
        >
            {/* Gradient Border Effect */}
            <div className={`${styles.gradientBorder} ${isHovered ? styles.active : ''}`} />

            {/* Header with category and company */}
            <div className={styles.cardHeader}>
                <div className={styles.categoryBadge}>
                    <span className={styles.categoryDot} style={{ background: imageColor || '#00ff9d' }} />
                    {category}
                </div>
                <div className={styles.companyBadge}>
                    <span className={styles.companyIcon} />
                    {company}
                </div>
            </div>

            {/* Image Container */}
            <div className={styles.imageContainer}>
                <div
                    className={styles.imagePlaceholder}
                    style={{
                        background: imageColor
                            ? `linear-gradient(135deg, ${imageColor}22, ${imageColor}44)`
                            : undefined
                    }}
                >
                    {/* Simulated dashboard/app preview */}
                    <div className={styles.mockupContainer}>
                        {category === 'Dashboard' && (
                            <div className={styles.dashboardMockup}>
                                <div className={styles.mockupHeader}>
                                    <div className={styles.mockupDots}>
                                        <span style={{ background: '#ff5f56' }} />
                                        <span style={{ background: '#ffbd2e' }} />
                                        <span style={{ background: '#27c93f' }} />
                                    </div>
                                </div>
                                <div className={styles.mockupContent}>
                                    <div className={styles.mockupSidebar} />
                                    <div className={styles.mockupMain}>
                                        <div className={styles.mockupChart} style={{ background: imageColor || '#00ff9d' }} />
                                        <div className={styles.mockupStats}>
                                            <div className={styles.mockupStat} />
                                            <div className={styles.mockupStat} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {category === 'App' && (
                            <div className={styles.phoneMockup}>
                                <div className={styles.phoneNotch} />
                                <div className={styles.phoneScreen} style={{ background: `${imageColor}33` || '#ff005533' }}>
                                    <div className={styles.phoneText}>Where are you now?</div>
                                </div>
                            </div>
                        )}
                        {category === 'Website' && (
                            <div className={styles.laptopMockup}>
                                <div className={styles.laptopScreen} style={{ background: `${imageColor}33` || '#bd00ff33' }}>
                                    <div className={styles.laptopContent} />
                                </div>
                                <div className={styles.laptopBase} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Shine effect */}
                <div className={`${styles.shine} ${isHovered ? styles.active : ''}`} />
            </div>

            {/* Footer with title and discover button */}
            <div className={styles.cardFooter}>
                <h3 className={styles.title}>{title}</h3>
                <button className={styles.discoverBtn}>
                    <span>Discover</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                </button>
            </div>
        </motion.div>
    );
}
