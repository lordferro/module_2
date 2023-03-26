import { Form, Formik, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup  from 'yup';

const validationSchema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
};

// using styled compopnents with Formik Field
const InputFormerField = styled(Field)`
  font-size: 24px;
`;

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="login">
          login
                  <InputFormerField type="text" name="login" />
                  <ErrorMessage component='div' name='login'/>
        </label>
        <label htmlFor="password">
          password
                  <Field type="password" name="password" />
                  <ErrorMessage component='div' name='password'/>
        </label>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};
