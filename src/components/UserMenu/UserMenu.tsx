import { useState } from 'react';

import css from './UserMenu.module.css';
import Dropdown from './Dropdown';

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

      {open && <Dropdown />}
    </div>
  );
}
