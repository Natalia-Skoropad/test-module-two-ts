import { Logo, UserMenu } from '../../index';

import css from './Header.module.css';

export default Header;

//===============================================================

function Header() {
  const isLoggedIn = true;

  return (
    <header className={css.header}>
      <div className={`container ${css.inner}`}>
        <Logo />

        <nav className={css.nav} aria-label="Primary">
          <a href="#">Home</a>
          <a href="#">Adopt</a>
          <a href="#">Contact</a>
        </nav>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div className={css.auth}>
            <a href="#" className={css.authBtn}>
              Login
            </a>
            <a href="#" className={`${css.authBtn} ${css.register}`}>
              Register
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
