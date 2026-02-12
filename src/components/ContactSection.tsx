'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.css';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

export default function ContactSection() {
    const [time, setTime] = useState('');
    const [copied, setCopied] = useState(false);
    const email = "Bhaskar.sep2003@gmail.com";

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.circle}></div>
                    <span className={styles.label}>LET&apos;S GET IN TOUCH</span>
                </div>

                <Link
                    href="https://drive.google.com/file/d/1pCWPbaEl5arn6AwxKsccQbUUfbON_sX5/view?usp=sharing"
                    target="_blank"
                    className={styles.resumeBtn}
                >
                    View Resume <span>↗</span>
                </Link>

                <motion.h2
                    className={styles.email}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <a href={`mailto:${email}`}>{email}</a>
                </motion.h2>

                <button onClick={copyToClipboard} className={styles.copyBtn}>
                    {copied ? 'Copied!' : 'Copy Email'}
                </button>

                <div className={styles.socials}>
                    <Link href="https://linkedin.com/in/bhaskar-das" target="_blank" className={styles.socialBtn}>LinkedIn</Link>
                    <Link href="https://github.com/notorious0631" target="_blank" className={styles.socialBtn}>GitHub</Link>
                    <Link href={portfolioData.personal.resume} target="_blank" className={styles.socialBtn}>Resume</Link>
                </div>

                <div className={styles.time}>{time}</div>
            </div>
        </section>
    );
}
