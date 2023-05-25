import Image from 'next/image';

// styling
import styles from '@/styles/ProjectStallCard.module.css';

type propsType = {
  name: string;
  collegeName: string;
  stallNumber: number;
  cover: string;
};

const ProjectStallCard = ({
  name,
  collegeName,
  stallNumber,
  cover,
}: propsType) => {
  return (
    <div className={styles.card}>
      <Image
        src={cover}
        width={320}
        height={240}
        alt='Picture of the author'
        className={styles['card-cover']}
        priority
      />
      <div className={styles['card-detail']}>
        <div className={styles['card-detail-number']}>#{stallNumber}</div>
        <div className={styles['card-detail-text']}>
          <h1 className={styles['title']}>{name}</h1>
          <p className={styles['subtitle']}>from {collegeName}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectStallCard;
