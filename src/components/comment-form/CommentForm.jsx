import React from 'react';
import { Formik, Form, Field } from 'formik';
import Schema from './validate';
import styled from './commentForm.module.css';
import Logo from '../logo/Logo';
const CommentForm = ({ handleAddComment, handleCloseModal }) => {
  return (
    <Formik
      initialValues={{ name: '', text: '' }}
      validationSchema={Schema}
      onSubmit={values => {
        handleAddComment(values);
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form className={styled.comment__form}>
            <button
              type="button"
              onClick={handleCloseModal}
              className={styled.closeBtn}
            />
            <div className={styled.logo__wrapper}>
              <Logo color="000" />
            </div>

            <label className={styled.comment__from_label}>
              <Field name="name" placeholder="Введите Ваше имя *" required />
              {errors.name && touched.name ? (
                <div className={styled.error}>{errors.name}</div>
              ) : null}
            </label>
            <label className={styled.comment__from_label}>
              <Field
                className={styled.comment__form_textarea}
                component="textarea"
                name="text"
                placeholder="Введите ваш комментарий *"
                rows="8"
                required
              />
              {errors.text && touched.text ? (
                <div className={styled.error}>{errors.text}</div>
              ) : null}
            </label>

            <button type="submit" className={styled.comment__btn}>
              Добавить комментарий
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CommentForm;
