import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <ul className={css.navigation}>
        <li className={css.nav_link}>
          <NavLink to="/" end>
            <button>Home</button>
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={css.nav_link}>
            <NavLink to="/games">
              <button>Games</button>
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};