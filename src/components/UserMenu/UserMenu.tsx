import { useState } from 'react';
import { Button } from '../../index';
import css from './UserMenu.module.css';
export default UserMenu;

//===============================================================

function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${css.wrap} ${open ? css.open : ''}`}>
      <button
        type="button"
        className={css.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span className={css.avatar} aria-hidden="true" />
        <span className={css.name}>Natalia</span>
        <span className={css.caret} aria-hidden="true" />
      </button>

      {open && (
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
      )}
    </div>
  );
}
