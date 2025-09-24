import logo from '../../assets/app-logo.png';

import css from './Logo.module.css';

export default Logo;

//===============================================================

function Logo() {
  return (
    <a href="#" className={css.logo} aria-label="Go to home">
      <img
        className={css.icon}
        src={logo}
        alt="Cats logo"
        width={24}
        height={24}
      />
      <span className={css.title}>Cats</span>
    </a>
  );
}
