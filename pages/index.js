import Head from 'next/head';
import Navegacao from '../src/components/navegacao/navegacao.js';
import styles from '../src/styles/home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Protetores Independentes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navegacao/>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </>
  )
}