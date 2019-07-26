import React, {Component} from 'react';

class NameComponent extends Component {
  
  componentDidMount() {
    console.log('mounted')
  }

  render() {

  return (
      <div>
        <p>Fernanda</p>
      </div>
  );
  }
}

export default NameComponent;
