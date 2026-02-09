'use client';

import { motion } from 'framer-motion';
import styles from './AchievementsSection.module.css';
import { portfolioData } from '@/data/portfolio';

export default function AchievementsSection() {
    // Helper to format date if needed, or just use raw string
    // Assuming portfolioData has achievements structure or we map from experience
    // For now using the static data structure but mapping to new design

    const achievements = [
        {
            date: 'Oct 2025',
            title: 'Second Runner Up',
            organization: 'Design Research Poster Competition',
            location: 'MIT-ADT University'
        },
        {
            date: 'June 2025',
            title: 'Best Thesis Award',
            organization: 'Dept of Design',
            location: 'IIT Guwahati'
        },
        {
            date: 'May 2025',
            title: 'Winner',
            organization: 'Advertalyst Design Challenge',
            location: ''
        },
        // We can add more from portfolioData if available
    ];

    // Let's use real data from portfolioData if possible, or keep this structure
    // The user said "with my information", so I should verify what data is in portfolioData
    // and map it to this structure.

    // Check portfolioData structure for achievements
    const { experience } = portfolioData;
    // Extract achievements from experience details
    const allAchievements = experience.flatMap(exp =>
        exp.details?.achievements?.map(ach => ({
            date: exp.date.split(' - ')[1] || exp.date, // Approximate date
            title: ach,
            organization: exp.name,
            location: ''
        })) || []
    ).slice(0, 3); // Take top 3 for now

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.sectionTitle}>Achievements</h2>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.grid}>
                        {allAchievements.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <span className={styles.date}>{item.date}</span>
                                <h3 className={styles.role}>{item.title}</h3>
                                <p className={styles.company}>{item.organization}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
