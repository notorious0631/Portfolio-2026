'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const trailerSpringConfig = { damping: 20, stiffness: 200 };
    const trailerXSpring = useSpring(cursorX, trailerSpringConfig);
    const trailerYSpring = useSpring(cursorY, trailerSpringConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY - 8);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className={styles.cursor}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            />
            <motion.div
                className={`${styles.trailer} ${isHovering ? styles.hover : ''}`}
                style={{
                    translateX: trailerXSpring,
                    translateY: trailerYSpring,
                    x: -12, // Offset to center trailer (40px/2 - 16px/2 = 12px difference from cursor center? No, cursor is 16, trailer is 40. Center is same.)
                    // Actually, cursorX is top-left. 
                    // Cursor size 16. Center is +8.
                    // Trailer size 40. Center is +20.
                    // We want centers to align.
                    // Cursor pos is (x, y). Center is (x+8, y+8).
                    // Trailer pos is (x', y'). Center is (x'+20, y'+20).
                    // We want x+8 = x'+20 => x' = x - 12.
                }}
            />
        </>
    );
}
