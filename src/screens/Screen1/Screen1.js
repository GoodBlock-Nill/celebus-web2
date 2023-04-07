import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Screen1 = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          screen1
        </Grid>
      </Container>
    </section>
  );
};

export default Screen1;
