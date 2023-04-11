// SelectLanguage.js: 언어 선택 드롭다운 컴포넌트

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/system';

export default function SelectLanguage() {
  const theme = useTheme();
  // 언어 설정 상태
  const [locale, setLocale] = React.useState('en');
  const { t, i18n } = useTranslation();

  // 언어 설정 핸들러
  const handleChange = (event) => {
    const newLocale = event.target.value;
    setLocale(newLocale);
    i18n.changeLanguage(newLocale);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
      <Select
        value={locale}
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
        {/* 언어 선택 메뉴 항목 */}
        <MenuItem value="en">{t(`language.English`)}</MenuItem>
        <MenuItem value="ko">{t(`language.Korean`)}</MenuItem>
        <MenuItem value="ja">{t(`language.Japanese`)}</MenuItem>
        <MenuItem value="zh">{t(`language.Chinese`)}</MenuItem>
      </Select>
    </FormControl>
  );
}
