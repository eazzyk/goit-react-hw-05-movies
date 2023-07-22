import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={css.header_container}>
        <NavLink className={css.header_link} to="/">
          Home
        </NavLink>
        <NavLink className={css.header_link} to="/movies">
          Movies
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
