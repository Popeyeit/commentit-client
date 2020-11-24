import React from 'react';
import styled from './commentSectionHeading.module.css';

const CommentSectionHeading = ({ redirect }) => {
  return (
    <>
      <h1 className={styled.title}>
        Оставь свое послание миру. Напиши комментарий который увидит весь
        интернет!
      </h1>
      <img
        src="../../img/comment.svg"
        alt="comment_img"
        title="comment"
        className={styled.img}
      />

      <button type="button" onClick={redirect} className={styled.heading__btn}>
        Начать
      </button>
    </>
  );
};

export default CommentSectionHeading;
