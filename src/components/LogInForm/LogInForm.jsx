import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import css from './LogInForm.module.css';
import { logInUser } from 'redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getErrorUser, getIsLoadingUser } from 'redux/auth/authSelectors';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const isUserLoading = useSelector(getIsLoadingUser);
  const userError = useSelector(getErrorUser);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logInUser(values));
    resetForm();
    isUserLoading && Loading.circle('LOADING');
  };

  const schema = object({
    email: string().email().required(),
    password: string().min(6, ' Too Short! Minimum 6 symbol').required(),
  });

  return (
    <>
      {userError &&
        Notify.failure(
          userError.responseMessage === 'Email not verify'
            ? 'Email not verified. To confirm, please follow the link in the email sent to your address.'
            : userError.responseMessage === 'Email or password is wrong'
            ? 'You have entered the wrong email or password. Please check the accuracy of the entered information or register.'
            : 'Something went wrong please reload the page or try later.'
        )}
      {!isUserLoading && Loading.remove()}
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={css.form}>
          <h1 className={css.title}>Experience new sensations</h1>
          <p className={css.descr}>Log in to see games</p>
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
            Log in
          </button>
        </Form>
      </Formik>
    </>
  );
};
