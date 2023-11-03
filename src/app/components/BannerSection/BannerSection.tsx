import styles from './bannersection.module.css';
import global from '@/app/page.module.css';
import Image from 'next/image';
import { Button } from 'antd';

export default function BannerSection() {
  return (
    <div className={`${global.center} ${styles.bannerSection}`}>
      <div className={`${global.center} ${global.card} ${styles.logo}`}>
        <Image
          src="/logo.png"
          alt="Arvernes Homes Logo"
          className={styles.logoImage}
          width={180}
          height={180}
          priority
          unoptimized={true}
        />
      </div>
      <Button type="primary" className={styles.contactButton}>
        <a
          href={
            'mailto:ludovic.laurichesse@arverneshomes.fr?subject=Demande de contact'
          }
        >
          Nous contacter
        </a>
      </Button>
    </div>
  );
}
