'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { portfolioData } from '@/data/portfolio';
import { ArrowLeft, MapPin, Calendar, Building2, ExternalLink, CheckCircle, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InternshipDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    const experience = portfolioData.experience.find(exp => exp.id === resolvedParams.id);

    if (!experience) {
        notFound();
    }

    // Default details if missing (fallback)
    const details = experience.details || {
        role: experience.type || "Intern",
        longDescription: experience.description || "No description available.",
        technologies: ["Not specified"],
        achievements: ["Completed internship successfully"],

        images: [],
        github: undefined
    };

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.hero}>
                    <Link href="/internships" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        Back to Internships
                    </Link>

                    <div className={styles.companyConfig}>
                        <div className={styles.companyLogo}>
                            {experience.name.charAt(0)}
                        </div>
                        <div className={styles.companyInfo}>
                            <h1>{experience.name}</h1>
                            <div className={styles.role}>{details.role}</div>
                        </div>
                    </div>

                    <div className={styles.metaGrid}>
                        <div className={styles.metaItem}>
                            <Building2 size={20} className={styles.metaIcon} />
                            <div>
                                <span className={styles.metaLabel}>Company</span>
                                <div className={styles.metaValue}>{experience.name}</div>
                            </div>
                        </div>
                        <div className={styles.metaItem}>
                            <Calendar size={20} className={styles.metaIcon} />
                            <div>
                                <span className={styles.metaLabel}>Duration</span>
                                <div className={styles.metaValue}>{experience.date}</div>
                            </div>
                        </div>
                        <div className={styles.metaItem}>
                            <MapPin size={20} className={styles.metaIcon} />
                            <div>
                                <span className={styles.metaLabel}>Location</span>
                                <div className={styles.metaValue}>{experience.name}</div>
                            </div>
                        </div>
                        {details.github && (
                            <div className={styles.metaItem}>
                                <div className={styles.metaLabel} style={{ marginBottom: '4px' }}>Code</div>
                                <a
                                    href={details.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.metaValue} ${styles.githubLink}`}
                                    style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-green)', textDecoration: 'none' }}
                                >
                                    <span style={{ borderBottom: '1px solid currentColor' }}>View on GitHub</span>
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.mainContent}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Overview</h2>
                            <p className={styles.longDescription}>{details.longDescription}</p>
                        </section>


                    </div>

                    <div className={styles.sidebar}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Tech Stack</h2>
                            <div className={styles.techGrid}>
                                {details.technologies.map((tech, index) => (
                                    <span key={index} className={styles.techTag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Gallery Section */}
                <section className={styles.gallery}>
                    <h2 className={styles.sectionTitle}>Gallery</h2>
                    <div className={styles.galleryGrid}>
                        {details.images.map((img, index) => (
                            <motion.div
                                key={index}
                                className={styles.galleryItem}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedImage(img)}
                            >
                                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <Image
                                        src={img}
                                        alt={`Internship Screenshot ${index + 1}`}
                                        fill
                                        style={{ objectFit: 'contain', padding: '10px' }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={100}
                                        priority={index < 2}
                                    />
                                </div>
                            </motion.div>
                        ))}
                        {(!details.images || details.images.length === 0) && (
                            <div className={styles.galleryItem}>
                                <div className={styles.galleryPlaceholder}>
                                    <ImageIcon size={48} className={styles.placeholderIcon} />
                                    <div className={styles.galleryCaption}>No images available</div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Lightbox */}
                {selectedImage && (
                    <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
                        <div className={styles.lightboxContent}>
                            <Image
                                src={selectedImage}
                                alt="Full size"
                                fill
                                style={{ objectFit: 'contain' }}
                                quality={100}
                                sizes="100vw"
                            />
                        </div>
                    </div>
                )}


            </main>
            <Footer />
        </>
    );
}
