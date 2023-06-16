import { useLayoutEffect, useRef, useState, useEffect } from 'react';

function ComponenteEstiloEsquerdo() {
    const imagemRef = useRef(null);
    const [topOffset, setTopOffset] = useState(0);
    const [leftOffset, setLeftOffset] = useState(0);
    
    useEffect(() => {
        const limparCacheImagem = () => {
          const imagens = document.getElementsByTagName('img');
          for (let i = 0; i < imagens.length; i++) {
            const src = imagens[i].src;
            imagens[i].src = `${src}?${Date.now()}`;
          }
        };
        
        window.addEventListener('load', limparCacheImagem);
      
        return () => {
          window.removeEventListener('load', limparCacheImagem);
        };
    }, []);

    useLayoutEffect(() => {
        const handleResize = () => {
        const screenWidth = window.innerWidth;
        let newLeft = -150 - (1100 - screenWidth) / 10;
    
        newLeft = screenWidth < 1100 ? newLeft : 0;
    
        setLeftOffset(newLeft);
    
        const screenHeight = document.documentElement.scrollHeight;
        const imageHeight = 480 + 51;
        var newTop = 0;

        if (screenHeight > 864) {
            newTop = screenHeight - imageHeight;
        }
        else {
            newTop = 333;
        }
            
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

export { ComponenteEstiloEsquerdo, ComponenteEstiloDireito };