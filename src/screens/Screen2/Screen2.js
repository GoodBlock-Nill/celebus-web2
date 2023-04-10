import { Grid, Typography } from '@mui/material';
import { Box, Container, useTheme } from '@mui/system';
import React from 'react';
import Styles from './Screen2.module.css';
import ScreenImg from '../../assets/images/screen2.png';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';

// 스크린 2 컴포넌트
export default function Screen2() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <section className={Styles.screen}>
      <Container maxWidth="lg">
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          {/* 왼쪽 텍스트 그룹 */}
          <Grid item xs={12} md={6} className={Styles.leftGroup}>
            <Fade>
              <Box className={Styles.textGroup}>
                {/* 첫 번째 행 텍스트 */}
                <Typography
                  sx={{
                    fontSize: theme.typography.h4,
                    color: theme.palette.text.secondaryWhite,
                    fontWeight: 700,
                    paddingLeft: 2,
                    paddingRight: 2,
                  }}
                >
                  {t('screen2.text1')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: theme.typography.h3,
                    color: theme.palette.text.mainWhite,
                    fontWeight: 700,
                  }}
                >
                  {t('screen2.text2')}
                </Typography>
              </Box>
              <Box className={Styles.textGroup}>
                {/* 두 번째 행 텍스트 */}
                <Typography
                  sx={{
                    fontSize: theme.typography.h4,
                    color: theme.palette.text.secondaryWhite,
                    fontWeight: 700,
                    paddingLeft: 2,
                    paddingRight: 2,
                  }}
                >
                  {t('screen2.text3')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: theme.typography.h3,
                    color: theme.palette.text.mainWhite,
                    fontWeight: 700,
                  }}
                >
                  {t('screen2.text4')}
                </Typography>
              </Box>
            </Fade>
          </Grid>
          {/* 오른쪽 이미지 그룹 */}
          <Grid item xs={12} md={6} className={Styles.rightGroup}>
            <Box className={Styles.imageGroup}>
              {/* Fade 컴포넌트를 사용하여 이미지에 애니메이션 효과 적용 */}
              <Fade direction="right">
                <img src={ScreenImg} alt="Celebus contents" />
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
