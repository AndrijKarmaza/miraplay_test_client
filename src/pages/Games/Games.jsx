import { GamesList } from 'components/GamesList/GamesList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGames } from 'redux/games/gamesOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {
  selectGames,
  selectError,
  selectIsLoading,
} from 'redux/games/gamesSelectors';
import css from './Games.module.css';

const Games = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h2>Games list</h2>
      {isLoading && Loading.standard('Loading')}
      {!isLoading && Loading.remove()}
      {error &&
        Notify.failure('Something went wrong please try to reload page.')}
      {games.length === 0 ? (
        <p className="list-text">Add your first game</p>
      ) : (
        <GamesList />
      )}
    </div>
  );
};

export default Games;
