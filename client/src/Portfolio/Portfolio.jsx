import React from 'react';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';

export default class Portfolio extends React.Component {
  render() {
    return <React.Fragment>
      <Header/>
      <About/>
    </React.Fragment>
  }
}