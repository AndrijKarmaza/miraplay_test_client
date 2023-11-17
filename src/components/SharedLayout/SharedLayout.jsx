import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { AppBar } from 'components/AppBar/AppBar';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header>
        <AppBar css={css} />
      </header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
