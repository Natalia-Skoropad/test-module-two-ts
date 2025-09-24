import cats from '../../cats.json';

import { CatInfo } from '../../index';
import type { Cat } from '../../types/cat';

import css from './CatsList.module.css';

export default CatsList;

//===============================================================

function CatsList() {
  const data = cats as Cat[];

  return (
    <ul className={css.list}>
      {data.map(cat => (
        <li key={cat.id}>
          <CatInfo cat={cat} />
        </li>
      ))}
    </ul>
  );
}
