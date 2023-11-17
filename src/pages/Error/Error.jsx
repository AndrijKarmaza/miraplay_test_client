import { Link } from 'react-router-dom';
import css from './Error.module.css';

const Error = () => {
  return (
    <div className={css.error}>
      <p>404</p>
      <h1>Page not found</h1>
      <h2>Oops! Something is wrong</h2>
      <Link to={'/'} className={css.error_btn}>
        Back to homepage
      </Link>
    </div>
  );
};

export default Error;
