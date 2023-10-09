import React, { useEffect, useRef, useState } from 'react';
import '../assets/Styles/Slider2.css';
import { data } from '../assets/data';

export const Slider2 = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  /* PRUEBA DE SEGUNDO COMMIT */
  useEffect(() => {
    const listNode = listRef.current;

    const interval = setInterval(() => {
      scrollToImage('next');
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll('li > img')[currentIndex];

 /*    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: 'smooth',
      });
    } */
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex === 0 ? data.length - 1 : prevIndex - 1;
      } else {
        return (prevIndex + 1) % data.length;
      }
    });
  };

  return (
    <>
    <div className="main-container">
      <div className="slider-container">
        <div className="leftArrow" onClick={() => scrollToImage('prev')}>
          &#10092;
        </div>
        <div className="rightArrow" onClick={() => scrollToImage('next')}>
          &#10093;
        </div>
        <div className="container-images">
          <ul ref={listRef}>
            {data.map((item) => (
              <li key={item.id}>
                <img src={item.imgUrl} width="100%" height={600} alt={item.alt} />
              </li>
            ))}
          </ul>
        </div>
        <div className="dots-container">
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            >
              .
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="banner">
      <div className="banner-container">
        <p>Inscríbete y obtén uno de nuestros <strong>Cursos</strong>
          <span> +100 Cursos</span>
        </p>
      <button>
        Explorar
      </button>
      </div>
    </div>
    </>
  );
};
