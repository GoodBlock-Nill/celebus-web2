import {
  Grid,
  Button,
  // IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Container, useTheme } from '@mui/system';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';

const Footer = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <footer>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: { md: '250px', xs: '250px' },
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          {/* Footer Left */}
          <Grid item xs={12} md={12} textAlign={isMd ? 'center' : 'inherit'}>
            <Button
              href="https://celebus.zendesk.com/hc/en-us/articles/6848186309903"
              target="_blank"
            >
              <Typography color={theme.palette.text.secondary}>
                Privacy Policy
              </Typography>
            </Button>
            <Button
              href="https://celebus.zendesk.com/hc/en-us/articles/6847986261647"
              target="_blank"
            >
              <Typography color={theme.palette.text.secondary}>
                Terms of Service
              </Typography>
            </Button>
            <Button
              href="https://celebus.zendesk.com/hc/en-us/"
              target="_blank"
            >
              <Typography color={theme.palette.text.secondary}>
                Help Center
              </Typography>
            </Button>
          </Grid>
          {/* Footer Center */}
          <Grid item xs={12} md={12} textAlign={isMd ? 'center' : 'inherit'}>
            <Typography
              color={theme.palette.text.secondary}
              sx={{ fontSize: '0.8rem', marginTop: '0.2rem' }}
            >
              Contact Us: support@celebus.app
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              sx={{ fontSize: '0.8rem', marginTop: '0.2rem' }}
            >
              Location: 21-10, Dosan-daero 30-gil, Gangnam-gu, Seoul, Republic
              of Korea
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              sx={{ fontSize: '0.8rem', marginTop: '0.2rem' }}
            >
              Business registration number: 674-88-02641
            </Typography>
          </Grid>
          {/* Footer Right */}
          <Grid
            item
            xs={12}
            md={12}
            textAlign={isMd ? 'center' : 'inherit'}
            sx={{ paddingTop: '1rem' }}
          >
            <Typography color={theme.palette.text.secondary}>
              © 2023 Celebus Inc. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
