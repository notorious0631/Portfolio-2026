'use client';

import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return (
            <button className={styles.toggle} aria-label="Toggle theme">
                <div className={styles.track}>
                    <div className={styles.thumb}>
                        <Moon size={14} />
                    </div>
                </div>
            </button>
        );
    }

    return (
        <button
            className={styles.toggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <div className={styles.track}>
                <div className={`${styles.thumb} ${theme === 'light' ? styles.light : ''}`}>
                    {theme === 'dark' ? (
                        <Moon size={14} />
                    ) : (
                        <Sun size={14} />
                    )}
                </div>
            </div>
        </button>
    );
}
