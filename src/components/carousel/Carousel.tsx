import Image from 'next/image';
import {useState} from 'react';
import styles from './Carousel.module.css';
import { FC } from "react";
import { Type } from 'typescript';

interface CarouselProps {
  images : []
}



export const Carousel: FC<CarouselProps> = ({images}:CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState (0);

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex (nextIndex);
  };

  const previousImage = () => {
    const previousIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex (previousIndex);
  };

  return (
    <div className={styles.carousel}>

      <div className={styles.currentImage}>

        <Image
          src={images[currentImageIndex]}
          alt="carousel current slide"
          width={150}
          height={150}
          style={{borderRadius: '10px'}}
        />
      </div>
      <button className={styles.previousButton} onClick={previousImage}>
        Previous
      </button>
      <button className={styles.nextButton} onClick={nextImage}>
        Next
      </button>
    </div>
  );
};


