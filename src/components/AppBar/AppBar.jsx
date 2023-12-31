import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import css from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={css.container}>
      <div className={css.mainNav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </nav>
  );
};
