import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthMutation } from '../../../entities/user/api/api.js';
import { navigate } from 'jsdom/lib/jsdom/living/window/navigation.js';
import { useSelector } from 'react-redux';
import React from 'react';

export default function Auth() {
  const navigate = useNavigate();

  const [auth] = useAuthMutation();

  const [errorMessage, setErrorMessage] = React.useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    validateOnChange: false, // this one
    validateOnBlur: false, // and this one
    onSubmit: (values) => {
      auth(values)
        .unwrap()
        .then((payload) => {
          console.log('fulfilled', payload);
          navigate('/');
        })
        .catch(() => {
          setErrorMessage('Неверный логин или пароль!');
        });
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <main>
      {/*<Outlet />*/}

      <div className="authorization">
        <h1 className="authorization__header">Авторизация</h1>
        <div className="authorization__content">
          <form className="form-hook" onSubmit={formik.handleSubmit}>
            {/*<div>{AuthValidation()}</div>*/}
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            {errorMessage && <div className="error"> {errorMessage} </div>}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
