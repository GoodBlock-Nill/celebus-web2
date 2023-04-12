import { Grid, Typography } from '@mui/material';
import { Box, Container, useTheme } from '@mui/system';
import React from 'react';
import Styles from './Screen3.module.css';
import ClipVideo from '../../assets/video/clipvideo1.gif';
import PlayerBtn from '../../assets/images/playerbtn.png';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

// 스크린 3 컴포넌트
export default function Screen3() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <section className={Styles.screen}>
      <Container maxWidth="lg">
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          {/* 왼쪽 이미지 그룹 */}
          <Grid item xs={12} md={6} className={Styles.leftGroup}>
            <Box className={Styles.imageGroup}>
              {/* 이미지에 Fade 애니메이션 추가 */}
              <Fade direction="left">
                <img src={ClipVideo} alt="clip video" />
              </Fade>
            </Box>
          </Grid>
          {/* 오른쪽 텍스트 그룹 */}
          <Grid item xs={12} md={6} className={Styles.rightGroup}>
            <Fade>
              {/* 첫 번째 행 텍스트 */}
              <Box className={Styles.textGroup}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: theme.typography.h4.fontSize,
                      md: theme.typography.h3.fontSize,
                    },
                    fontWeight: 700,
                    color: theme.palette.text.secondary,
                    textAlign: 'right',
                  }}
                >
                  {t('screen3.text1')}
                </Typography>
              </Box>
              {/* 두 번째 행 텍스트 */}
              <Box className={Styles.textGroup}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: theme.typography.h4.fontSize,
                      md: theme.typography.h3.fontSize,
                    },
                    fontWeight: 700,
                    color: theme.palette.text.third,
                  }}
                >
                  {t('screen3.text2')}
                </Typography>
              </Box>
              {/* 세 번째 행 텍스트와 플레이어 버튼 이미지 */}
              <Box className={`${Styles.textGroup} ${Styles.playerText}`}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: theme.typography.h4.fontSize,
                      md: theme.typography.h3.fontSize,
                    },
                    fontWeight: 700,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {t('screen3.text3')}
                </Typography>
                <img src={PlayerBtn} alt="player Button" />
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
