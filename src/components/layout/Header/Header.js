import React, { useEffect, useState } from 'react';
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

// 로고 스타일을 설정합니다.
const Logo = styled('img')(({ theme }) => ({
  maxWidth: '30%', // Adjust the width according to your logo size
  paddingTop: 3,
}));

// 버튼 그룹 스타일을 설정합니다.
const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

// AppBar 스타일을 설정합니다.
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.main, // Replace this with your desired color
  boxShadow: 'none',
  width: '100vw',
}));

// Header 컴포넌트를 정의합니다.
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

  // 스크롤을 내리면 헤더가 보이도록 설정
  const [scrolled, setScrolled] = useState(true);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 버튼 및 언어 선택기를 렌더링하는 함수입니다.
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
            App Store
          </Button>
          <Button
            component="a"
            to="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Icon icon="ri:google-play-fill" />}
          >
            Google Play
          </Button>
          <SelectLang />
        </ButtonGroup>
      </Grid>
    );
  };

  // Header를 렌더링합니다.
  return (
    <StyledAppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? 'white' : 'transparent',
        display: scrolled ? 'flex' : 'none',
        transition: 'background-color 0.3s',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
          >
            <Grid item>
              <Link to="/">
                <Logo src={logo} alt="Logo" sx={{ maxWidth: '180px' }} />
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
                          LinkComponent="a"
                          href="https://apps.apple.com/app/idYOUR_APP_ID"
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<AppStoreIcon />}
                        >
                          AppStore
                        </Button>
                        <Button
                          LinkComponent="a"
                          href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
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
