import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import css from './Home.module.css';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <section className={css.container}>
      <div>
        <p className={css.descr}>Home - Library of games</p>
        <h1 className={css.title}>Our library of top games</h1>
        {isLoggedIn ? (
          <h2 className={css.subTitle}>Go to games to view games list</h2>
        ) : (
          <h2 className={css.subTitle}>
            Register or log in to view games list
          </h2>
        )}
      </div>
      <div className={css.img}></div>
    </section>
  );
};

export default Home;
