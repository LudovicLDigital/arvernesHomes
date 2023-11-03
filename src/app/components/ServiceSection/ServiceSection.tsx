import { theme } from 'antd';
import Card from '@/app/components/common/Card';
import Image from 'next/image';
import styles from './servicesection.module.css';
import global from '@/app/page.module.css';

const { useToken } = theme;

type ServiceItemProps = {
  title: string;
  description: string;
  image: string;
  highlightCtaTextIndex: number;
  ctaText: string[];
  className?: string;
};

function ServiceItem(props: ServiceItemProps) {
  const { token } = useToken();
  const descriptionSplitted = props.description.split('\n');
  return (
    <>
      {props.title !== 'Gestion complète' && <div className={styles.divider} />}
      <div
        className={`${styles.alignCenter} ${styles.marginH} ${props.className}`}
      >
        <div className={styles.alignCenter}>
          <Image
            src={props.image}
            alt={props.title}
            width={120}
            height={120}
            priority
            unoptimized={true}
          />
          <h3>{props.title}</h3>
        </div>
        <div>
          {descriptionSplitted.map((element, index) => {
            return <p key={index}>{element}</p>;
          })}
        </div>
        <span className={`${styles.alignCenter} ${styles.comText}`}>
          {props.ctaText.map((text, index) => {
            if (index === props.highlightCtaTextIndex) {
              return (
                <span
                  key={index}
                  style={{ color: token.colorPrimary }}
                  className={styles.highlightText}
                >
                  {text}
                </span>
              );
            } else {
              return <span key={index}>{text}</span>;
            }
          })}
        </span>
      </div>
    </>
  );
}

export default function ServiceSection() {
  const services: ServiceItemProps[] = [
    {
      title: 'Gestion complète',
      description:
        'On s’occupe de tout sur votre location courte durée.\nMis en place de l’annonce, gestion des voyageurs, ménage des appartements, reparations et entretiens.\nGagnez plus d’argent et plus de tranquilité ! ',
      highlightCtaTextIndex: 0,
      ctaText: ['20%', 'des loyers ( frais de ménage décomptés )'],
      image: '/manage.png',
      className: styles.displayWithFade1,
    },
    {
      title: 'Sous-Location',
      description:
        'Vous voulez louer à l’année, le choix des locataires, la vacance locative, la casse et les impayés vous font peur ?\nOn vous loue votre appartement charges comprises, plus de soucis de gestion de locataire on gère tout de notre côté.\nEt en plus, nous pouvons meubler et rédécorer votre appartement tout en l’entretenant, ce qui vous garantis un bien de qualité dans le temps.',
      highlightCtaTextIndex: 1,
      ctaText: [
        'Recevez',
        ' 100% ',
        'de vos loyers sans frais de gestion de notre part',
      ],
      image: '/sousloc.png',
      className: styles.displayWithFade2,
    },
    {
      title: 'Accompagnement',
      description:
        'Nous pouvons vous aider sur tout les aspects de la courte durée.\nAutomatiser votre entrée / sorties, réaliser vos photos, créer vos annonces sur les plateformes, préparer votre achat, étudier vos stratégies, vous accompagner sur la décoration et l’ameublement ou encore tout autre aspect qui vous vient en tête.',
      highlightCtaTextIndex: -1,
      ctaText: ['Contactez-nous pour avoir un devis'],
      image: '/consulting.png',
      className: styles.displayWithFade3,
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
        <p className={`${styles.alignCenter} ${global.sectionTitle}`}>
          Quels sont nos services
        </p>
      </Card>
      <Card
        containerStyle={{
          marginTop: 0,
        }}
      >
        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              highlightCtaTextIndex={service.highlightCtaTextIndex}
              ctaText={service.ctaText}
              className={service.className}
            />
          ))}
        </div>
      </Card>
    </>
  );
}
