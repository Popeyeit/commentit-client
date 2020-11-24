import React from 'react';
import styled from './commentSectionHeading.module.css';
const CommentSectionHeading = () => {
  return (
    <>
      <h1 className={styled.title}>
        Оставь свое послание миру. Напиши комментарий который увидит весь
        интернет!
      </h1>
      <img src="../../img/comment.svg" alt="comment_img" title="comment" />
    </>
  );
};

export default CommentSectionHeading;
