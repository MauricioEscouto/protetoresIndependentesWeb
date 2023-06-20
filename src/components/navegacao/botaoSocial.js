import React from 'react';
import Image from 'next/image';
import style from '@/styles/navegacao/botaoSocial.module.css';

const BotaoSocial = ({ href, src, alt, title }) => {
  const classeImagemMaior = title === 'Facebook' ? style.logoBotaoImagemMaior : style.logosBotoes;

  const DivBotao = () => (
    <div className={style[`divBotao`]}>
      <Image
        className={`${classeImagemMaior}`}
        src={src}
        alt={alt}
        width={45}
        height={30}
        priority
      />
      <p className={style.tituloBotoes}>{title}</p>
    </div>
  );

  if (href === "/") {
    return (
      <div className={style.divBotoes}>
        <p className={style.botaoLinks}>
          <DivBotao />
        </p>
      </div>
    );
  }
  else {
    return (
      <div className={style.divBotoes}>
        <a href={href} target="_blank" className={style.botaoLinks}>
          <DivBotao />
        </a>
      </div>
    );
  }
};

export default BotaoSocial;