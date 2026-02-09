'use client';

import { motion } from 'framer-motion';
import styles from './EducationSection.module.css';
import Link from 'next/link';

export default function EducationSection() {
    const education = [
        {
            id: 'kaziranga-university',
            date: '2021 - 2025',
            degree: 'Bachelor of Technology',
            field: 'Computer Science Engineering',
            institution: 'The Assam Kaziranga University'
        },
        {
            id: 'kendriya-vidyalaya',
            date: '2019 - 2021',
            degree: 'Higher Secondary',
            field: 'Science',
            institution: 'Kendriya Vidyalaya'
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.grid}>
                        {education.map((edu, index) => (
                            <Link href={`/education/${edu.id}`} key={index} className={styles.cardLink}>
                                <motion.div
                                    className={styles.card}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <span className={styles.date}>{edu.date}</span>
                                    <h3 className={styles.role}>{edu.degree}</h3>
                                    <p className={styles.company}>{edu.institution}</p>
                                    <p className={styles.details}>{edu.field}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
