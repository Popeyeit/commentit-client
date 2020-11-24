import React from 'react';
import CommentItem from '../comment-item/CommentItem';
import styled from './commentList.module.css';
const CommentList = ({ comments, handleChangeStars, changeComments }) => {
  return (
    <ul className={styled.list}>
      {comments.map(el => (
        <CommentItem
          {...el}
          key={el._id}
          handleChangeStars={handleChangeStars}
          changeComments={changeComments}
        />
      ))}
    </ul>
  );
};

export default CommentList;
