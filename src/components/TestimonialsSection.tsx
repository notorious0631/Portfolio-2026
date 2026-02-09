'use client';

import { motion } from 'framer-motion';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span className={styles.sectionLabel}>Little things that made my day</span>

                <motion.div
                    className={styles.testimonialContent}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <blockquote className={styles.quote}>
                        "I believe in building technology that makes a difference. Every project
                        is an opportunity to learn, grow, and create something meaningful.
                        My passion lies in the intersection of AI, automation, and
                        human-centered design."
                    </blockquote>

                    <div className={styles.attribution}>
                        <span className={styles.author}>— Bhaskar Das</span>
                        <span className={styles.role}>Computer Science Engineer</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
