import React from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BotaoSocial from './botaoSocial';
import style from '@/styles/navegacao/navegacao.module.css'

function Navegacao() {
return (
    <section className={style.containerNavegacao}>
        <div className={style.divLogo}>
            <Image
                className={style.logo}
                src="/img/navegacao/logo.svg"
                alt="Protetores Independentes Logo"
                width={45}
                height={30}
                priority
            />
        </div>

        <div className={style.divTitulo}>
            <h1 className={style.titulo}>Protetores Independentes</h1>
            <p className={style.descricaoOng}>Nosso grupo está comprometido em ajudar animais de rua, e nossos voluntários trabalham 
                incansavelmente para resgatá-los, tratá-los e cuidar deles com amor e dedicação. 
                Junte-se a nós e faça a diferença na vida desses animais vulneráveis.
            </p>
        </div>

        <div className={style.containerBotoes}>
            <BotaoSocial
                href="https://www.instagram.com/somosprotetoresindependentes/"
                src="/img/navegacao/instagram.svg"
                alt="Logo do Instagram"
                title="Instagram"
            />

            <BotaoSocial
                href="https://www.instagram.com/somosprotetoresindependentes/"
                src="/img/navegacao/facebook.svg"
                alt="Logo do Facebook"
                title="Facebook"
            />

            <BotaoSocial
                href="https://www.instagram.com/somosprotetoresindependentes/"
                src="/img/navegacao/whatsapp.svg"
                alt="Logo do Whatsapp"
                title="Grupo WhatsApp"
            />

            <BotaoSocial
                href="https://www.instagram.com/somosprotetoresindependentes/"
                src="/img/navegacao/pix.svg"
                alt="Logo do Pix"
                title="Chave Pix: teste"
            />

            <BotaoSocial
                href="https://www.instagram.com/somosprotetoresindependentes/"
                src="/img/navegacao/dinheiro.svg"
                alt="Logo do Vaquinha"
                title="Vaquinha"
            />
        </div>

        <div>
            <ComponenteEstiloEsquerdo/>
        </div>

        <div>
            <ComponenteEstiloDireito/>
        </div>

        <div className={style.divDireitosAutorais}>
            <p>Copyright © 2022 Protetores Independentes.</p>
        </div>  
    </section>
);
}

function ComponenteEstiloEsquerdo() {
    const imagemRef = useRef(null);
    const [topOffset, setTopOffset] = useState(0);
    const [leftOffset, setLeftOffset] = useState(0);
  
    useLayoutEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        let newLeft = -150 - (1075 - screenWidth) / 10;
  
        newLeft = screenWidth < 1075 ? newLeft : 0;
  
        setLeftOffset(newLeft);
  
        const screenHeight = document.documentElement.scrollHeight;
        const imageHeight = imagemRef.current.offsetHeight;
        const newTop = screenHeight - imageHeight;
  
        setTopOffset(newTop);
      };
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <img
        ref={imagemRef}
        src="/img/navegacao/estiloLateral-esquerdo.svg"
        alt="Descrição da imagem"
        style={{
          position: 'absolute',
          left: `${leftOffset}px`,
          top: `${topOffset}px`,
          width: '30rem',
        }}
      />
    );
  }
  

function ComponenteEstiloDireito() {
    const imagemRef = useRef(null);
    const [leftOffset, setLeftOffset] = useState(0);
  
    useLayoutEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        var newLeft = -170 - (1075 - screenWidth) / 10;
        
        newLeft = screenWidth < 1075 ? newLeft : newLeft;

        setLeftOffset(newLeft);
      };
  
      window.addEventListener('resize', handleResize);
  
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <img
        ref={imagemRef}
        src="/img/navegacao/estiloLateral-direito.svg"
        alt="Descrição da imagem"
        style={{
          position: 'absolute',
          right: `${leftOffset}px`,
          top: '1.5rem',
          width: '18rem',
        }}
      />
    );
}

export default Navegacao;