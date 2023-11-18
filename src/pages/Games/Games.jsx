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
} from 'redux/games/gamesSelectors';
import css from './Games.module.css';
import { setPage } from 'redux/games/gamesOperations';
import GenreList from 'components/GenreList/GenreList';

const Games = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const genre = useSelector(selectGenre);
  const page = useSelector(selectCurrentPage);
  const totalGames = useSelector(selectTotalGames);

  const gamesToShow = 9;

  const reqBody = {
    page,
    isFreshGamesFirst: true,
    genre,
    gamesToShow,
  };

  useEffect(() => {
    dispatch(fetchGames(reqBody));
  }, [dispatch, page, genre]);

  return (
    <div className={css.container}>
      <h1 className={css.header}>All games</h1>
      {isLoading && Loading.standard('Loading')}
      {!isLoading && Loading.remove()}
      {error &&
        Notify.failure('Something went wrong please try to reload page.')}
      <>
        <GenreList />
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
    </div>
  );
};

export default Games;
