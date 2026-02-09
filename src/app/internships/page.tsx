import Link from 'next/link';
import Header from '@/components/Header';
import styles from './page.module.css';
import { portfolioData } from '@/data/portfolio';

export default function Internships() {
    const { experience } = portfolioData;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Internships</h1>
                </section>

                <div className={styles.container}>
                    <div className={styles.grid}>
                        {experience.map((exp, index) => (
                            <Link href={`/internships/${exp.id}`} key={index} className={styles.linkWrapper}>
                                <article className={styles.row}>
                                    <div className={styles.dateCol}>
                                        <span className={styles.date}>{exp.date}</span>
                                    </div>
                                    <div className={styles.roleCol}>
                                        <h2 className={styles.role}>{exp.details?.role || exp.type}</h2>
                                    </div>
                                    <div className={styles.companyCol}>
                                        <span className={styles.company}>{exp.name}</span>
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
