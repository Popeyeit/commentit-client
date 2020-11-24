import React from 'react';
import data from './data';
import CommentItem from '../comment-item/CommentItem';
import styled from './commentList.module.css';
const CommentList = () => {
  return (
    <section className={styled.comments}>
      <h2 className={styled.title}> Комментарии </h2>
      <ul className={styled.list}>
        {data.map(el => (
          <CommentItem {...el} key={el.name} />
        ))}
      </ul>
    </section>
  );
};

export default CommentList;
