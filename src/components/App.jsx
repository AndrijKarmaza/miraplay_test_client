import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { getIsLoadingUser } from 'redux/auth/authSelectors';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Games = lazy(() => import('pages/Games/Games'));
const Error = lazy(() => import('pages/Error/Error'));

Notify.init({
  width: '500px',
  position: 'center-center',
  closeButton: true,
  useIcon: false,
  fontFamily: 'Neue Machina',
  fontSize: '16px',
  messageMaxLength: 300,
  backOverlay: true,
  success: {
    background: '#3f9c14',
    textColor: '#eaeaea',
    backOverlayColor: 'rgba(24, 24, 24,0.9)',
    notiflixIconColor: '#eaeaea',
  },
  failure: {
    background: '#df1332',
    textColor: '#eaeaea',
    backOverlayColor: 'rgba(24, 24, 24,0.9)',
    notiflixIconColor: '#eaeaea',
  },
});

Loading.init({
  backgroundColor: 'rgba(24, 24, 24,0.9)',
  fontFamily: 'Neue Machina',
  svgSize: '100px',
  svgColor: '#3f9c14',
  messageFontSize: '16px',
  messageColor: '#eaeaea',
});

export const App = () => {
  const dispatch = useDispatch();
  const isUserLoading = useSelector(getIsLoadingUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  !isUserLoading && Loading.remove();

  return isUserLoading ? (
    Loading.circle('LOADING')
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/games" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/games" component={<Login />} />
          }
        />
        <Route
          path="/games"
          element={<PrivateRoute redirectTo="/login" component={<Games />} />}
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
