import type { Cat } from '../../types/cat';

import css from './CatInfo.module.css';
import clsx from 'clsx';

export default CatInfo;

//===============================================================

interface CatInfoProps {
  cat: Cat;
}

function CatInfo({
  cat: { name, image, email, age, available },
}: CatInfoProps) {
  return (
    <article className={css.card}>
      <div className={css.thumb}>
        <img src={image} alt={`${name} photo`} />
      </div>

      <h3 className={css.name}>{name}</h3>

      <div className={css.meta}>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>

      <span className={clsx(css.badge, available ? css.available : css.taken)}>
        {available ? 'Available' : 'Not available'}
      </span>
    </article>
  );
}
