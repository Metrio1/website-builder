import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { regValidation } from '../lib/index.js';
// import { useCreateUserQuery } from '../../../entities/user/api/user.api.js';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useAuthMutation, useCreateUserMutation } from '../../../entities/user/api/api.js';
import { useState } from 'react';
import { redirect } from 'react-router-dom';

export default function Reg(values) {
  const navigate = useNavigate();

  const [user, setUser] = useState(values);

  const [createUser] = useCreateUserMutation();

  // const [createUser] = useCreateUserMutation();

  const onFormSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
    // console.log(data);
    createUser(values)
      .unwrap()
      .then((payload) => {
        console.log('fulfilled', payload);
        navigate('/auth');
      })
      .catch((error) => console.error('rejected', error));
    // navigate('/auth');
    // createUser(user)
    //   .unwrap()
    //   .then(() => {
    //     setUser(values);
    //     navigate('/auth');
    //   })
    //   .catch((error) => console.error('rejected', error));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      login: '',
      email: '',
      password: '',
      re_password: '',
      regValidation: '',
    },
    validationSchema: regValidation,
    onSubmit: onFormSubmit,
  });

  return (
    <main>
      {/*<Outlet />*/}
      <div className="registration">
        <h1 className="registration__header">Регистрация</h1>
        <div className="registration__content">
          <form className="form-hook" onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
            <label htmlFor="login">Login</label>
            <input
              id="login"
              name="login"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.login}
            />
            {formik.touched.login && formik.errors.login ? <div>{formik.errors.login}</div> : null}
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
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <label htmlFor="re_password">Confirm password</label>
            <input
              id="re_password"
              name="re_password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.re_password}
            />

            {formik.touched.re_password && formik.errors.re_password ? (
              <div>{formik.errors.re_password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
