import './index.scss';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

export default function Reg() {
  const handleClick = () => console.log('Регистрация прошла успешно');

  return (
    <main>
      {/*<Outlet />*/}
      <div className="registration">
        <h1 className="registration__header">Регистрация</h1>
        <div className="registration__content">
          <Formik
            initialValues={{
              first_name: '',
              surname: '',
              login: '',
              email: '',
              password: '',
              password_repeat: '',
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              if (!values.first_name) {
                errors.first_name = 'Required';
              }
              if (!values.surname) {
                errors.surname = 'Required';
              }
              if (!values.login) {
                errors.login = 'Required';
              }
              if (!values.password) {
                errors.password = 'Required';
              }
              if (values.password !== values.password_repeat) {
                errors.password_repeat = 'Пароли не совпадают';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="form-hook">
                <label htmlFor="first_name">First name</label>
                <Field type="first_name" name="first_name" />
                <ErrorMessage name="first_name" component="div" />
                <label htmlFor="surname">Surname</label>
                <Field type="surname" name="surname" />
                <ErrorMessage name="surname" component="div" />
                <label htmlFor="login">Login</label>
                <Field type="login" name="login" />
                <ErrorMessage name="login" component="div" />
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <label htmlFor="password_repeat">Repeat password</label>
                <Field type="password" name="password_repeat" />
                <ErrorMessage name="password_repeat" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
}
