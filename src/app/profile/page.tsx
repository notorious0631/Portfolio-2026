'use client';

import Header from '@/components/Header';
import styles from './page.module.css';
import { portfolioData } from '@/data/portfolio';
import { CheckCircle, Linkedin, Github, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export default function Profile() {
    const { personal, skills, experience, education } = portfolioData;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Cover Image */}
                    {personal.coverImage && (
                        <div className={styles.coverImage}>
                            <Image
                                src={personal.coverImage}
                                alt="Cover"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    )}

                    {/* Header Section */}
                    <div className={styles.profileHeader}>
                        <div className={styles.avatarWrapper}>
                            <div className={styles.avatar}>
                                <Image
                                    src={personal.profileImage}
                                    alt={personal.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </div>

                        <div className={styles.headerInfo}>
                            <div className={styles.nameRow}>
                                <h1 className={styles.name}>{personal.name}</h1>
                                <div className={styles.verifiedBadge}>
                                    <CheckCircle size={16} fill="#0a66c2" color="white" />
                                </div>
                                <span className={styles.pronouns}>(He/Him)</span>
                            </div>

                            <p className={styles.headline}>
                                Ku2022 • CSE • AI/ML • GenAI • LLMs
                            </p>

                            <p className={styles.location}>
                                {personal.location}
                            </p>

                            <div className={styles.socialLinks}>
                                {personal.linkedin && (
                                    <Link
                                        href={personal.linkedin}
                                        target="_blank"
                                        className={styles.socialButton}
                                    >
                                        <Linkedin size={20} />
                                        LinkedIn
                                    </Link>
                                )}
                                {personal.github && (
                                    <Link
                                        href={personal.github}
                                        target="_blank"
                                        className={styles.socialButton}
                                    >
                                        <Github size={20} />
                                        GitHub
                                    </Link>
                                )}
                                {personal.resume && (
                                    <Link
                                        href={personal.resume}
                                        target="_blank"
                                        className={styles.primaryButton}
                                    >
                                        <FileText size={20} />
                                        Resume
                                    </Link>
                                )}
                            </div>
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
