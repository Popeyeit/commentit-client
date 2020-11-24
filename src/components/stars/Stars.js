import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
  iconFilled: {
    color: '#0455BF',
  },
  iconHover: {
    color: '#0455BF',
  },
})(Rating);

const Stars = ({ stars, handleSetStars, id }) => {
  return (
    <Box component="fieldset" borderColor="transparent">
      <StyledRating name={id} value={stars} onChange={handleSetStars} />
    </Box>
  );
};

export default Stars;
