import { Button } from 'antd';
import styles from './wiphome.module.css';
import global from '@/app/page.module.css';

export default function WipHome() {
  return (
    <div className={`${global.card} ${global.center} ${styles.wipCard}`}>
      <p className={global.description}>🚧Site en construction</p>
      <Button type="primary">
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
