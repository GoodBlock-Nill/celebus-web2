import { Grid, Typography } from '@mui/material';
import { Box, Container, useTheme } from '@mui/system';
import React from 'react';
import Styles from './Screen4.module.css';
import LeftPhoneImg from '../../assets/images/screen4-1.png';
import RightPhoneImg from '../../assets/images/screen4-2.png';
import LeftMessageCard from '../../assets/images/screen4Card.png';
import RightMessageCard from '../../assets/images/screen4Card2.png';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

//스크린 4 컴포넌트
export default function Screen4() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    //전체 화면 레이아웃
    <section className={Styles.screen}>
      <Container maxWidth="lg">
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          {/* 왼쪽 그룹 */}
          <Grid item xs={12} md={6} className={Styles.leftGroup}>
            {/* 뱃지 래퍼 */}
            <Box
              className={Styles.badgeWrap}
              sx={{
                background: theme.palette.background.badge,
                width: '138px',
                textAlign: 'center',
                borderRadius: '95px',
                padding: '5px 0',
                marginBottom: '2rem',
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.text.badge,
                  fontSize: theme.typography.badge,
                }}
              >
                Gift
              </Typography>
            </Box>
            {/* 텍스트 그룹 */}
            <Box className={Styles.textGroup}>
              {/* 첫번째 행 텍스트 */}
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: {
                    xs: theme.typography.h4.fontSize,
                    md: theme.typography.h3.fontSize,
                  },
                  fontWeight: 700,
                }}
              >
                {t('screen4.text1')}
              </Typography>
              {/* 두번째 행 텍스트 */}
              <Box className={Styles.textGroup2}>
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: {
                      xs: theme.typography.h4.fontSize,
                      md: theme.typography.h3.fontSize,
                    },
                    fontWeight: 700,
                  }}
                >
                  {t('screen4.text2')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: theme.typography.h4.fontSize,
                      md: theme.typography.h3.fontSize,
                    },
                    fontWeight: 700,
                    paddingLeft: 1,
                  }}
                >
                  {t('screen4.text3')}
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: {
                      xs: theme.typography.h4.fontSize,
                      md: theme.typography.h3.fontSize,
                    },
                    fontWeight: 700,
                    paddingLeft: 1,
                  }}
                >
                  {t('screen4.text4')}
                </Typography>
              </Box>
            </Box>
            <Fade>
              {/* 왼쪽 이미지 그룹 */}
              <Box className={Styles.leftImgGroup}>
                <img src={LeftPhoneImg} alt="celebus img" />
                <img
                  src={LeftMessageCard}
                  alt="celebus gift"
                  className={`${Styles.leftBadge} ${Styles.imageFloating}`} //플러팅 애니메이션 적용
                />
              </Box>
            </Fade>
          </Grid>
          {/* 오른쪽 그룹 */}
          <Grid item xs={12} md={6} className={Styles.rightGroup}>
            <Fade direction="right">
              {/* 오른쪽 이미지 그룹 */}
              <Box className={Styles.rightImgGroup}>
                <img src={RightPhoneImg} alt="celebus img" />
                <img
                  src={RightMessageCard}
                  alt="celebus gift"
                  className={Styles.rigthBadge}
                />
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
