import React from 'react';
import Image from 'next/image';
import style from '@/styles/navegacao/botaoSocial.module.css';

const BotaoSocial = ({ href, src, alt, title }) => {
  if (href === "/") {
    return (
      <div className={style.divBotoes}>
        <p className={style.botaoLinks}>
          <DivBotao 
            src= {src}
            alt= {alt}
            title= {title}
          />
        </p>
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