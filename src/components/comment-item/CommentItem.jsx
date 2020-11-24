import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import styled from './commentItem.module.css';

const StyledRating = withStyles({
  iconFilled: {
    color: '#0455BF',
  },
  iconHover: {
    color: '#0455BF',
  },
})(Rating);

const CommentItem = ({ text, name, likes, dislikes }) => {
  const [value, setValue] = useState(0);
  return (
    <li className={styled.item}>
      <p className={styled.name}>{name}</p>
      <p className={styled.text}>{text}</p>
      <div className={styled.rating__wrapper}>
        <Box component="fieldset" borderColor="transparent">
          <StyledRating
            name="customized-color"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </div>
    </li>
  );
};

export default CommentItem;
