'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { portfolioData } from '@/data/portfolio';
import { ArrowLeft, ExternalLink, Github, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);

    const project = portfolioData.projects.find(p => p.id === resolvedParams.id);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.hero}>
                    <Link href="/projects" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        Back to Projects
                    </Link>

                    <motion.div
                        className={styles.headerContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.projectIcon} style={{ background: project.color }}>
                            <Folder size={32} />
                        </div>
                        <div className={styles.projectInfo}>
                            <h1 className={styles.title}>{project.title}</h1>
                            <div className={styles.meta}>
                                <span className={styles.category}>{project.category}</span>
                                <span className={styles.separator}>•</span>
                                <span className={styles.type}>{project.type}</span>
                                <span className={styles.separator}>•</span>
                                <span className={styles.company}>{project.company}</span>
                            </div>
                        </div>
                    </motion.div>

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.githubBtn}
                        >
                            <Github size={18} />
                            <span>View on GitHub</span>
                            <ExternalLink size={14} />
                        </a>
                    )}
                </div>

                <div className={styles.content}>
                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p className={styles.description}>{project.longDescription || project.description}</p>
                    </motion.section>

                    {project.technologies && (
                        <motion.section
                            className={styles.section}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className={styles.sectionTitle}>Technologies Used</h2>
                            <div className={styles.techGrid}>
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className={styles.techTag}
                                        style={{ borderColor: project.color }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.section>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
