import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/game/contactsOperations';
import css from './GamesList.module.css';
import { selectGames } from 'redux/games/gamesSelectors';

export const GamesList = () => {
  const games = useSelector(selectGames);
  // const dispatch = useDispatch();

  return (
    <ul className={css.games_list}>
      {games.map(({ id, name, number }) => (
        <li className={css.game_item} key={id}>
          <p>
            {name} : {number}
          </p>
          {/* <button onClick={() => dispatch(deleteContact(id))}>Delete</button> */}
        </li>
      ))}
    </ul>
  );
};
