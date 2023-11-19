import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import css from './RegisterForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getErrorUser, getIsLoadingUser } from 'redux/auth/authSelectors';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const isUserLoading = useSelector(getIsLoadingUser);
  const userError = useSelector(getErrorUser);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
    isUserLoading && Loading.circle('LOADING');
  };

  const schema = object({
    name: string().required(),
    email: string().email().required(),
    password: string().min(6, ' Too Short! Minimum 6 symbol').required(),
  });

  return (
    <>
      {userError &&
        Notify.failure(
          userError.responseMessage === 'Email in use'
            ? 'The user with this email already exists. Please log in.'
            : 'Something went wrong please reload the page or try later.'
        )}
      {!isUserLoading && Loading.remove()}
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={css.form}>
          <h1 className={css.title}>Experience new sensations</h1>
          <p className={css.descr}>Register to see games</p>
          <label className={css.label}>
            Enter your name
            <ErrorMessage component="div" name="name" />
            <Field
              className={css.input}
              as="input"
              type="text"
              name="name"
              placeholder="your name"
            ></Field>
          </label>
          <label className={css.label}>
            Enter your email
            <ErrorMessage component="div" name="email" />
            <Field
              className={css.input}
              as="input"
              type="mail"
              name="email"
              placeholder="youremail@miraplay.com"
            ></Field>
          </label>
          <label className={css.label}>
            Enter password
            <ErrorMessage component="div" name="password" />
            <Field
              className={css.input}
              as="input"
              type="text"
              name="password"
              placeholder="your password"
            ></Field>
          </label>
          <button className={css.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};
