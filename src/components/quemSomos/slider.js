import { useEffect, useRef } from 'react';
import Image from 'next/image';
import style from '@/styles/quemSomos/quemSomos.module.css';

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slideCount = sliderRef.current.querySelectorAll('img').length;
    let slideWidth = sliderRef.current.querySelector('img').clientWidth;
    let slideIndex = 0;

    sliderRef.current.style.width = `${slideCount * slideWidth}px`;

    function slideNext() {
      if (slideIndex < slideCount - 1) {
        slideIndex++;
      } else {
        slideIndex = 0;
      }
      sliderRef.current.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    }

    function slidePrev() {
      if (slideIndex > 0) {
        slideIndex--;
      } else {
        slideIndex = slideCount - 1;
      }
      sliderRef.current.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    }

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    nextButton.addEventListener('click', slideNext);
    prevButton.addEventListener('click', slidePrev);

    return () => {
      nextButton.removeEventListener('click', slideNext);
      prevButton.removeEventListener('click', slidePrev);
    };
  }, []);

  return (
    <div className={style.sliderDiv}>
      <div className={style.sliderContainer}>
        <div className={style.slider} ref={sliderRef}>
          <SliderImagem
            src="/img/quemSomos/foto1.png"
          />
          <SliderImagem
            src="/img/quemSomos/foto2.png"
          />
          <SliderImagem
            src="/img/quemSomos/foto3.png"
          />
          <SliderImagem
            src="/img/quemSomos/foto4.png"
          />
          <SliderImagem
            src="/img/quemSomos/foto5.png"
          />
          <SliderImagem
            src="/img/quemSomos/foto6.png"
          />
          <SliderImagem
            src="/img/quemSomos/foto7.png"
          />
          <SliderImagem
            src="/img/quemSomos/foto8.png"
          />
        </div>
      </div>
      <div className={style.sliderControls}>
        <button className="prev">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

const SliderImagem = ({ src }) => {
    return (
        <Image
            className={style.sliderImage}
            src= {src}
            alt="Imagem de campanhas da ong"
            width={375}
            height={150}
            priority
        />
    );
};

export default Slider;