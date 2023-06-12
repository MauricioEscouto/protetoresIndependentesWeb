import React from 'react';
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
                title="WhatsApp"
            />
        </div>
    </section>
);
}

export default Navegacao;