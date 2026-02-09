import styles from './TunnelGallery.module.css';
import Link from 'next/link';

export default function TunnelGallery() {
    return (
        <Link href="/profile" className={styles.link}>
            <div className={styles.container}>
                <div className={styles.tunnel}>
                    <div className={`${styles.wall} ${styles.wallTop}`} />
                    <div className={`${styles.wall} ${styles.wallBottom}`} />
                    <div className={`${styles.wall} ${styles.wallLeft}`} />
                    <div className={`${styles.wall} ${styles.wallRight}`} />

                    {/* Floating items simulating gallery */}
                    <div className={styles.floatingItem} style={{ transform: 'translate3d(-100px, -50px, -100px) rotateY(10deg)' }} />
                    <div className={styles.floatingItem} style={{ transform: 'translate3d(150px, 50px, -300px) rotateY(-10deg)' }} />
                    <div className={styles.floatingItem} style={{ transform: 'translate3d(-200px, 100px, -500px) rotateY(15deg)' }} />
                </div>

                <div className={styles.content}>
                    <div className={styles.bubble}>Who are you?</div>
                </div>
            </div>
        </Link>
    );
}
