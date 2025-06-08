import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import style from './RegistrationForm.module.css';

export default function RegistrationForm({ onSubmit }) {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Please enter your name')
      .min(5, 'Name is too short!'),
    email: Yup.string().email().required('Please enter the email'),
    password: Yup.string()
      .required('Please enter the password')
      .min(6, 'Password is too short!'),
  });

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
          <div>
            <label htmlFor={nameId}>Name</label>
            <Field id={nameId} name="name" className={style.formField} />
            <ErrorMessage
              name="name"
              component="span"
              className={style.error}
            />
          </div>
          <div>
            <label htmlFor={emailId}>Email</label>
            <Field id={emailId} name="email" className={style.formField} />
            <ErrorMessage
              name="email"
              component="span"
              className={style.error}
            />
          </div>
          <div>
            <label htmlFor={passwordId}>Password</label>
            <Field
              id={passwordId}
              name="password"
              className={style.formField}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={style.error}
            />
          </div>
          <button type="submit" className={style.button}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}