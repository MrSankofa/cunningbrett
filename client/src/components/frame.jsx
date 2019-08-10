import React from 'react';
import Header from '../components/Header.jsx';
import Portfolio from './portfolio/Portfolio.jsx';

export default class Frame extends React.Component {
  render() {
    return <React.Fragment>
      <Header/>
      <Portfolio/>
    </React.Fragment>
  }
}