import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/shared/header.js'
import Navegacao from './navegacao/index.js';
import NavegacaoMobile from './navegacao/index_mobile.js';
import isMobile from '@/components/teste.js';



export default function Home() {
  const mobile = isMobile();
  const ComponenteNavegacao = isMobile ? NavegacaoMobile : Navegacao;

  return (
    <>
      <Head>
        <title>Protetores Independentes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <ComponenteNavegacao/>
      <p>{mobile ? "teste" : ""}</p>
    </>
  )
}