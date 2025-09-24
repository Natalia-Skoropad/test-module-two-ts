import { Logo } from '../../index';

import css from './Footer.module.css';

export default Footer;

//===============================================================

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={`container ${css.inner}`}>
        <Logo />
        <p>Adopt a friend, change a life ❤️</p>
        <p className={css.small}>© {year} Cats. All rights reserved.</p>
      </div>
    </footer>
  );
}
