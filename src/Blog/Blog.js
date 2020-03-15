import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import RiABg from './Assets/riabackground.png'
import Algorithms from './Assets/algorithms.jpg';
import Literacy from './Assets/literacy.jpg';
import Bias from './Assets/bias.jpg';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '#/'},
  { title: 'About', url: '#/about' },
  { title: 'Bias in Media', url: '#/bias' },
  { title: 'Media Literacy', url: '#/literacy' },
  { title: 'Navigating Reddit', url: '#/reddit' },
  { title: 'Bonus: Bias in Algorithms', url: '#/algorithms' },
];
const mainFeaturedPost = {
  title: 'Staying Aware: Reddit Media Survival Guide',
  description:
    "In a digital world full of lies, deception, and misdirections all competing as news, it can be tough to navigate. Here's how we can make a difference.",
  image: RiABg,
  imgText: 'RiA Logo',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Bias in Media: What is it?',
    date: 'Mar 14',
    description:
      'Media bias permeates every aspect of our lives - even some you may not expect. Here are ways to be aware.',
    image: Bias,

    imageText: 'RiA Logo',
    endpoint: '#/bias'
  },
  {
    title: 'Practicing Media Literacy',
    date: 'Mar 14',
    description:
      'Being media literate is a way to combat bias in media - but what is it, really? Find out with us.',
    image: Literacy,
    imageText: 'RiA Logo',
    endpoint: '#/literacy',
  },
  {
    title: 'Bonus: Bias in Algorithms',
    date: 'Mar 14',
    description:
      'Content algorithms have bias that permeates through to our daily lives in many different ways - do you know how?',
    image: Algorithms,
    imageText: 'RiA Logo',
    endpoint: '#/bias',
  },
  
];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Why Reddit Is Awful" sections={sections} />
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
          </Grid>
      </Container>
      <Footer title="Reddit is Awful" description="A project made for Dr. Klein's Technical English 3130 class" />
    </React.Fragment>
  );
}
