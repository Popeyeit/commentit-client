import React from 'react';
import CommentItem from '../comment-item/CommentItem';
import styled from './commentList.module.css';

const CommentList = ({ comments, handleChangeStars }) => {
  return (
    <ul className={styled.list}>
      {comments.map(el => (
        <CommentItem
          {...el}
          key={el._id}
          handleChangeStars={handleChangeStars}
        />
      ))}
    </ul>
  );
};

export default CommentList;
