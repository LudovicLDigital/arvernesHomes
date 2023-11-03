import global from '@/app/page.module.css';
import styles from './card.module.css';
import { CSSProperties } from 'react';

type CardProps = {
  children: React.ReactNode;
  containerStyle?: CSSProperties | undefined;
  cardStyle?: CSSProperties | undefined;
};
export default function Card(props: CardProps) {
  const { children, cardStyle, containerStyle } = props;

  return (
    <div
      className={`${global.center} ${styles.section}`}
      style={{
        ...containerStyle,
      }}
    >
      <div
        className={`${global.card} ${styles.cardContainer}`}
        style={{
          ...cardStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
}
