import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from './carousel.module.css';
import { CSSProperties, useRef } from 'react';
import { theme } from 'antd';

const { useToken } = theme;

type CarouselProps = {
  images: {
    title: string;
    image: string;
  }[];
};
export default function Carousel(props: CarouselProps) {
  const { images } = props;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { token } = useToken();

  const scroll = (direction: string) => {
    if (scrollerRef.current) {
      const { current: scroller } = scrollerRef;
      const firstImageContainer = scroller.children[0]; // children is a collection of Element nodes only
      // If there's no image container, we cannot scroll
      if (!firstImageContainer) return;

      // Calculate total width of one item including its margins
      const itemWidth =
        firstImageContainer.clientWidth +
        parseInt(window.getComputedStyle(firstImageContainer).marginLeft) +
        parseInt(window.getComputedStyle(firstImageContainer).marginRight);

      const scrollOptions = {
        left:
          direction === 'left'
            ? scroller.scrollLeft - itemWidth
            : scroller.scrollLeft + itemWidth,
        top: 0,
        behavior: 'smooth' as ScrollBehavior,
      };

      scroller.scroll(scrollOptions);
    }
  };

  const arrowStyle: CSSProperties = {
    fontSize: '1em',
    color: 'white',
    position: 'absolute', // Make sure the arrows are clickable
    zIndex: 10,
    backgroundColor: token.colorPrimary,
    padding: '0.5em',
    borderRadius: '50%',
    border: '0.5em solid white',
  };

  return (
    <div className={styles.innerContainer}>
      <ArrowLeftOutlined
        onClick={() => scroll('left')}
        style={{
          ...arrowStyle,
          left: '5vw',
        }}
      />
      <div className={styles.imageCarousel} ref={scrollerRef}>
        {images.map((property, index) => {
          return (
            <div key={index} className={styles.imageContainer}>
              <Image
                className={styles.images}
                src={property.image}
                alt={property.title}
                width={400}
                height={400}
                priority
                unoptimized={true}
              />
            </div>
          );
        })}
      </div>
      <ArrowRightOutlined
        onClick={() => scroll('right')}
        style={{
          ...arrowStyle,
          right: '4vw',
        }}
      />
    </div>
  );
}
