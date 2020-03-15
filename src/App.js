import React from 'react';
import Blog from './Blog/Blog'
import {HashRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import {ThemeProvider, useTheme, createMuiTheme} from '@material-ui/core'
import AlgorithmPage from './Blog/AlgorithmPage';
import RedditPage from './Blog/RedditPage';
import BiasPage from './Blog/BiasPage'
import LiteracyPage from './Blog/LiteracyPage'
import AboutPage from './Blog/AboutPage';

const theme = createMuiTheme({
  palette: {

    background:{
      paper: '#FF8717',
      default: '#FF4500',
      title: '#0079D3',
      subtitle: '#24A0ED'
    },
    primary: {
      main: "#333333"
    },
    secondary: {
      main: "#000000"
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#000000',
      footer: '#EEEEEE'
    },
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/algorithms" component={AlgorithmPage} />
          <Route path="/reddit" component={RedditPage} />
          <Route path="/literacy" component={LiteracyPage} />
          <Route path="/bias" component={BiasPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={Blog} />
        </Switch>
      </HashRouter>
    </div>
    </ThemeProvider>

  );
}

export default App;
