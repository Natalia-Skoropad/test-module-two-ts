import { Button } from '../../index';

import css from './Dropdown.module.css';

export default Dropdown;

//===============================================================

function Dropdown() {
  return (
    <div className={css.menu} role="menu" aria-label="User menu">
      <div className={css.sectionTitle}>Account</div>
      <a className={css.item} role="menuitem" href="#">
        Profile
      </a>
      <a className={css.item} role="menuitem" href="#">
        Favorites
      </a>
      <a className={css.item} role="menuitem" href="#">
        Settings
      </a>

      <div className={css.hr} />

      <div className={css.logout}>
        <Button text="Logout" type="button" variant="normal" />
      </div>
    </div>
  );
}
