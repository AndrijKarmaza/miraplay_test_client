import { NavLink, Link } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import icon from '../../assets/icon.png';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <ul className={css.navigation}>
        <li className={css.icon_link}>
          <Link to="/" className={css.icon_cont}>
            <img className={css.icon} src={icon} alt="icon" />
            <p className={css.icon_header}>MIRAPLAY</p>
            <p className={css.icon_descr}>Cloud Gaming</p>
          </Link>
        </li>
        {isLoggedIn && (
          <li className={css.nav_link}>
            <NavLink to="/games">Games</NavLink>
          </li>
        )}
      </ul>
    </>
  );
};
