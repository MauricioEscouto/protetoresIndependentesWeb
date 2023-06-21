import Image from 'next/image';
import style from '@/styles/quemSomos/quemSomos.module.css'

function QuemSomos() {
    return (
        <main className={style.mainQuemSomos}>
            <div className={style.banner}>
                <div className={style.bannerContent}>
                    <h2>somos</h2>
                    <h1>Protetores
                    </h1>
                    <p>📌Guaíba - RS</p>
                </div>
            </div>

            <section class="history-section" id="history-section">
                <div class="history-content">
                    <div class="history-text">
                        <h1>Nossa história</h1>
                        <p>Lorem ipsum dolor sit amet. Sed perferendis voluptatem in quidem possimus qui excepturi quidem. Qui assumenda unde aut pariatur consequatur ea magnam numquam sit deleniti alias sed natus voluptatem?Aut voluptates fugiat vel quidem laborum ut dignissimos quisquam est mollitia numquam eos blanditiis fuga. Eum molestiae sunt qui maxime expedita quo nulla omnis et eveniet enim aut aliquid distinctio qui illum accusamus. Qui nihil praesentium et velit autem quo enim iure Qui fugit corporis et aliquam voluptatem non quia voluptatem ex aliquam quod eos totam iste. Eum galisum iusto eos reprehenderit provident qui corporis alias et dolorem amet et laboriosam sapiente sed blanditiis velit vel consequatur voluptatum!</p>
                    </div>
                    <Image
                        
                        src="/img/quemSomos/logoprotetores.png"
                        alt="Protetores Independentes Logo"
                        width={45}
                        height={30}
                        priority 
                    />
                </div>
            </section>
        </main>
    );
}

export default QuemSomos;