'use client';

import { motion } from 'framer-motion';
import styles from './ProjectsShowcase.module.css';
import Link from 'next/link';
import { Folder, ArrowRight } from 'lucide-react';

export default function ProjectsShowcase() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Link href="/projects" className={styles.projectTile}>
                    <motion.div
                        className={styles.tileContent}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className={styles.tileIcon}>
                            <Folder size={48} />
                        </div>
                        <div className={styles.tileText}>
                            <h2 className={styles.tileTitle}>Project Works</h2>
                            <p className={styles.tileDescription}>Explore my portfolio of projects</p>
                        </div>
                        <div className={styles.tileArrow}>
                            <ArrowRight size={24} />
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}
