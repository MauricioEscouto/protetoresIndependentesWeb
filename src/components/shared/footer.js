import style from '@/styles/shared/footer.module.css'

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.placeName}>
                    <p>Somos Protetores Independentes</p>
                </div>
                <div className={style.socialIcons}>
                    <a href="https://www.instagram.com/somosprotetoresindependentes/"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/somosprotetoresindependentes/"><i class="fab fa-facebook"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;