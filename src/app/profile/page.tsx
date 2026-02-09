'use client';

import Header from '@/components/Header';
import styles from './page.module.css';
import { portfolioData } from '@/data/portfolio';
import { Calendar, Download } from 'lucide-react';
import Link from 'next/link';

export default function Profile() {
    const { personal, skills, experience, education } = portfolioData;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Header Section */}
                    <div className={styles.profileHeader}>
                        <div className={styles.avatar}>
                            {personal.name.charAt(0)}
                        </div>
                        <div className={styles.headerInfo}>
                            <h1 className={styles.name}>{personal.name}</h1>
                            <p className={styles.role}>{personal.role}</p>
                            <p className={styles.bio}>
                                Computer Science Engineer passionate about building intelligent systems.
                                Specialized in AI/ML, Data Analytics, and Full Stack Development.
                                Based in {personal.location}.
                            </p>
                            <Link
                                href="https://drive.google.com/file/d/1pCWPbaEl5arn6AwxKsccQbUUfbON_sX5/view?usp=sharing"
                                target="_blank"
                                className={styles.resumeLink}
                            >
                                <Download size={16} />
                                Download Resume
                            </Link>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        {/* Skills Column */}
                        <div className={styles.column}>
                            <h2 className={styles.sectionTitle}>Technical Skills</h2>
                            <div className={styles.skillsGrid}>
                                {skills.map((skill, index) => (
                                    <span key={index} className={styles.skillTag}>{skill.name}</span>
                                ))}
                            </div>

                            <h2 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Tools</h2>
                            <div className={styles.toolsGrid}>
                                {portfolioData.tools?.map((tool, index) => (
                                    <span key={index} className={styles.toolTag}>{tool}</span>
                                ))}
                            </div>
                        </div>

                        {/* Experience Column */}
                        <div className={styles.column}>
                            <h2 className={styles.sectionTitle}>Experience</h2>
                            <div className={styles.timeline}>
                                {experience.map((exp, index) => (
                                    <div key={index} className={styles.timelineItem}>
                                        <span className={styles.date}>{exp.date}</span>
                                        <h3 className={styles.timelineRole}>{exp.type}</h3>
                                        <p className={styles.timelineCompany}>{exp.name}</p>
                                        <p className={styles.description}>{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
