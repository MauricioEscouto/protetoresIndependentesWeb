import React from 'react';
import isMobile from '@/components/shared/mobileDetect.js';
import Head from 'next/head';
import Header from '@/components/shared/header.js'
import Navegacao from './navegacao/index.js';
import NavegacaoMobile from './navegacao/index_mobile.js';

export default function Home() {
  const ComponenteNavegacao = isMobile() ? NavegacaoMobile : Navegacao;

  return (
    <>
      <Head>
        <title>Protetores Independentes</title>
      </Head>

      <Header/>
      <ComponenteNavegacao/>
    </>
  )
}