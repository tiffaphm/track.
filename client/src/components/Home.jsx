import React from 'react';
import Masthead from './Masthead';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="home-container">
        <Masthead />
      </div>
    );
  }
}

export default Home;
