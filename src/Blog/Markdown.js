import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { CardContent, Card, Container,  makeStyles, Grid, createPalette } from '@material-ui/core';

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: 5,
    alignLeft: 'true',
    color: '#11111'
  },
  title: {
    textShadow: 5
  },
  subtitle: {
    color: '#EEEEEE',
  },
  textCard: {
    margin: 10,
  }

}));

function PTypography(props) {
  const classes = useStyles();
  return ( 
    <Grid item xs={12} md={12} class={classes.textCard}>
        <Card >
        <CardContent>
        <Typography component="span" {...props} color="primary" />
        </CardContent>
        </Card>
    </Grid>
  );
}
function ATypography(props) {
  return ( 
    <a>
        <Typography {...props} color="inherit" />
        </a>
  );
}
function H1Typography(props) {
  const classes = useStyles();
  return ( 
    <Grid item xs={12} md={12}>
        <Container class={classes.title}>
        <Typography component="span" variant='h4' {...props} />
        </Container>
    </Grid>
  );
}

function H3Typography(props) {
  const classes = useStyles();
  return ( 
    <Grid item xs={12} md={12}>
        <Container class={classes.subtitle}>
        <Typography component="span" {...props} />
        </Container>
    </Grid>
  );
}
const options = {
  overrides: {
    h1: {
      component: H1Typography,
    },
    h2: { component: Typography, props: { variant: 'h6', align: 'left', color: "secondary" } },
    h3: { component: H3Typography },
    h4: {
      component: Typography,
      props: { paragraph: true, align: 'left' },
    },
    p: { component: PTypography, props: { paragraph: true, align: 'left' } },
    a: { component: ATypography, props: { paragraph: true, align: 'left' } },
    li: { component: PTypography, props: { paragraph: true, align: 'left' } },
    
  },
};


export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
