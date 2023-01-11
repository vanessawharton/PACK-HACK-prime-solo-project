import React from 'react';

import Grid from '@mui/material/Grid'; 
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import './AboutPage.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function AboutPage() {

  return (
    <div className="about-container">
      <Grid container spacing={1} columns={8}>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <Item className="item">
            <Typography gutterBottom variant="h5">
            Technologies Used:
            </Typography>
            <Divider />
            <List dense sx={{ }}>
              <ListItem>
                <ListItemText inset>Node</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Express</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>React</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>PostgreSQL</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Heroku</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Git</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>GitHub</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Figma</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Postico</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Javascript</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>HTML</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>CSS</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Nodemon</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Passport</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Redux-saga</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Material UI</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Day.js</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>Sweetalert 2</ListItemText>
              </ListItem>
            </List>
          </Item>
        </Grid>
        <Grid xs={2} display="flex" justifyContent="center" alignItems="center">
          <Item>
            <img src="/images/vw-photo" />
            <Divider />
            <h4>Find me on LinkedIn:</h4> 
            <h4>@Vanessa-Wharton</h4>
            <Divider />
            <h4>Github:</h4> 
            <h4>@VanessaWharton</h4>
            <Divider />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutPage;
