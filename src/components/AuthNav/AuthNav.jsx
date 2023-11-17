import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.navigation}>
      <li className={css.nav_link}>
        <NavLink to="/register">
          <button>Register</button>
        </NavLink>
      </li>
      <li className={css.nav_link}>
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
      </li>
    </ul>
  );
};
