import React from 'react';
import { styled, TextField } from '@mui/material';
import PropTypes from 'prop-types';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px'
  }
});

const InputFilter = ({ value, onChange }) => {
  return (
    <StyledTextField
      size="small"
      fullWidth
      value={value}
      onChange={onChange}
      placeholder="Filter by name"
    />
  );
};

InputFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputFilter;
