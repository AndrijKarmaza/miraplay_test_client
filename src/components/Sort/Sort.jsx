import css from './Sort.module.css';
import { useSelector } from 'react-redux';
import { selectFreshGames } from 'redux/games/gamesSelectors';
import { setFreshGames } from 'redux/games/gamesOperations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { FaCaretUp } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';

const Sort = () => {
  const dispatch = useDispatch();
  const freshValue = useSelector(selectFreshGames);

  const [isOpen, setIsOpen] = useState(false);

  function onCategoryClick() {
    setIsOpen(!isOpen);
    dispatch(setFreshGames());
  }

  return (
    <div className={css.sort_container}>
      <p className={css.title}>Sort:</p>
      <div>
        <p className={css.main_category} onClick={() => setIsOpen(!isOpen)}>
          {freshValue ? 'new first' : 'old first'}{' '}
          {!isOpen ? (
            <FaCaretDown className={css.icon} />
          ) : (
            <FaCaretUp className={css.icon} />
          )}
        </p>
        {isOpen && (
          <p className={css.category} onClick={() => onCategoryClick()}>
            {!freshValue ? 'new first' : 'old first'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Sort;
