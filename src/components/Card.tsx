import Image from "next/image";
import styles from "./card.module.css";

type CardProps = {
  venueName: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function Card({
  venueName,
  description,
  imageSrc,
  imageAlt,
}: CardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h2 className={styles.title}>{venueName}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
