import { setGenre } from 'redux/games/gamesOperations';
import css from './GenreList.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectGenre } from 'redux/games/gamesSelectors';

const genres = [
  'ALL',
  'FREE',
  'MOBA',
  'SHOOTERS',
  'LAUNCHERS',
  'MMORPG',
  'STRATEGY',
  'FIGHTING',
  'RACING',
  'SURVIVAL',
  'ONLINE',
];

const GenreList = () => {
  const dispatch = useDispatch();
  const currGenre = useSelector(selectGenre);

  return (
    <ul className={css.genre_list}>
      {genres.map(genre => (
        <li
          key={nanoid()}
          className={
            genre === currGenre || (genre === 'ALL' && currGenre === false)
              ? css.genre_item_active
              : css.genre_item
          }
          onClick={() => dispatch(setGenre(genre))}
        >
          {genre}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
