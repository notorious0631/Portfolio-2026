import styles from './ParticleBackground.module.css';

export default function ParticleBackground() {
    return (
        <div className={styles.particleContainer}>
            <div className={styles.particle} />
            <div className={styles.particle} />
            <div className={styles.particle} />
            <div className={styles.particle} />
            <div className={styles.particle} />
            <div className={styles.particle} />
        </div>
    );
}
