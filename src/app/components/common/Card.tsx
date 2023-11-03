import global from '@/app/page.module.css';
import styles from './card.module.css';
type CardProps = {
  children: React.ReactNode;
  marginTopPositionIgnored?: boolean;
};
export default function Card(props: CardProps) {
  const { children, marginTopPositionIgnored } = props;

  return (
    <div
      className={`${global.center} ${styles.section}`}
      style={{
        marginTop: marginTopPositionIgnored ? 0 : '-2rem',
      }}
    >
      <div className={`${global.card} ${styles.cardContainer}`}>{children}</div>
    </div>
  );
}
