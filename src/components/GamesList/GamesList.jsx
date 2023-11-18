import { useSelector } from 'react-redux';
import css from './GamesList.module.css';
import { selectGames } from 'redux/games/gamesSelectors';

export const GamesList = () => {
  const games = useSelector(selectGames);

  return (
    <ul className={css.games_list}>
      {games.map(
        ({
          _id,
          systemGameName,
          gameDescription,
          gameImage,
          genre,
          inTop,
          gameClass,
        }) => (
          <li className={css.game_item} key={_id}>
            <img
              className={css.game_img}
              src={gameImage}
              alt={systemGameName}
              loading="lazy"
            />
            <div className={css.game_descr_box}>
              <p className={css.game_header}>{systemGameName}</p>
              <p className={css.game_descr}>{gameDescription}</p>
            </div>
            <div className={css.game_genre_cont}>
              {inTop && <p className={css.game_top}>TOP</p>}
              <p className={css.game_genre}>{genre}</p>
            </div>
            {gameClass === 'STANDART' && <p className={css.game_class}>FREE</p>}
          </li>
        )
      )}
    </ul>
  );
};
