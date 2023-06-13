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
            height: { md: '200px', xs: '120px' },
          }}
        >
          {/* Footer Left */}
          {/* <Grid item xs={12} md={3} textAlign={isMd ? 'center' : 'inherit'}>
            <Box>
              <IconButton href="https://youtube.com" target="_blank">
                <YouTubeIcon />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid> */}
          {/* Footer Center */}
          <Grid
            item
            xs={12}
            md={6}
            textAlign={isMd ? 'center' : 'inherit'}
            sx={{ paddingTop: '1rem' }}
          >
            <Typography color={theme.palette.text.secondary}>
              © 2023 Celebus, Inc. All Rights Reserved.
            </Typography>
          </Grid>
          {/* Footer Right */}
          <Grid item xs={12} md={6} textAlign={isMd ? 'center' : 'end'}>
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
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
