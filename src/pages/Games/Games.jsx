import { GamesList } from 'components/GamesList/GamesList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGames } from 'redux/games/gamesOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {
  selectError,
  selectIsLoading,
  selectGenre,
  selectCurrentPage,
  selectTotalGames,
  selectFreshGames,
} from 'redux/games/gamesSelectors';
import css from './Games.module.css';
import { setPage } from 'redux/games/gamesOperations';
import GenreList from 'components/GenreList/GenreList';
import Sort from 'components/Sort/Sort';

const Games = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const genre = useSelector(selectGenre);
  const page = useSelector(selectCurrentPage);
  const totalGames = useSelector(selectTotalGames);
  const isFreshGamesFirst = useSelector(selectFreshGames);

  const gamesToShow = 9;

  const reqBody = {
    page,
    isFreshGamesFirst,
    genre,
    gamesToShow,
  };

  useEffect(() => {
    dispatch(fetchGames(reqBody));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page, genre, isFreshGamesFirst]);

  return (
    <section className={css.container}>
      <h1 className={css.header}>All games</h1>
      {isLoading && Loading.circle('LOADING')}
      {!isLoading && Loading.remove()}
      {error &&
        Notify.failure('Something went wrong please try to reload page.')}
      <>
        <div className={css.nav_container}>
          <GenreList />
          <Sort />
        </div>
        <GamesList />
        {page * gamesToShow < totalGames && (
          <button
            className={css.btn_see_more}
            onClick={() => dispatch(setPage())}
          >
            Show more
          </button>
        )}
      </>
    </section>
  );
};

export default Games;
