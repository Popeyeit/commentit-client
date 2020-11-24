import React, { useState } from 'react';
import styled from './commentItem.module.css';
import Stars from '../stars/Stars';

const CommentItem = ({ text, name, likes = 0, _id, handleChangeStars }) => {
  const [stars, setStars] = useState(likes);

  const handleSetStars = async (e, newStars) => {
    setStars(newStars);
    await handleChangeStars(_id, Number(newStars));
  };

  return (
    <li className={styled.item}>
      <p className={styled.name}>{name}</p>
      <p className={styled.text}>{text}</p>
      <div className={styled.rating__wrapper}>
        <Stars stars={stars} handleSetStars={handleSetStars} id={_id} />
      </div>
    </li>
  );
};

export default CommentItem;
