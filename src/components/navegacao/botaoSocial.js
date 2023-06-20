import React from 'react';
import Image from 'next/image';
import styleDesktop from '@/styles/navegacao/botaoSocial.module.css';
import styleMobile from '@/styles/navegacao/botaoSocial_mobile.module.css';

const isMobile = true;
let style = isMobile ? styleMobile : styleDesktop;

const BotaoSocial = ({ href, src, alt, title }) => {
  if (href === "/") {
    return (
      <div className={style.divBotoes}>
        <span className={style.botaoLinks}>
          <DivBotao 
            src= {src}
            alt= {alt}
            title= {title}
          />
        </span>
      </div>
    );
  }

  else {
    return (
      <div className={style.divBotoes}>
        <a href={href} target="_blank" className={style.botaoLinks}>
          <DivBotao 
            src= {src}
            alt= {alt}
            title= {title}
          />
        </a>
      </div>
    );
  }
};

var DivBotao = ({src, alt, title}) => {
  const isLogoMaior = title === 'Facebook' ? style.logoBotaoImagemMaior : style.logosBotoes;
  const isBotaoPix = title.includes('Pix') ? style.divBotaoPix : style.divBotao;
  
  return (
    <div className={`${isBotaoPix}`}>
      <Image
        className={`${isLogoMaior}`}
        src={src}
        alt={alt}
        width={45}
        height={30}
        priority
      />
      <p className={style.tituloBotoes}>{title}</p>
    </div>
  );
}

export default BotaoSocial;