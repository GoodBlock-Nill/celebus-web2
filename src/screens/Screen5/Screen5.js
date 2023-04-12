import { Button, Grid, Typography } from '@mui/material';
import { Box, Container, styled, useTheme } from '@mui/system';
import React from 'react';
import Styles from './Screen5.module.css';
import AppStoreIcon from '@mui/icons-material/Apple';
import { Icon } from '@iconify/react';
import RightPhoneImg from '../../assets/images/screen5.png';
import RightPhoneLogo from '../../assets/images/screen5Logo.png';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';

const AppButton = styled(Button)(({ theme }) => ({
  borderRadius: '63px',
  backgroundColor: theme.palette.background.badge,
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  marginTop: '1rem',
  marginBottom: '3rem',
  marginRight: '1rem',
  fontSize: '1.125rem',
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.background.main,
  },
}));

export default function Screen5() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <section className={Styles.screen}>
      <Container maxWidth="lg">
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          <Grid item xs={12} md={6} className={Styles.leftGroup}>
            <Fade direction="left">
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: theme.typography.h4.fontSize,
                      md: theme.typography.h3.fontSize,
                    },
                    fontWeight: 700,
                    color: theme.palette.text.mainWhite,
                  }}
                >
                  {t('screen5.text1')}
                </Typography>
              </Box>
              <Box>
                <AppButton
                  LinkComponent={'a'}
                  href="https://apps.apple.com/app/idYOUR_APP_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<AppStoreIcon />}
                >
                  App Store
                </AppButton>
                <AppButton
                  LinkComponent={'a'}
                  href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Icon icon="ri:google-play-fill" />}
                >
                  Google Play
                </AppButton>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} className={Styles.rightGroup}>
            <Fade>
              <Box className={Styles.rightImgGroup}>
                <img
                  src={RightPhoneImg}
                  alt="Celebus"
                  className={Styles.rightPhoneImg}
                />
                <img
                  src={RightPhoneLogo}
                  alt="logo"
                  className={Styles.rightPhoneLogo}
                />
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
