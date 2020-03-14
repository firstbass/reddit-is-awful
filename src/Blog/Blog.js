import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import RiABg from './Assets/riabackground.png'
import RiALogo from './Assets/ria.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
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
  { title: 'About', url: '#' },
  { title: 'Media Literacy', url: '#' },
  { title: 'Selection Bias', url: '#' },
  { title: 'Navigating Reddit', url: '#' },
  { title: 'Bonus: Bias in Algorithms', url: '#' },
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
    title: 'Selection Bias: What is it?',
    date: 'Mar 14',
    description:
      'Selection bias blah blah blah blah',
    image: RiALogo,

    imageText: 'RiA Logo',
  },
  {
    title: 'Practicing Media Literacy',
    date: 'Mar 14',
    description:
      'Media Literacy blah blah blah',
    image: RiALogo,
    imageText: 'RiA Logo',
  },
  {
    title: 'Bonus: Bias in Algorithms',
    date: 'Mar 14',
    description:
      'Algorithms have bias blah blah blah',
    image: RiALogo,
    imageText: 'RiA Logo',
  },
  
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
  ],
  social: [
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Reddit Is Awful" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
          </Grid>
        </main>
      </Container>
      <Footer title="Reddit is Awful" description="A Technical English project made for Dr. Klein's Technical English 3130 class" />
    </React.Fragment>
  );
}
