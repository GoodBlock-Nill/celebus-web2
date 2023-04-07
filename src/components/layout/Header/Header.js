import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { Container, styled, useTheme } from '@mui/system';
import logo from '../../../assets/images/logo.png';
import AppStoreIcon from '@mui/icons-material/Apple';
import { Icon } from '@iconify/react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SelectLang from '../../common/SelectLanguage';
import { Link } from 'react-router-dom';

const Logo = styled('img')(({ theme }) => ({
  maxWidth: '245.6px', // Adjust the width according to your logo size
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.main, // Replace this with your desired color
  boxShadow: 'none',
  width: '100vw',
}));

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const renderButtonsAndLanguageSelector = () => {
    return (
      <Grid item>
        <ButtonGroup>
          <Button
            component="a"
            to="https://apps.apple.com/app/idYOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<AppStoreIcon />}
          >
            AppStore
          </Button>
          <Button
            component="a"
            to="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Icon icon="ri:google-play-fill" />}
          >
            GooglePlay
          </Button>
          <SelectLang />
        </ButtonGroup>
      </Grid>
    );
  };

  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Link to="/">
                <Logo src={logo} alt="Logo" />
              </Link>
            </Grid>
            {isSmallScreen ? (
              <>
                <IconButton
                  edge="end"
                  color="black"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                  PaperProps={{
                    style: {
                      width: '50%',
                      height: '100%',
                      paddingRight: '1rem',
                      paddingLeft: '1rem',
                    },
                  }}
                >
                  <Box display="flex" flexDirection="column">
                    <Box width="100%" display="flex" justifyContent="flex-end">
                      <IconButton
                        edge="end"
                        color="black"
                        aria-label="close"
                        onClick={toggleDrawer(false)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>
                    <Grid item>
                      <ButtonGroup
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Button
                          component="a"
                          to="https://apps.apple.com/app/idYOUR_APP_ID"
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<AppStoreIcon />}
                        >
                          AppStore
                        </Button>
                        <Button
                          component="a"
                          to="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<Icon icon="ri:google-play-fill" />}
                        >
                          GooglePlay
                        </Button>
                        <SelectLang />
                      </ButtonGroup>
                    </Grid>
                  </Box>
                </Drawer>
              </>
            ) : (
              renderButtonsAndLanguageSelector()
            )}
          </Grid>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
