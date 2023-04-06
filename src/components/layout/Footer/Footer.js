import { Grid, Button, IconButton, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../../../theme';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          {/* Footer Left */}
          <Grid item xs={12} md={4}>
            <Box>
              <IconButton
                component={Link}
                to="https://youtube.com"
                target="_blank"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                component={Link}
                to="https://twitter.com"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
          {/* Footer Center */}
          <Grid item xs={12} md={4} textAlign="center">
            <Typography color={theme.palette.text.secondary}>
              © 2023 Celebus, Inc. All Rights Reserved.
            </Typography>
          </Grid>
          {/* Footer Right */}
          <Grid item xs={12} md={4} textAlign="end">
            <Button component={Link} to="#" target="_blank">
              <Typography color={theme.palette.text.secondary}>
                Privacy Policy
              </Typography>
            </Button>
            <Button component={Link} to="#" target="_blank">
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
