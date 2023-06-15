import Head from 'next/head';
import Navegacao from './navegacao/index.js';
import style from '@/styles/home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Protetores Independentes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navegacao/>
    </>
  )
}