import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import theme from '../../theme';

export default function SelectSmall() {
  const [age, setLocale] = React.useState('en');

  const handleChange = (event) => {
    setLocale(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Language selection' }}
        sx={{
          borderRadius: '22px',
          height: '32px',
          textAlign: 'center',
          color: theme.palette.text.main,
        }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ko">한국어</MenuItem>
        <MenuItem value="ja">日本語</MenuItem>
        <MenuItem value="zh">简体中文</MenuItem>
      </Select>
    </FormControl>
  );
}
