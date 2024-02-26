import './index.scss';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Auth() {
  const handleClick = () => console.log('Авторизация прошла успешно');

  return (
    <main>
      {/*<Outlet />*/}
      <div className="authorization">
        <h1 className="authorization__header">Авторизация</h1>
        <div className="authorization__content">
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              if (!values.password) {
                errors.password = 'Required';
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
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
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
