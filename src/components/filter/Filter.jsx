import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const Filter = ({ handleChangeFilter, filter }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={filter}
          onChange={handleChangeFilter}
          name="checkedB"
          color="primary"
        />
      }
      label="Показать популярные"
    />
  );
};

export default Filter;
