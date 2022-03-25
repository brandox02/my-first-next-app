import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {'Nextjs help you to have a production app at the first moment'}
        <button>Click me to fetch own api</button>
      </main>
    </div>
  );
}
