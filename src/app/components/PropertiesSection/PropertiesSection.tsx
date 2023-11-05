import global from '@/app/page.module.css';
import { Card, Carousel } from '@/app/components/common';

export default function PropertiesSection() {
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
        <Carousel images={properties} />
      </Card>
    </>
  );
}
