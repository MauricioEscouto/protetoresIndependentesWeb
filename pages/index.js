import { isMobile } from 'react-device-detect';
import Head from 'next/head';
import Header from '@/components/shared/header.js'
import Navegacao from './navegacao/index.js';
import NavegacaoMobile from './navegacao/index_mobile.js';

export default function Home() {
  var isMobile = true;
  const ComponenteNavegacao = isMobile ? NavegacaoMobile : Navegacao;

  return (
    <>
      <Head>
        <title>Protetores Independentes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <ComponenteNavegacao/>
    </>
  )
}