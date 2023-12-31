import React, {useEffect} from 'react';
import isMobile from '@/components/shared/mobileDetect.js';

import cabecalhoStyles from '@/styles/shared/header.module.css';
import cabecalhoMobileStyles from '@/styles/shared/header_mobile.module.css';

function Header() {
    let styles = isMobile() ? cabecalhoMobileStyles : cabecalhoStyles;

    useEffect(() => {
        const handleClick = (event) => {
            const navegacaoRef = document.getElementById('navbar-default');
            const buttonNavbarDefault = document.getElementById('buttonNavbar-default');
            if (navegacaoRef && !navegacaoRef.classList.contains('hidden')) {
                buttonNavbarDefault.click();
            }
        };
    
        const mainElement = document.querySelector('main');
        mainElement.addEventListener('click', handleClick);
    
        return () => {
            mainElement.removeEventListener('click', handleClick);
        };
    }, []);

  return (
    <header className={styles.header}>
        <nav className="border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className={`${styles['left-navbar']} flex items-center`}>
                    <span className={`${styles['main-title']} self-center text-2xl font-semibold whitespace-nowrap dark:text-white`}>Protetores Independentes</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" id='buttonNavbar-default' className={`${styles['md:hidden']} inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg dark:text-gray-400 dark:hover:bg-gray-700`} aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="/" className={`${styles['md\:text-blue-700']} ${styles['bg-blue-700']} block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`} aria-current="page">Início</a>
                    </li>
                    <li>
                    <a href="/quemSomos" className={`${styles['option-navbar']} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Quem somos</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;