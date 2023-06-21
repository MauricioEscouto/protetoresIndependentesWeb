import { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from '@/components/quemSomos/slider.js';
import Footer from '@/components/shared/footer';
import style from '@/styles/quemSomos/quemSomos.module.css'

function QuemSomos() {
    let valor = 0;
    let screenAtual = 0;
    const [marginTop, setMarginTop] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            console.log(screenWidth)
                valor = (2135 - screenWidth) * 0.24;
                const newMarginTop = screenWidth > 800 && screenWidth < 2090 ? -valor : 0;
                setMarginTop(newMarginTop);
            screenAtual = screenWidth;
        };

        
        handleResize(); 
        

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sectionHistoria = {
        marginTop: `${marginTop}px`,
    };

    return (
        <div>
            <header className={style.header}>
                <nav className={style.navHeader}>
                    <ul>
                        <li class="home-button"><a href="/"><i class="fas fa-home"></i></a></li>
                        <li class="social-icons"><a href="https://www.instagram.com/somosprotetoresindependentes/"><i class="fab fa-instagram"></i></a></li>
                        <li class="social-icons"><a href="https://www.facebook.com/somosprotetoresindependentes/"><i class="fab fa-facebook"></i></a></li>
                    </ul>
                </nav>
            </header>

            <main className={style.mainQuemSomos}>
                <div className={style.banner}>
                    <div className={style.bannerContent}>
                        <h2>somos</h2>
                        <h1>Protetores</h1>
                        <h1>Independentes</h1>
                        <p>📌Guaíba - RS</p>
                    </div>
                </div>

                <section className={style.historySection} id="history-section" style={sectionHistoria}>
                    <div className={style.historyContent}>
                        <div className={style.historyText}>
                            <h1>Nossa história</h1>
                            <p>Lorem ipsum dolor sit amet. Sed perferendis voluptatem in quidem possimus qui excepturi quidem. Qui assumenda unde aut pariatur consequatur ea magnam numquam sit deleniti alias sed natus voluptatem?Aut voluptates fugiat vel quidem laborum ut dignissimos quisquam est mollitia numquam eos blanditiis fuga. Eum molestiae sunt qui maxime expedita quo nulla omnis et eveniet enim aut aliquid distinctio qui illum accusamus. Qui nihil praesentium et velit autem quo enim iure Qui fugit corporis et aliquam voluptatem non quia voluptatem ex aliquam quod eos totam iste. Eum galisum iusto eos reprehenderit provident qui corporis alias et dolorem amet et laboriosam sapiente sed blanditiis velit vel consequatur voluptatum!</p>
                            <br />
                        </div>
                        <Image
                            className={style.logoPicture}
                            src="/img/quemSomos/logoprotetores.png"
                            alt="Protetores Independentes Logo"
                            width={500}
                            height={150}
                            priority 
                        />
                    </div>
                </section>

                <Slider/>

                <section className={style.projectSection} id="project-section">
                    <div className={style.projectContent}>
                        <Image
                            src="/img/quemSomos/protetores.png"
                            alt="Imagem do grupo da ONG"
                            width={550}
                            height={150}
                            priority 
                        />
                        <div className={style.projectText}>
                            <h1>Projetos</h1>
                            <p>Realizamos diversos projetos ao longo do mês, buscando envolver a comunidade e arrecadar fundos para auxiliar na nossa causa. 
                                Um desses projetos é o "Lanchinho Solidário", que acontece todo início de mês. 
                                Nele, percorremos a cidade de Guaíba vendendo deliciosos salgadinhos preparados com muito carinho. 
                                Essa iniciativa não só arrecada recursos financeiros para os cuidados dos animais, mas também promove interação e conscientização sobre a importância de ajudar os animais necessitados.
                            </p>
                            <br />
                            <p>Além do "Lanchinho Solidário", realizamos feiras de adoções, brechós, rifas e uma série de eventos para angariar fundos e atrair a atenção da comunidade. 
                                As feiras de adoções são momentos emocionantes, em que buscamos encontrar lares amorosos para os animais resgatados, proporcionando a eles uma nova chance de serem amados e cuidados. 
                                Os brechós são ótimas oportunidades para as pessoas adquirirem produtos de qualidade a preços acessíveis, enquanto contribuem para a nossa causa. 
                                E as rifas, além de divertidas, oferecem a chance de ganhar prêmios incríveis, enquanto ajudam a melhorar a vida dos animais.
                            </p>
                            <br />
                            <p>Esses projetos são essenciais para manter nossas atividades e garantir o bem-estar dos animais sob nossa responsabilidade. 
                                Contamos com a participação e apoio da comunidade para que juntos possamos continuar realizando essas ações solidárias em prol dos animais abandonados e necessitados.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={style.donationSection} id="donation-section">
                    <div className={style.donationContent}>
                        <div className={style.donationText}>
                            <h1>Como você pode nos ajudar:</h1>
                            <p>As doações que recebemos são de extrema importância para os animais. Com o apoio financeiro dos doadores, conseguimos fornecer cuidados veterinários essenciais para os mais de 70 cachorros que abrigamos. 
                                Além disso, as doações nos permitem adquirir uma quantidade significativa de ração, garantindo que todos os cães recebam uma alimentação adequada, uma vez que, diariamente são consumidos mais de 10kg de ração. 
                            </p>
                            <br/>
                            <p>Também utilizamos os recursos para adquirir casinhas confortáveis e produtos para banho, mantendo os animais protegidos e higienizados. 
                                Cada doação faz a diferença e nos ajuda a proporcionar uma vida melhor para esses animais necessitados.
                            </p>
                            <a className={style.pixButton}>PIX: (51) 98411-2831 Maikel Cesar</a>
                        </div>
                    </div>
                </section>
                <footer></footer>
            </main>

            <Footer/>
        </div>
    );
}

export default QuemSomos;