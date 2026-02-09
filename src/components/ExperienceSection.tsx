'use client';

import { motion } from 'framer-motion';
import styles from './ExperienceSection.module.css';
import { portfolioData } from '@/data/portfolio';
import Link from 'next/link';

export default function ExperienceSection() {
    const { experience } = portfolioData;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.sectionTitle}>Experiences</h2>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.grid}>
                        {experience.map((exp, index) => (
                            <Link href={`/internships/${exp.id}`} key={index} className={styles.cardLink}>
                                <motion.div
                                    className={styles.card}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <span className={styles.date}>{exp.date}</span>
                                    <h3 className={styles.role}>{exp.details?.role || exp.type}</h3>
                                    <p className={styles.company}>{exp.name}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
