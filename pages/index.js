import Head from 'next/head';
import Navegacao from '@/components/navegacao/navegacao.js';
import style from '@/styles/home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Protetores Independentes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>
        <Navegacao/>
      </main>
    </>
  )
}