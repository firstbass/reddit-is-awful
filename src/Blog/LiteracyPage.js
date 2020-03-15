import Markdown from './Markdown'
import post from './blog-post.3.md'
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer'
import Bias1 from './Assets/biasinmedia.png';




const useStyles = makeStyles(theme => ({
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
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
export default function Page(){
    let [markdown, setMarkdown] = useState("");
    const classes = useStyles();

    useEffect(()=>{
        fetch(post)
            .then(response => response.text())
            .then(text => {setMarkdown(text)})
    
    },[]);
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
            <Header title="Why Reddit Is Awful" sections={sections} />
            <img src={Bias1} width='50%' />
            <Markdown class={classes.markdown} key={post.substring(0, 40)}>
                {markdown}
             </Markdown>
             </Container>
              <Footer title="Reddit is Awful" description="A project made for Dr. Klein's Technical English 3130 class" />
        </React.Fragment>
    )
}