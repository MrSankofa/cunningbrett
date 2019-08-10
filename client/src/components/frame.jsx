import React from 'react';
import Header from './Header.jsx';
import Portfolio from './portfolio/Portfolio.jsx';

// export default class Frame extends React.Component {
//   render() {
//     return <React.Fragment>
//       <Header/>
//       <Portfolio/>
//     </React.Fragment>
//   }
// }

const Frame = () => {
  return (
    <React.Fragment>
      <Header/>
      <Portfolio/>
    </React.Fragment>
  )
}

export default Frame;