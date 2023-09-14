import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { styled, TextField } from '@mui/material';

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

export default memo(InputFilter);
