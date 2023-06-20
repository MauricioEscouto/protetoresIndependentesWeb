import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BotaoSocial from '@/components/navegacao/botaoSocial';
import { ComponenteEstiloEsquerdo, ComponenteEstiloDireito } from '@/components/navegacao/estiloLateral';
import style from '@/styles/navegacao/navegacao_mobile.module.css'

function Navegacao() {
    const [alturaTela, setAlturaTela] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            console.log(window.innerHeight);
            if(window.innerHeight > 780) {
                setAlturaTela(window.innerHeight - 70);
            }
        };

        if (typeof window !== 'undefined') {
            if(window.innerHeight > 780) {
                setAlturaTela(document.documentElement.scrollHeight - 70);
            }

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const sectionStyle = {
        height: `${alturaTela != 0 ? alturaTela+'px' : 'auto'}`,
    };
  
    return (
    <main>
        <section className={style.containerNavegacao} style={sectionStyle}>
            <div className={style.divInformacoesPrincipais}>
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
                        href="https://www.instagram.com/adote.um.adulto/?igshid=MzRlODBiNWFlZA%3D%3D"
                        src="/img/navegacao/dog.svg"
                        alt="ícone de cachorro"
                        title="Adote um adulto"
                    />

                    <BotaoSocial
                        href="https://www.facebook.com/somosprotetoresindependentes/"
                        src="/img/navegacao/facebook.svg"
                        alt="Logo do Facebook"
                        title="Facebook"
                    />

                    <BotaoSocial
                        href="/"
                        src="/img/navegacao/pix.svg"
                        alt="Logo do Pix"
                        title="Chave Pix: (51) 98411-2831"
                    />
                </div>
                <ComponentesCarregadosDepois/>
            </div>

            <div className={style.divDireitosAutorais}>
                <p>Copyright © 2022 Protetores Independentes.</p>
            </div>  
        </section>
    </main>);
  }

function ComponentesCarregadosDepois() {
    useEffect(() => {
        window.onload = () => {
        };
    }, []);

    return (
        <>
            <div className={style.divEstiloEsquerdo}>
                <ComponenteEstiloEsquerdo/>
            </div>
            <div className={style.divEstiloDireito}>
                <ComponenteEstiloDireito/>
            </div>
        </>
    );
}
export default Navegacao;