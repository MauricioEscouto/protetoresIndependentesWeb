import Head from 'next/head';
import Header from '@/components/shared/header.js'
import Navegacao from './navegacao/index.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Protetores Independentes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Navegacao/>
    </>
  )
}