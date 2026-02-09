'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import styles from './page.module.css';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Header */}
                    <header className={styles.header}>
                        <h1 className={styles.title}>Selected Works</h1>
                        <p className={styles.subtitle}>
                            A collection of projects exploring AI, Design, and Development.
                        </p>
                    </header>

                    {/* Project List */}
                    <div className={styles.projectList}>
                        {projects.map((project, index) => (
                            <Link href={`/projects/${project.id}`} key={index} className={styles.projectLink}>
                                <article className={styles.row}>
                                    <div className={styles.leftCol}>
                                        <span className={styles.id}>
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <h2 className={styles.projectName}>{project.title}</h2>
                                    </div>

                                    <div className={styles.rightCol}>
                                        <div className={styles.categoryTag}>{project.category}</div>
                                        <span className={styles.year}>2024</span>
                                        <ArrowUpRight size={20} className={styles.arrow} />
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
