import Card from '@/app/components/common/Card';
import global from '@/app/page.module.css';
import styles from './propertiessection.module.css';
import Image from 'next/image';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { CSSProperties, useRef } from 'react';
import { theme } from 'antd';

const { useToken } = theme;

export default function PropertiesSection() {
  const scrollerRef = useRef<HTMLDivElement>();
  const { token } = useToken();

  const scroll = (direction: string) => {
    if (scrollerRef.current) {
      const { current: scroller } = scrollerRef;
      const scrollAmount = 400; // The width of each image - adjust as needed
      if (direction === 'left') {
        scroller.scrollLeft -= scrollAmount;
      } else {
        scroller.scrollLeft += scrollAmount;
      }
    }
  };

  const properties = [
    {
      title: 'Appartement 1 - Séjour',
      image: '/properties/lbv1.jpg',
    },
    {
      title: 'Appartement 1 - Chambre/Bureau',
      image: '/properties/lbv2.jpg',
    },
    {
      title: 'Appartement 1 - Chambre',
      image: '/properties/lbv3.jpg',
    },
    {
      title: 'Appartement 1 - Séjour/coin tv',
      image: '/properties/lbv4.jpg',
    },
    {
      title: "Appartement 1 - Salle d'eau",
      image: '/properties/lbv5.jpg',
    },
    {
      title: 'Appartement 1 - Coin repas/cuisine',
      image: '/properties/lbv6.jpg',
    },
    {
      title: 'Appartement 2',
      image: '/properties/jd1.jpg',
    },
  ];
  const arrowStyle: CSSProperties = {
    fontSize: '1em',
    color: 'white',
    position: 'absolute', // Make sure the arrows are clickable
    zIndex: 10,
    backgroundColor: token.colorPrimary,
    padding: '0.5em',
    borderRadius: '50%',
    border: '0.8em solid white',
  };
  return (
    <>
      <Card
        containerStyle={{
          width: '80%',
          marginTop: 0,
          alignSelf: 'center',
        }}
        cardStyle={{
          padding: 0,
        }}
      >
        <p className={`${global.alignColumCenter} ${global.sectionTitle}`}>
          Nos appartements en gestion
        </p>
      </Card>
      <Card
        containerStyle={{
          marginTop: 0,
        }}
      >
        <div className={styles.innerContainer}>
          <ArrowLeftOutlined
            onClick={() => scroll('left')}
            style={{
              ...arrowStyle,
              left: '4%',
            }}
          />
          <div className={styles.imagesRower} ref={scrollerRef}>
            {properties.map((property, index) => {
              return (
                <div key={index} className={styles.imageContainer}>
                  <Image
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
              right: '5%',
            }}
          />
        </div>
      </Card>
    </>
  );
}
