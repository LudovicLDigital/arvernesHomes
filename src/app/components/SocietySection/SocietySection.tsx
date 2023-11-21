import { Card } from '@/app/components/common';
import Image from 'next/image';
import global from '@/app/page.module.css';
import styles from './societysection.module.css';

export default function SocietySection() {
  const cities = ['Vichy', 'Clermont-Ferrand', 'Roanne'];
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
          Arvernes Homes c'est quoi ?
        </p>
      </Card>
      <Card
        containerStyle={{
          marginTop: 0,
        }}
      >
        <h4 className={styles.centeredText}>
          Arvernes Homes, c'est l'art de sublimer la location courte durée en
          Auvergne. Fondée par Ludovic, un passionné d'immobilier et
          d'authenticité régionale.
        </h4>
        <div className={styles.row}>
          <div className={styles.teamSection}>
            <Image
              src={'/profilPic.png'}
              alt={'Image de Ludovic'}
              width={120}
              height={120}
              priority
              unoptimized={true}
            />
            <p className={styles.centeredText}>
              Avec Ludovic à la barre, un jeune entrepreneur de 25 ans dont
              l'expertise s'est affinée au fil de quatre années d'immersion dans
              le secteur, Arvernes Homes n'est pas simplement une conciergerie ;
              c'est une promesse de tranquillité et de rentabilité.
            </p>
            <br />
            <p className={styles.centeredText}>
              Natif de Clermont-Ferrand et Habitant Bellerivois, Il est un réel
              amoureux de sa région.
            </p>
          </div>
          <div className={styles.divider} />
          <div className={styles.societySection}>
            <p className={styles.centeredText}>
              Chez Arvernes Homes, nous comprenons que votre propriété n'est pas
              juste un investissement ; c'est une part de vous-même. De la mise
              en scène photographique qui capture l'essence de votre bien, à
              l'accueil chaleureux de chaque voyageur, chaque détail est pensé
              pour transformer chaque séjour en une expérience inoubliable.
            </p>
            <div>
              <h4 className={styles.centeredText}>Nos secteurs : </h4>
              <div className={`${styles.sectorsContainer}`}>
                {cities.map((city, index) => {
                  return (
                    <div className={styles.sectors} key={index}>
                      <Image
                        src={'/location.png'}
                        alt={'Icone de localisation'}
                        width={40}
                        height={40}
                        priority
                        unoptimized={true}
                      />
                      <h4>{city}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className={styles.centeredText}>
              Notre palette de services, conçue pour libérer les propriétaires
              des contraintes quotidiennes, inclut aussi la sous-location,
              l'automatisation des check-ins et check-outs, et un accompagnement
              sur mesure pour ceux qui font leurs premiers pas dans la location
              courte durée. Et pour ceux qui cherchent à élargir leur
              patrimoine, Ludovic est là pour vous accompagner dans chaque
              projet d'achat.
            </p>
            <p className={styles.centeredText}>
              Arvernes Homes, c'est l'assurance d'une gestion sereine et d'une
              optimisation de vos revenus.
            </p>
            <h4 className={styles.centeredText}>
              Parce que le temps c’est de l’argent, tout bon Auvergnat le sait
            </h4>
          </div>
        </div>
      </Card>
    </>
  );
}
