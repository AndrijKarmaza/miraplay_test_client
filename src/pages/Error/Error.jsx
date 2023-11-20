import { Link } from 'react-router-dom';
import css from './Error.module.css';

const Error = () => {
  return (
    <div className={css.error}>
      <h1 className={css.title}>error</h1>
      <p className={css.descr}>Oops, this page doesn't exist!</p>
      <Link to={'/'} className={css.error_btn}>
        Home
      </Link>
    </div>
  );
};

export default Error;
