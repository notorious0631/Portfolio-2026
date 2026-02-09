'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { portfolioData } from '@/data/portfolio';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const TypingText = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <span>
            {displayedText}
            <span className={styles.cursor}>|</span>
        </span>
    );
};

export default function Hero() {
    const { personal, experience } = portfolioData;

    // Calculate years of experience
    const yearsExp = experience.length;

    return (
        <section className={styles.hero}>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={styles.taglineWrapper}>
                    <motion.p
                        className={styles.tagline}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ fontFamily: 'monospace' }}
                    >
                        <TypingText text="let developer = user.current(); > The terminal is open. Type nothing. Just explore." />
                    </motion.p>
                </div>
                <Link href="https://drive.google.com/file/d/1pCWPbaEl5arn6AwxKsccQbUUfbON_sX5/view?usp=sharing" target="_blank" className={styles.resumeBtn}>
                    View Resume <span>↗</span>
                </Link>
            </div>

            {/* Floating Tags - Cascading Layout */}
            <div className={styles.tagsSection}>
                <motion.div
                    className={styles.tagsColumn}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={`${styles.tag} ${styles.tagWithDot}`}>
                        <span>Guwahati India</span>
                        <span className={styles.greenDot}></span>
                    </div>
                    <div className={styles.tag}>
                        <span>Python ↔ Automation</span>
                    </div>
                    <div className={styles.tagWithArrow}>
                        <span className={styles.tag}>CSE, B.Tech Student</span>
                        <div className={styles.arrowCircle}>↓</div>
                    </div>
                </motion.div>

                {/* Badges Row */}
                <motion.div
                    className={styles.badgesRow}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className={styles.starBadge}>✱</div>
                    <div className={styles.badge}>AI / ML Engineer</div>
                    <div className={styles.avatarBadge}>
                        <div className={styles.avatar}>B</div>
                    </div>
                    <div className={styles.badge}>{yearsExp}+ Years Exp</div>
                    <div className={styles.dotIndicator}></div>
                </motion.div>
            </div>

            {/* Giant Name */}
            <motion.h1
                className={styles.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {personal.name}
            </motion.h1>
        </section>
    );
}
